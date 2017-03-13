var webpack = require("webpack");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

    entry: "./src/index.js",
    output: {
        path:"dist/assets",
        filename:"bundle.js",
        publicPath:"assets"
    },
    plugins: [

		// reloads browser when the watched files change
		new BrowserSyncPlugin({
			// use existing Apache virtual host
			proxy: 'http://localhost:8888/',
			tunnel: false,
			// watch the built files and the index file
			files: ['dist/assets/*', './index.php', './api/*.php']
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
            }
        ]
    }
};
