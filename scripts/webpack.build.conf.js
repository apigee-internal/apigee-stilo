const webpack = require('webpack');
const pwd = process.cwd();
const path = require('path');
const conf = require('./webpack.base.config.js');

conf.devtool = 'source-map';
conf.entry = {
    app: ['./src/stilo.ts']
};
conf.output = {
    filename: './build/stilo.js',
    sourceMapFile: '[file].map'
};

// override tsconfig options
conf.ts = {
    configFileName: 'tsbuild.json'
};

// Style Loaders
conf.module.loaders = conf.module.loaders.concat([
    {
        test: /apigee\.less$/,
        loader: 'apigee-style!less'
    },
    {
        test: /apigee-base\.less$/,
        loader: 'apigee-base-style!less'
    }
]);

conf.resolveLoader = {
    alias: {
        "apigee-style": path.resolve(pwd, "./scripts/apigee-style-loader.js"),
        "apigee-base-style": path.resolve(pwd, "./scripts/apigee-base-style-loader.js")
    }
};

module.exports = conf;
