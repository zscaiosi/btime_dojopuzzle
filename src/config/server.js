const express = require('express');
const line = require('../controllers/lineController');

const app = () => {
    server = express();
    // Sets all middlewares
    server.use('/', line);

    return server;
};
// Singleton
module.exports.app = app;