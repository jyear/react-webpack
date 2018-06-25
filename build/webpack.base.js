const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rootPath = path.join(__dirname, "../src");
var entries = {};
entries.app = path.resolve(rootPath, "index.tsx");
var webpackConfig = {
	entry: entries,
	resolve: {
		extensions: [".js", ".ts", ".json", ".tsx", ".jsx", ".less", ".css"]
	},
	externals: {
		React: "react",
		ReactDOM: "react-dom",
		Redux: "redux",
		ReactRouter: "react-router"
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.html$/,
				use: {
					loader: "underscore-template-loader"
				}
			},
			{
				test: /\.js|tsx|ts$/,
				use: ["babel-loader", "ts-loader"],
				include: rootPath
			},
			{
				test: /\.css|less$/,
				exclude: /assets/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								modules: true,
								localIdentName:
									"assets/css/[name]_[local]--[hash:base64:5]",
								minimize: false
							}
						},
						"postcss-loader",
						"less-loader"
					]
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
							name: "assets/img/[name].[hash:9].[ext]"
							// publicPath:
							// 	process.env.NODE_ENV === "development"
							// 		? config.dev.assetsPublicPath
							// 		: config.build.assetsPublicPath
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
							name: "assets/font/[name].[hash:9].[ext]"
							// publicPath:
							// 	process.env.NODE_ENV === "development"
							// 		? config.dev.assetsPublicPath
							// 		: config.build.assetsPublicPath
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(rootPath, "../public/index.html")
		}),
		new ExtractTextPlugin("assets/css/[name].css")
	]
};
module.exports = webpackConfig;
