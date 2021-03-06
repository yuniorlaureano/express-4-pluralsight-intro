var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var path = require('path');
var morgan = require('morgan');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library' }));

require('./src/config/passport.js')(app);

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'pug');

const bookRouter = require('./src/routes/bookRoutes')('route info');

app.use('/books', bookRouter);
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname, '/views/', '/index.html'));
    res.render('index', { title: "MyApp", list: ['a', 'b'] });
});

app.listen(port, function() {
    debug('listeing on port ${chalk.green(3000)}');
});