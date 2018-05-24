




var p = new Promise(function(resolve, reject){
	resolve('Exito');
}).then(function(cafe){
	console.log(p);
})


// var p = new Promise(function(resolve, reject){
// 	console.log('promesa 1');
// 	resolve('https://www.w3schools.com/angular/customers.php');
// }).then(function(url){
// 		console.log('promesa 2');
// 	new Promise(function(resolve, reject){
// 		resolve({nombre: 'Pilar'})
// 	})
// 	.then(function(alumno){
// 		console.log('promesa 3');
// 		console.log(alumno.nombre);
// 	})
// })

// console.log('promesa 4')

// var p = new Promise(function(resolve, reject){
// 	console.log('promesa 1');
// 	resolve('https://www.w3schools.com/angular/customers.php');
// })
// .then(function(url){
// 	return {nombre: 'Pilar'}
// })
// .then(function(alumno){
// 	console.log('promesa 3');
// 	console.log(alumno.nombre);
// })




// console.log('promesa 4')



// var p = new Promise(function(resolve, reject){
// 	console.log('promesa 1');
// 	reject('https://www.w3schools.com/angular/customers.php');
// })
// .then(function(url){
// 	throw 'Se produjo un error';
// })
// .then(function(alumno){
// 	console.log('promesa 3');
// 	console.log(alumno.nombre);
// })
// .catch(function(error){
// 	console.log(error);
// })


// console.log('promesa 4')

// (function(){
// 	function martes(){
// 		var alumno = { nombre : 'Pilar'}
// 		return alumno.nombre;
// 	}
// 	console.log(martes());
// })();

// 	function Alumno(x){
// 		this.nombre = x;
// 	}

// 	var pilar = new Alumno('pilar');

// 	function crearAlumno(n){
// 		var alumno = {}
// 		alumno.nombre = n;

// 		return alumno;
// }
// var pilar2 = new crearAlumno('Pilar');
// console.log(pilar2.nombre);
// console.log('algo', pilar.nombre);


// class Alumno{
// 	constructor(x){
// 		this.nombre = x;
// 	}
// }

// var pilar = new Alumno('Pilar');
// console.log(pilar.nombre);



function f(){
	throw 1;
}
try {
a.nombre	
//console.log(f());
}catch (error){
	//console.log(error);
}



