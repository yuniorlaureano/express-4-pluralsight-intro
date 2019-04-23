var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var path = require('path');
var morgan = require('morgan');

var app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/', '/index.html'));
});

app.listen(port, function() {
    debug('listeing on port ${chalk.green(3000)}');
});