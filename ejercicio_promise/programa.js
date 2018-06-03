
const fs = require('fs');

// fs.writeFile('./alumnos.txt', '1,Pilar\n2,Wanda\n3,Julieta', function(error){
// // uso la funcio de fs writeFile que tiene  3 parametros: 
// // 1- nombre del archivo a crear con su path
// // 2 - es el string a grabar en el archivo de texto (mediante los caracteres \n generamos el salto de línea en el archivo de texto)
// // 3 - una fn nonima con el parametro del error, itero si se cumple o no.
//     if(error){
//         console.log('se produjo un error al crear el archivo alumnos')
//     }
//     console.log('archivo alumnos creado con exito')
//  });


//  // LEER ARCHIVOS //


// //     // pasamos como primer parámetro el nombre del archivo a leer
// //     // como segundo parámetro una función anónima que se ejecutará cuando se termine de leer el archivo 
// //     // pasando como parámetros un objeto con la referencia del error si lo hubiera y 
// //     // un objeto de tipo Buffer con todos los datos del archivo de texto.

// const alumnos = fs.readFileSync('./alumnos.txt');

// console.log(alumnos.toString().split('\n'));


// CALL BACK

  // fs.readFile('./alumnos.txt',  function(error, a){
  //   fs.readFile('./cursos.txt',  function(error, b){
  //     fs.readFile('./inscripciones.txt',  function(error, c){
  //       var alumnos = a.toString().split('\n');
  //       var cursos = b.toString().split('\n');
  //       var inscripciones = c.toString().split('\n');


  //       for(var i = 0; i < alumnos.length ; i++){
  //         if(alumnos[i] == alumnos[0]){
  //           console.log(`${alumnos[i]} esta inscripto en ${cursos[0]} y ${cursos[1]}`)
  //         }
  //         if(alumnos[i] == alumnos[1]){
  //           console.log(`${alumnos[i]} esta inscripto en ${cursos[2]}`)
  //         }
  //         if(alumnos[i] == alumnos[2]){
  //           console.log(`${alumnos[i]} esta inscripto en ${cursos[1]}`)
  //         }
  //       }
  //     })
  //   })
  // })


  // Pilar esta inscripta en PHP y JAVA
  // Wanda esta inscripta en Javascript
  // Julieta esta inscripta en Java


// PROMESAS


  // fs.readFile('./alumnos.txt',  function(error, a){
  //   console.log('uno')
  //   if(error) console.log('se produjo un error');
  //   var p = new Promise(function(resolve, reject){
  //     var alumnos = a.toString().split('\n');
  //     resolve(alumnos)
  //     console.log(alumnos)
  //   })
  //   .then(function(cursos){ 
  //     console.log('dos')
  //     new Promise(function(resolve, reject){
  //       fs.readFile('./cursos.txt',  function(error, b){
  //         var cursos = b.toString().split('\n');
  //         resolve(cursos)
  //         console.log(cursos)
  //       })
  //     })
  //   })
  //   .then(function(inscripciones){ 
  //     console.log('tres')
  //     new Promise(function(resolve, reject){
  //       fs.readFile('./inscripciones.txt',  function(error, c){
  //         var inscripciones = c.toString().split('\n');
  //         resolve(inscripciones)
  //         console.log(inscripciones)
  //       })
  //     })
  //   })
  // })

const util = require('util');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
 console.log('stats', stats)
}).catch((error) => {
  // Handle the error.
})






    // if(error) console.log('se produjo un error');
    //   var alumnos = alumnos.toString().split('\n');
    //   console.log(alumnos);
    //   misCursos();
    //   misInscripcion();
    //     // alumnos.forEach(function (line) { 
    //     //   var a = line;
    //     //   var b = a.split("---");
    //     //   console.log(b)
    //     // })
    //     // var p = new Promise(function(resolve, reject){
    //     //   alumnos.forEach(function (line) { 
    //     //           var a = line;
    //     //           var b = a.split("-");
    //     //           resolve(b);
    //     //           console.log(b)
    //     //         })
    //     //     })
    //   })








    // var alumnos = [
    //   {
    //     nommbre : 'Juan', apellido:'Perez', 
    //     cursos: [{
    //       nombre:'JS'}]
    //     }]

    //     console.log(alumnos[0].cursos[0].nombre);

    // var nombre = alumnos[0].cursos[0].nombre;
