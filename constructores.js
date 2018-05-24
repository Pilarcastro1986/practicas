
// FUNCIONES NORMALES.

//fn normal que me devuelva un objeto que tenga una ppdad alumno con nombre  y 
// que ese sea el valor de retorno.

// ********************* parte 1 ************ //
// var alumno; // es llamada desde adentro de la fn

// function miercoles(){
//     alumno = { nombre : 'Pilar'}
//     return alumno.nombre;
// }
// miercoles();
// console.log(alumno.nombre);

// FUNCIONA PEEEEEEEERO no se pueden crear variable globales ya que no puedo hacer un seguimiento claro del codigo, 
// porque la reasigno todo el tiempo si quiero.
// Solo puedo tener una ya que JS me obliga a tenerla. (en angula la variable global es angular, por eso angular.)
// en este caso tengo dos variables globales. alumno, y miercoles, que si bien es una funcion esta guardada dentro de 
// una variable tambien llamada miercoles.
// para eliminarlas, o por lo menos quedarme solo con una.


// ********************* parte 2 ************ //

// function miercoles(){
//     alumno = { nombre : 'Gimena'}
//     return alumno.nombre;
// }

// var result = miercoles(); //  es llamada desde afuera de la fn.
// console.log(result);  

// lo que esta adentro siempre tiene que ser independiente porque si me quiero llevar la funcion a otro archivo no 
// funcionaria si no estuviese la var alumno, pero 
// si hago que lo que este adentro sea completamente independiente de loq ue esta afuera, me lo puedo llevar.
// lo chiquito que esta adentro tiene que ser independeiente, asi no tengo dependencia.
// de a momento solo pido de afuera hacia adentro.
// (si uso 'use strict', me obliga a cada vez que declare una variable poner la palabra var)
// ahora eliminamos la variable resultado.

// ********************* parte 3 ************ //

// function miercoles(){
//     alumno = { nombre : 'Gimena'}
//     return alumno.nombre;
// }

// var result = miercoles(); //  es llamada desde afuera de la fn.
// console.log(result);  


// si la variable resultado es igual a miercoles(), puedo eliminar la var resultado y en todos 
// los lugares donde este, poner solamente miercoles()

// ********************* parte 4 ************ //

// function miercoles(){
//     alumno = { nombre : 'Gimena'}
//     return alumno.nombre;
// }
// console.log(miercoles()); 
 
// ahora me falta solo quitar la funcion miercoles.
// para ello pongo toda la funcion en una funcion autoejecutable.

// (function(){
//     function miercoles(){
//         alumno = { nombre : 'Gimena'}
//         return alumno.nombre;
//     }
//     console.log(miercoles()); 
// })();


// el resultado es no tener ningun funcion global.
// en el caso de Node, automaticamente pone la primera y ultima linea de la fn autoejecutable, 
// pero esto no sucede con el browser


// *********************************************************************************+ //

// la funcion miercoles adentro crea un objeto que se llama alumno y lo retorna. a eso se lo llama fabricar.
// esa una funcion es un factory porque fabrica un objeto adentro y me lo devuelve para que lo use desde afuera.
// es una funcion comun y corriente de js.

// FUNCIONES CONSTRUCTORAS.

// una fn que fabrique un alumno.
// en ecm6 ya aparece la palabra "constructor" al igual que CLASS, pero en ecm5 se usa una funcion
// se lo distingue con la mayuscula el nombre de la clase

// function Alumno(x){ // en singular porque fabrica solo un alumno
//     this.nombre = x; // nombre va a ser igual al parametro que yo le pase cuando la instancie.
// } 

// // intanciando la funcion:
// var pilar = new Alumno('Pilar');
// console.log(pilar.nombre);

// en ecm6 ya tengo otra forma para crear un constructor

// class Nombre{
// 	constructor(x){
// 		this.nombre = x;
// 	}
// }

// var matias = new Nombre('Matias');
// console.log(matias.nombre);

// en js una class es un constructor, en los otros lenguajes un clase es un tipo de dato.


// en resumen hay 3 formas para crear un objeto:

//constructor/
function Personaje(x){
    nombre = { apodo : x }
}
var bart = new Personaje('Bart Simpson')
console.log(nombre.apodo)


//clase/
class Personaje {
    constructor(x){
        this.apodo = x;
    }
}
var lisa = new Personaje('Lisa Simpson')
console.log(lisa.apodo)


//factory/
(function(){
    function crearPersonaje(n, x, y){
        var persona = {}
        persona.nombre = n;
        persona.apellido = x;
        persona.edad = y;
        return persona;
    }
    var marge = new crearPersonaje('Marge' , 'Simpson', 42);
    console.log(marge.nombre);
    console.log(marge.apellido);
    console.log(marge.edad);
    
})();

