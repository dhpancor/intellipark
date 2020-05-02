const express = require('express');
const routes = express.Router();

routes.use('/users', require('./users'));
routes.use('/vehicles', require('./vehicles'));
// routes.use('/accesses', require('./accesses'));

module.exports = routes;
