const http = require('http');
const port = process.env.PORT || 3003;
const app = require('./app')
const mongoose = require('mongoose');
const config = {db: process.env.MONGODB || 'mongodb://localhost:27017/users'}

http
    .createServer()
    .on('request', app)
    .on('error', function(error){
        switch (error.code) {
            case 'EADDRINUSE':
            console.log('Puerto en uso');
            break;
            case 'EACCES':
            console.log('Error de permisos');
            break;
            default:
            throw error;
        }
    })
    .listen(port)