// let numberOfLines = 1;
// console.log("linea #", numberOfLines);

// numberOfLines = numberOfLines + 1;
// console.log("linea #", numberOfLines);

// numberOfLines++;
// console.log("linea #", numberOfLines);

// numberOfLines += 1;
// console.log("linea #", numberOfLines);

// imprimir numero de linea


let numberOfLines = 1;
 export function increaseLineNumber(){
    // numberOfLines++;
    // numberOfLines++;
    numberOfLines += 2;
};

console.log("linea #", numberOfLines);

increaseLineNumber();
console.log("linea #", numberOfLines);

increaseLineNumber();
console.log("linea #", numberOfLines);

increaseLineNumber();
console.log("linea #", numberOfLines);

//-----------------------------------
let numberOfLine = 0;
function printLineNumber(){
    numberOfLine ++; 
    console.log("linea #", numberOfLine);
}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();


"use strict";
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = nombre + " tiene el poder de: " + poder + "  y un arma: " + arma + " ";
    }
    else {
        mensaje = nombre + " tiene un " + poder;
        mensaje = nombre + " tiene un: " + poder;
    }
    return mensaje;
};
console.log(getAvenger("Mujer maravilla", "", ""));