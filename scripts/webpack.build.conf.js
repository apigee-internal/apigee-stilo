const webpack = require('webpack');
const pwd = process.cwd();
const path = require('path');
const conf = require('./webpack.base.config.js');
const autoprefixer = require('autoprefixer');

conf.devtool = 'source-map';
conf.entry = {
    app: ['./src/apigeeStyle.ts']
};
conf.output = {
    path: path.resolve(pwd, './build/'),
    publicPath: '/build/',
    filename: 'apigeeStyle.js',
    sourceMapFile: '[file].map'
};

// override tsconfig options
conf.ts = {
    configFileName: 'tsbuild.json'
};

// Style Loaders
conf.module.loaders = [
    {
        test: /apigee\.less$/,
        loader: 'style-emiter!postcss-loader!less'
    },
    {
        test: /apigee-base\.less$/,
        loader: 'style-emiter!postcss-loader!less'
    },
    {
        test: /apigee-components\.less$/,
        loader: 'style-emiter!postcss-loader!less'
    }
].concat(conf.module.loaders);

conf.postcss = [ autoprefixer({ browsers: ['last 2 versions'] }) ];

module.exports = conf;
