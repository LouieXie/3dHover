var webpack = require("webpack");
var webpackConfig = require("./webpack.config.base.js");

webpackConfig.entry = "./src/index.js";

webpackConfig.devtool = "source-map";

webpackConfig.plugins.push(
	new webpack.DefinePlugin({
	    PRODUCTION: false,
	})
)

module.exports = webpackConfig;