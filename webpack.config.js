const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
    rules: [
            {
        test: /\.scss$/i,
            use: [
                "style-loader",
                //MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"],
            },
        {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        //new MiniCssExtractPlugin({ filename: 'styles.css'}),
    ],
    devServer: {
    // static: {
    // //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    port: 5500,
  },
};
//./src/index.js 