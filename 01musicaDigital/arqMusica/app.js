var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const myutils = require('./utils/myUtils');

mongoose.connect('mongodb://127.0.0.1:27017/arqMusicas', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
      console.log('Mongo ready: ' + mongoose.connection.readyState);
      mongoose.connection.db.dropCollection('obras', function(err, result) {
        if(err) console.log(err);
        console.log(result);
      });
      myutils.setup_db();
    })
    .catch((erro)=> console.log('Mongo: erro na conexão: ' + erro));

var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apiRouter);

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
