//Object literal
const reservacion = {
    nombre: 'Javier',
    apellido: 'Estrada',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
 }

 console.log(reservacion.nombre);

 //Object Constructor

 function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
 }
 const producto2 = new Producto("Monitor Curvo de 49 in", 800);

 console.log(producto2);

 function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
 }

 console.log(formatearProducto(producto2));

 //Crear funciuones que solo se utilizan en un objeto en especifico
 Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`
 }
