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
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: [nodeModulesPath]
            }
        ]
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    },
    resolve: {
        extensions: ['', '.ts', 'js']
    },
    plugns: []
};

module.exports = config;