//Objeto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
};

//Esta linea de codigo no te permite modificar
Object.freeze(producto);

//.seal se pueden modificar las propiedades
//.free no te permite modificar nada

