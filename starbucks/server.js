const http = require('http');
const port = process.env.PORT || 3003;
const app = require('./app');


http    
    .createServer()
    .on('request', app) 
    .on('error' , function(error){
        switch (error.code){
            case 'EADDRINUSE':
            console.log('puerto en uso')
            break;
            case 'EACCES':
            console.log('error de permisos')
            break;
            default:
            throw error;

        }
    })
    .listen(port, function(){
        console.log('escuchando!')
    })

    //metodo
    // var alumno = {
    //     nombre: 'Pilar',
    //     apellido : 'Castro',
    //     jueves : function(){
    //         console.log(this.nombre);
    //     }
    // }
    //funcion
    
    // function viernes(x) {
    //     console.log(x.nombre)
    // }
    // viernes(alumno);


    

