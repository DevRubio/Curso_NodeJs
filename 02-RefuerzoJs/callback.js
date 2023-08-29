const getUsuario = (id, callback) =>{
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() =>{
        callback(usuario)
    }, 1500)
}

getUsuario(10, (usuario)=>{
    console.log(usuario.id)
    console.log(usuario.nombre)
})