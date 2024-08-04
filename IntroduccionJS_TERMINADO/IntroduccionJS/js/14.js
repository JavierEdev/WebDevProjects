//Arrays

const numeros = [10,20,30];

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.table(meses);

console.log(numeros[4]);

numeros.forEach (function(numero){
    console.log(numero)
});

//Conocer la extension
console.log(meses.length);

//Agrgar al array a atras

numeros.push(70);

//Agregar al array adelante

numeros.unshift(-10);

//Eliminar el ultimo elemento
numeros.pop();

//Eliminar al primer elemento

numeros.shift();

//Eliminar especificos
numeros.splice(1,2)

//Rest Operator o Spread Operator
const nuevoArreglo = ['Junio', ...meses];
console.log(nuevoArreglo);