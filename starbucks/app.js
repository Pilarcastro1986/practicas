const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller')


const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())



.post('/v1/users' , controller.postUsers)
.get('/v1/users' , controller.getUsers)
.patch('/v1/users' , controller.patchUsers)
.use(function(error, req, res, next){
    console.log('se produjo un error');
})


// function app(){
//     console.log('servidor ok')
// }

module.exports = app;