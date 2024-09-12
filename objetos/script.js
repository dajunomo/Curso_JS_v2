/* let auto1 ={
    marca :'Fiat',
    modelo: 'UNO',
    peso: 550,
    color: 'rojo'
}


let auto2 ={
    marca :'Reanult',
    modelo: '12',
    peso: 1550,
    color: 'azul'
}

console.log('auto 1: ', auto1);
console.log('auto 2: ', auto2);
console.log('el color del auto1 es: ', auto2.color)


auto1.marca= 'BMW'
auto1.modelo='X5'

console.log(auto1["marca"])  */

const vendedor = {
        nombre: 'pedro',
        apellido: 'Zuñiga',
        empresa: 'Auto SA',
        habilidadesBlandas: ['carisma', 'puntualidad'],
        vender: function(){
            return "pedro ha vendido un auto"

        },

        nombreCompleto: function(){
            return this.nombre + " " + this.apellido

        }
}

console.log(vendedor.vender())
console.log(vendedor.nombreCompleto())
console.log(vendedor.habilidadesBlandas)