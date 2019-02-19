const express = require('express');

const app = () => {
    server = express();
    // Sets all middlewares
    server.use('/', (req, res) => {

    });

    return server;
};
// Singleton
module.exports.app = app;