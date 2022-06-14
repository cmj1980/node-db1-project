const express = require("express");

const server = express();

const accountsRouter = require('./accounts/accounts-router');

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.use('*', (req, res) => {
    res.status(404).json({
        message: "request not found"
    })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
})

module.exports = server;
