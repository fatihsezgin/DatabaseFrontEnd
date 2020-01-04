var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var engines = require('consolidate');


var indexRouter = require('./routes');

var app = express();


// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public/')));


app.use('/', indexRouter);

console.log("port:3000")
app.listen(3000)
module.exports = app;
