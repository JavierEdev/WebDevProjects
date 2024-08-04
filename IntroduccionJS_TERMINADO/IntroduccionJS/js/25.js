const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Tablet 20 pulgadas', precio: 700},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Bocinas', precio: 200},
    {nombre: 'Monitor 20 pulgadas', precio: 900},
]

carrito.forEach(producto => console.log(producto.nombre));

carrito.map(producto => console.log(producto.nombre)); // Crea un nuevo arreglo