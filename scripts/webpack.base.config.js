const webpack = require('webpack');
const path = require('path');
const pwd = process.cwd();
const nodeModulesPath = path.resolve(pwd, './node_modules');

const config = {
    externals: {},
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            },
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: [nodeModulesPath]
            },
            {
                test: /\.less$/,
                loader: 'css2json!less',
                exclude: [
                    nodeModulesPath,
                    path.resolve(pwd, './src/apigee.less'),
                    path.resolve(pwd, './src/globals/apigee-base.less'),
                    path.resolve(pwd, './src/components/apigee-components.less')
                ]
            },
            {
                test: /\.(?:eot|ttf|woff|woff2)$/,
                loader: 'copy-file'
            },
        ]
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    },
    resolve: {
        extensions: ['', '.ts', 'js']
    },
    resolveLoader: {
        modulesDirectories: ["scripts/loaders", "web_loaders", "web_modules", "node_loaders", "node_modules"],
        extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"],
        packageMains: ["webpackLoader", "webLoader", "loader", "main"]
    },
    plugns: []
};

module.exports = config;