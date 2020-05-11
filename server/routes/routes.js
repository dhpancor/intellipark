const express = require('express');
const routes = express.Router();

routes.use('/users', require('./users'));
routes.use('/vehicles', require('./vehicles'));
routes.use('/accesslog', require('./accesslog'));

module.exports = routes;
