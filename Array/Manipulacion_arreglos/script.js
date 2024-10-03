// FILTER

/* let array1 = ['Manzana','Pera','Banana', 'Naranja', 'Manzana', 'Manzana']

const resultadoFilter = array1.filter(x => x == 'Manzana') // filta lo que le colocamos 

console.log(resultadoFilter)


const array2 = [
    {nombre: 'Pedro', apellido: 'Gonzalez'},
    {nombre: 'Juan', apellido: 'Gonzalez'},
    {nombre: 'Camilo', apellido: 'Gonzalez'},
    {nombre: 'maria', apellido: 'Gonzalez'},
    {nombre: 'Sandra', apellido: 'Perez'},
    {nombre: 'Eugenia', apellido: 'Perdomo'},
    {nombre: 'Luis', apellido: 'Medina'},
]

const resultadoFilter2 = array2.filter(x => x.apellido == 'Gonzalez')

console.log(resultadoFilter2)  */


// MAP
/* const array = ['Manzana','Manzana', 'Manzana', 'Manzana']

const resultado = array.map(x=>{
    if (x=='Manzana') return 'Naranja'

})

console.log (resultado) */

// FILL
/* const array = ['Manzana','Manzana', 'Manzana', 'Manzana']

const resultado = array.fill('Naranja', 1)

console.log (resultado) */

// FIND
/* const array = ['Manzana','Manzana', 'Manzana', 'Pera','Manzana']

const resultado = array.find(x => x == 'Pera')

console.log (resultado) */


// FINDINDEX
/*const array = ['Manzana','Manzana', 'Manzana', 'Pera','Manzana', 'Pera', 'Naranja']

const resultado = array.findIndex(x => x == 'Pera')

console.log (resultado) */


// SOME
/* const array = ['Manzana','Manzana', 'Manzana', 'Pera','Manzana', 'Pera', 'Naranja']

const resultado = array.some(x => x == 'banano')

console.log (resultado) */



// EVERY
/* const array = ['Manzana','Manzana', 'Manzana', 'Pera','Manzana', 'Pera', 'Naranja']

const resultado = array.every(x => x == 'banano')

console.log (resultado) */


// POP
/*const array = ['Manzana','Manzana', 'Manzana', 'Pera','Manzana', 'Pera', 'Naranja']

const resultado = array.pop()

console.log (resultado)
console.log (array) */


//SPLICE
/* const array = ['Manzana','Manzana', 'Manzana', 'Pera','Manzana', 'Pera', 'Naranja']
 
array.splice(2,2,'Ciruela')

console.log (array) */





const array = ['Manzana','Manzana', 'Manzana', 'Pera','Manzana', 'Pera', 'Naranja']
 
document.getElementById('seleccionable').innerHTML = array.join('//')

