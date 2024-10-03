//El selecciona un numero al azar para que adivine
let numeroAzar= Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

// esta accion se va a ejecutar cuando se toqeu el boton chequear
function chequearResultado() {
        let numeroIngresado = parseInt(numeroEntrada.value)

        if (numeroIngresado < 1 || numeroIngresado> 100 || isNaN(numeroIngresado)) {
            mensaje.textContent = 'Por favor introduce un numero valido entre 1 y 100'
            return
        }

        if (numeroIngresado == numeroAzar) {
            mensaje.textContent = '¡Felicitaciones!, ¡Haz adivinado el número!';
            mensaje.style.color = 'green';
            numeroEntrada.disabled = true;
            
        }else if (numeroIngresado < numeroAzar){
            mensaje.textContent= '¡Mas Alto! El numero es mayor al que dijiste';
            mensaje.style.color= 'red';

        }


}