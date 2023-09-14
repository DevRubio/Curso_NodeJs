require('colors')

const { MostrarMenu, Pausa } = require('./helpers/mensajes')

console.clear()

const Main = async () =>{
    let opt = ''

    do{
        opt = await MostrarMenu()
        if(opt !== '0') await Pausa()
    } while(opt !== '0')
}

Main()