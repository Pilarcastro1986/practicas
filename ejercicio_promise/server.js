const http = require('http');

http
    .createServer()
    .on('request', function(req, res){
        res.send('hola');
    })
    .listen(8888)