//Objetos

const nombre = "Monitor 20 inch";
const precio = 300;
const disponbible = true;

const producto = {
    nombreProducto : "Monitor 20 inch",
    precio : 300,
    disponbible : true
};

//Acceder al objeto completo
console.log(producto);

//Acceder a las propiedades del objeto
console.log(producto.nombreProducto);

//Agregar caracteristicas al objeto
producto.imagen = 'imagen.jgp';

//Borrar caracteristicas al objeto
delete producto.disponbible;

//Acceder al objeto completo
console.log(producto);