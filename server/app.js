const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/routes');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/v1', routes);

module.exports = app;
