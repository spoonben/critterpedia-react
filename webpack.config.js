const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|xvg|jpg|gif)$/,
        use: [{ loader: "file-loader", options: { esModule: false } }],
      },
    ],
  },
  plugins: [
    isDev &&
      new ReactRefreshPlugin({
        disableRefreshCheck: true,
      }),
    new HtmlWebpackPlugin({ filename: "./index.html", template: "index.ejs" }),
  ].filter(Boolean),
};
