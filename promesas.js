
var p = new Promise(function(resolve, reject){
    // entro a un bar
    resolve('Exito'); // el mozo me toma el pedido de un cafe
}).then(function(cafe){ // cuando el mozo vuelva quiero que pase esto: (siempre tanto adentro de la promesa como del then va una funcion
    // esa fn tiene como parametro el resolve, o alguna palabra que haga referencia)
    console.log(p);    // me sirva mi cafe
})



var p = new Promise(function(resolve, reject){
    // primero le pido que vaya a ese sitio y me traiga la url.
    // bla bla bla 
    console.log('uno');
    resolve('https://www.w3schools.com/angular/customers.php'); // la trajo
}).then(function(url){ // ahora quiero que vaya a buscar los alumnos de esa url, por ende tengo que hacer otra promesa
      console.log('dos')
      new Promise(function(resolve, reject){//<-- promesa para alumnos
          resolve({ nombre: 'Pilar' }) // listo! me traje el primer alumno, ahora quiero mostrarlo
      }).then(function(alumno){ // hago un then que va a recibir el nombre del alumno y lo imprimo
          console.log('tres')
          console.log(alumno.nombre);
      })
})
console.log('cuatro')

// ESTO ES UN CALLBACKHELL!!! NUNCA TENGOQ QUE PONER PROMESAS ADENTRO DE PROMESAS.
// SI DENTRO DE UN THEN HAGO UN RETURN SIEMPRE ES EQUIVALENTE A HACER UN RETURN NEW PROMISE(RESOLVE).
// SOLO FUNCIONA DENTRO DE LOS THEN
// PASADA EN LIMPIO SERIA ASI:

var p = new Promise(function(resolve, reject){
    console.log('UNO')
    resolve('https://www.w3schools.com/angular/customers.php'); 
})
.then(function(url){ 
    console.log('DOS')
    return { nombre: 'Pilar'} // <-- REEMPLAZO EL NEW PROMISE POR SOLO LA RESPUESTA DEL RESOLVE EN UN RETURN Y NO ESTAN MAS ANIDADAS.
}) 
.then(function(alumno){ 
    console.log('TRES')
    console.log(alumno.nombre);
})
console.log('cuatro');

// TODAS ESTAN EN PARALELO


// ERRORES, asi como el return me devuelve una promesa, lo mismo sucede con el throw.
// cuando andetro de un the pongo un throw va a a ser el equivalente de llamar al throw.

var p = new Promise(function(resolve, reject){
    console.log('UNO')
    resolve('https://www.w3schools.com/angular/customers.php'); 
})
.then(function(url){ 
    console.log('DOS')
    throw 'se produjo un error' // <-- el throw hace que se saltee todo los then que siguen y vaya derecho al catch, que atrapa 
                                //el string que le ponga al throw.
}) 
.then(function(alumno){ 
    console.log('TRES')
    console.log(alumno.nombre);
})
.catch(function(error){
    console.log('ERRRROR', error); //<-- aqui esta el valor del catch. 
})
console.log('cuatro');