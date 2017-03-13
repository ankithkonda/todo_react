var webpack = require("webpack");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

    entry: "./src/index.js",
    output: {
        path:"public/assets",
        filename:"bundle.js",
        publicPath:"assets"
    },
    plugins: [

		// reloads browser when the watched files change
		new BrowserSyncPlugin({
			// use existing Apache virtual host
			proxy: 'http://localhost:80/',
			tunnel: false,
			// watch the built files and the index file
			files: ['public/assets/*', './index.php', './api/*.php']
		}),


	],
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    "presets": ["latest", "stage-0", "react"]
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader:"json-loader",
            }
        ]
    }
};
