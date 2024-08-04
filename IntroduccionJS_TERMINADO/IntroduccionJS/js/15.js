const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Tablet 20 pulgadas', precio: 700},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Bocinas', precio: 200},
    {nombre: 'Monitor 20 pulgadas', precio: 900},
]

meses.forEach(function(mes){
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});

carrito.forEach(function(objeto){
    console.log(objeto);
});