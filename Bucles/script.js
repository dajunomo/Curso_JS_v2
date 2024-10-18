// let tecnologias=['html','css','js','react','angular']

/*
for (let index = 0; index < tecnologias.length; index++) {
    console.log( tecnologias[index]);   
}*/

/*
for(tecnologia of tecnologias) {
    console.log(tecnologia)
}*/

/* const alumno ={
    nombre: 'ricardo',
    edad: 25,
    tecnologias: ['Html','CSS']
}

for (const key in alumno) {
   console.log(alumno[key])
}
*/

/* // cBucle for Each

let numeros = [1,2,3,4,5,6,7,8,9]

numeros.forEach(numeros => {
    console.log(numeros)
    
}); */ 

// While
/*
let edad = 0

while (edad < 18) {
    console.log(`Tienes ${edad} años y aun eres un niño`)
    edad++;
}

console.log(`Tienes ${edad} años y ya eres mayor de edad`)*/


//DO WHILE

/* let edad = 0

do{

    {
        console.log(`Tienes ${edad} años y aun eres un niño`)
        edad++;
    }

}

while (edad < 18) 

console.log(`Tienes ${edad} años y ya eres mayor de edad`)*/




let edad = 0

while (edad < 30) {
    console.log(edad)
    edad++;
    if (edad == 24) 
        break; // Break sirve para salir del bucle
    
}

console.log(`Saliste del ucle porque tienes ${edad} años`)