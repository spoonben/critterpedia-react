const port = process.env.PORT || 8080;

const express = require("express");
const path = require("path");

const app = express();

// viewed at http://localhost:8080
app.use(express.static(`${__dirname}/dist`));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

console.log(`\n \n \nListening on ${port}`);
app.listen(port);
