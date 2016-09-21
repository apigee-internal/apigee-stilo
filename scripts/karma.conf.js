const path = require('path');

const webpackConfig = require('./webpack.test.conf.js');

module.exports = config => {
    config.set({
        basePath: '',
        port: 3334, // Because why not
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            { pattern: 'test.loader.js', watched: false } //test files
        ],
        preprocessors: {
            'test.loader.js': ['webpack', 'sourcemap']
        },
        coverageReporter: {
            dir : '../coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'json' },
                { type: 'html' }
            ]
        },
        reporters: ['dots', 'coverage'],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        singleRun: true // Just run once by default
    });
};