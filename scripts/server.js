/* global __dirname */
/* global process */
// This file is our entry point for Node.js
const express = require('express');
const path = require('path');
const basePath = process.cwd();
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();
const webpackSever = require('./webpack.server');

const port =  3000;

// We point our static assets to a dummy folder, so that when requesting for /build/* node doesn't use the built
// files in the real folder.
var publicPath = path.resolve(basePath, 'tmp');
app.use('/', express.static(publicPath));

// As we are using a dummy folder as our root, we need to set the path for index.html and other files explicitly.
// This is a bit of an issue, but I'm not expecting to add many static files anyway.
app.get('/', function(request, response){
    response.sendFile(path.resolve(basePath, './docs/index.html'));
});
app.get('/demo.css', function(request, response){
    response.sendFile(path.resolve(basePath, './docs/demo.css'));
});
app.get('/ico32.png', function(request, response){
    response.sendFile(path.resolve(basePath, './docs/ico32.png'));
});

webpackSever();

// Any requests to localhost:3000/build is proxied
// to webpack-dev-server
app.get('/css/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
});

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
});

// And run the server
app.listen(port, function () {
    console.log('Node server running at port %s and Webpack Server running at por 8080.', port);
});
