const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); //Se cumple la promesa
    } else {
        reject('No se pudo iniciar sesion'); //Rechaza la promesa
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then( function() {
        console.log('Desde el promise')
    })
    .catch( error => console.log(error));