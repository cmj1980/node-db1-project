const express = require("express");

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.use('*', (req, res) => {
    res.status(404).json({
        message: "request not found"
    })
})

module.exports = server;
