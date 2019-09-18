var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();



//router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var membershipRouter = require('./routes/membership');
var studyRouter = require('./routes/studylist');
var javascriptRouter = require('./routes/javascript');
var nodeRouter = require('./routes/node');
var expressRouter = require('./routes/express');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'boot')));


//using router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/membership', membershipRouter);
app.use('/studylist', studyRouter);
app.use('/javascript', javascriptRouter);
app.use('/node', nodeRouter);
app.use('/express', expressRouter);

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
