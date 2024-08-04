function sumar(numero1, numero2) { //No se declara el tipo de argumentos
    console.log(numero1 + numero2);
}

sumar(10,10);

function sumar3(numero1 = 0, numero2 = 0) { //Parametros opcionales
    console.log(numero1 + numero2);
}

sumar3(10);

//Expresion de la funcion
const sumar2 = function() {
    console.log(3+3)
}

sumar2();