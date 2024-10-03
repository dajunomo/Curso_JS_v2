//¿PUEDE ENTRAR EL AL BOLICHE?

/* let edadPersona = 34

if(edadPersona >= 18 && edadPersona <= 60){
    console.log('Puedes entrar al boliche')

}else if(edadPersona <= 18){
    console.log('No puedes entrar al boliche porque eres menor de edad ')
} else {
    console.log('No se le recomienda ingresar porque eres muy viej@')
}
*/

/*
let estiloMusica = 'Nu metal'

switch (estiloMusica) {
    case 'Punk':
        console.log('Recomiendo este grupo 1 ')
        break;

        case 'reggae':
            console.log('Recomiendo este Bob Marley ')
            break;

        case 'Pop':
            console.log('Recomiendo este grupo2 ')
            break;

        case 'indie':
            console.log('Recomiendo este 21 pilots ')
            break;

        case 'metal':
            console.log('Recomiendo este metallica ')
            break;

        case 'Nu metal':
            console.log('Recomiendo este  Korn ')
            break;
            
    default:
       console.log( 'No lo conozco te recomiendo Panda')
        break;
}

*/

let edad= 18
let nacionalidad = 'Colombiano'
let tienePasaporte = false

if (edad >= 18) {
    console.log('Tiene edad para viajar, aprobadp tramite 1')

    if (nacionalidad == 'ruso') {
        console.log('la documentación está correcta, aprobado tramite 2')    
        if (tienePasaporte) {
            console.log('Usted puede viajar, ¡buen viaje!')
            
        }    else{

            console.log('No Puedes viajar, no tienes el pasaporte')
        }
    } else{
        console.log('Debes presentar la documentación del país de origen')

    }
    
}else {
    console.log('Debes ser mayor de 18 años')

}
