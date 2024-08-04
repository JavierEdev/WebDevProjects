//Objeto

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
};

//Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto

//Destructuring
const {precio} = producto;

console.log(precio);