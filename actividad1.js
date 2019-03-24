// Variables para express

var express = require('express')
var app = express()

// Objeto con opciones para que el usuario ingrese

const opciones = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    },

}


// Arreglo de cursos.

const cursos = [
    {
        id : 1,
        nombre: "Algoritmos",
        duracion: 50,
        costo: 150000
    },
    {
        id : 2,
        nombre: "Bases de datos",
        duracion: 64,
        costo: 200000
    },
    {
        id : 3,
        nombre: "Estructuras de datos",
        duracion: 45,
        costo: 230000
    }
];


// Requiere de parametros que pasara el usuario para inscribirse en un curso.

const argv = require('yargs')
            .command ('inscribir', 'inscribirse en un curso', opciones)
            .argv


// Require para crear archivos.

const fs = require('fs')


// Se mira que se hayan ingresado argumentos comparando que el id no sea indefinido, ya que si es indefinido quiere decir que
// no se ingreso ningun dato por teclado.

if (argv.id != undefined){

    let id_ingresado = argv.id;
    let curso_buscado = cursos.find(curso_actual => curso_actual.id == id_ingresado);

    if (curso_buscado == undefined){
        console.log("Id del curso no encontrado.");
    }
    else{
        console.log("\nSe ha inscrito con exito al curso de "+curso_buscado.nombre+", que tiene una duracion de "+curso_buscado.duracion+" horas y un valor de "+curso_buscado.costo+" pesos.\n\nLos resultados de su inscripcion ahora son visibles en la web");
        let texto = 'El usuario '+argv.nombre+" identificado con cedula #"+argv.cedula+", se ha registrado en el curso "+curso_buscado.nombre+" con id #"+curso_buscado.id+", que tiene una duracion de "+curso_buscado.duracion+" horas y un valor de "+curso_buscado.costo+" pesos.";
        app.get('/', function (req, res) {
            res.send(texto)
          }) 
          app.listen(3000)
    }
}


// Ciclo for para mostrar los cursos en el arreglo, se ejecuta unicamente cuando no hay argumentos por parte de usuario.

else {
    for (i = 0; i<cursos.length; i++){

        (function(i){
            setTimeout(function(){
                console.log("\nEl curso se llama "+cursos[i].nombre+" con id #"+cursos[i].id+", tiene una duracion de "+cursos[i].duracion+" horas y un valor de "+cursos[i].costo+" pesos.");
            },2000*(i+1));
        })(i);

    }
}
