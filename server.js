const port = process.env.PORT || 8080



const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log(`\n \n \nListening on ${port}`)
app.listen(port);
