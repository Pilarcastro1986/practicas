const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const getModels = require('./getModels')

const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())

.use(function(req,res,next){
    req.modelos = getModels();
    // res.write('******primero pasa por app *****')
    next();
})



.get('/api/v1/test', controller.getElement)
.post('/api/v1/test', controller.postElement)

.use(function(error, req, res, next){
    console.log(`Se produjo un error: ${error}`)
})


module.exports = app