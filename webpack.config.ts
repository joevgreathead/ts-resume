import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const webpackConfig: webpack.Configuration = {
	mode: 'production',
	entry: "./src/index.tsx",
	output: {
		filename: "app.bundle.[contenthash].js",
		path: path.resolve(__dirname, "build")
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".css"],
	},
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/template.html"
		})
	]
};

export default webpackConfig;
