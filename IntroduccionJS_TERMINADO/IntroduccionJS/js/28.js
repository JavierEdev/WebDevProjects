//Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    retornarPrecio(precio) {
        return `El precio del producto es: $ ${precio}`
    }
}

const producto = new Producto();

console.log(producto.retornarPrecio(400));

//Herencia

class Libro extends Producto {
    constructor(nombre,precio,isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
}