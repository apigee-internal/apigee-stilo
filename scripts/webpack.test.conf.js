const webpack = require('webpack');
const path = require('path');
const pwd = process.cwd();
const nodeModulesPath = path.resolve(pwd, './node_modules');
const conf = require('./webpack.base.config.js');

conf.devtool = 'inline-source-map';

module.exports = conf;
