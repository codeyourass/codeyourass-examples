var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

var root = path.join(__dirname, 'typescript-decorators');

app.use(express.static(root));

app.get('/*', function(req, res) {
    res.header('Content-Type', 'text/html');
    return res.send(fs.readFileSync(path.join(root, 'index.html')));
});

app.listen(process.env.PORT || 3000);