var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//mongo db and mongoose from config
const {connectdb}=require('../server/config/connection')
connectdb()



var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var ChatRoute=require('./routes/ChatRoute')
var MessageRoute=require('./routes/MessageRoute')
var app = express();
//cors setup
var cors=require('cors')
app.use(cors())

const dotenv = require('dotenv')
dotenv.config()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//image and video path for react page
app.use('/images',express.static(path.join(__dirname,'public/images')))
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', adminRouter);
app.use('/api/', usersRouter);
app.use('/api/chat',ChatRoute);
app.use('/api/message',MessageRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
