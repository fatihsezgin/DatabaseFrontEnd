var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var engines = require('consolidate');


var indexRouter = require('./routes');

var loginController = require('././controllers/LoginController');
var indexController = require('./controllers/IndexController');
var helperController = require('./controllers/HelperController');
var waitDetailController = require('./controllers/WaitDetailController');
var workOrderController = require('./controllers/WorkOrderController');
var workOrderDisplayController = require('./controllers/WorkOrderDisplayController');




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


app.use('/',loginController);
app.use('/index',indexController);
app.use('/helper',helperController);
app.use('/wait-detail',waitDetailController);
app.use('/work-order',workOrderController);
app.use('/work-order-display', workOrderDisplayController);


//app.use('/', indexRouter);


console.log("port:3000")
app.listen(3000)
module.exports = app;
