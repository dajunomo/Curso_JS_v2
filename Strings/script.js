//STRINGS
/*

let string = '\'Cadena \t de \n texto'

console.log(string)
console.log(string.length) //lenght es para contar los caracteres

let resultado = string.slice(2,5) // slice mostrar caracteres desde el 2 a 5 por ejemplo

console.log(resultado)

*/

const texto ='La educaciones muy importante en Colombia. este texto se debe dividir. dividir texto'
const texto2 = 'Mundo'
const texto3 = 'el mundo'

// const resultado = texto.replace ('Colombia', 'el mundo') //replace remplaza el string

// const resultado = texto.toUpperCase ('Colombia', 'el mundo')  // toUpperCase coloca todo en mayuscula

// const resultado = texto.toLowerCase ('Colombia', 'el mundo')  // toUpperCase coloca todo en minuscula

// const resultado = texto.trim().concat(texto2)  // trim quita los espacios antes o despuest del texto

// const resultado= texto.charAt(6) // chartAt = seleccionar un caracter en una posicion con numero

const resultado = texto.split('. ') /* Split genera arrays diferentes dependiendo del caracter escogido, 
                                    si está vacio el split separa letrapor letra*/

console.log(resultado)