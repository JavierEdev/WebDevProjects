function obtenerEmpleados () {
    const archivo = 'js/empleados.json'
    
    fetch(archivo)
        .then(resultado => { return resultado.json() })
        .then(datos => {
            const { empleados } = datos;  // This line remains the same
            console.log(empleados);
        })
        
}

obtenerEmpleados();