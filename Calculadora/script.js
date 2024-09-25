
// esto agregar el valor del boton de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor
}


// esta acción vacia la pantalla
function borrar(){
document.getElementById('pantalla'). value = ''
}

// esta acción toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado

}


let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})