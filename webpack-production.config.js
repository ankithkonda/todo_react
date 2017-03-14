"use strict";

var webpackConfig = require('./webpack.config.js');

// strip out console.log statements
webpackConfig.module.loaders.push({
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'strip-loader?strip[]=console.log!babel-loader'
});


module.exports = webpackConfig;
