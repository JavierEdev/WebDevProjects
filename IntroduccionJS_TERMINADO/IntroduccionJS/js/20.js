
//Metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    }
}

reproductor.reproducir(3840);
reproductor.pausar();

