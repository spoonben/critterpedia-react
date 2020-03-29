const port = process.env.PORT || 8080;

const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

const app = express();

if (process.env.NODE_ENV === "production") {
  // viewed at http://localhost:8080
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  });
} else {
  app.use(
    require("webpack-dev-middleware")(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(
    require("webpack-hot-middleware")(compiler, {
      log: false,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000,
    })
  );
}

console.log(`\n \n \nListening on ${port}`);
app.listen(port);
