import colors from 'colors'
import { inquirerMenu, pausa } from './helpers/inquirer.js'
import { Tarea } from './models/tarea.js'
import { Tareas } from './models/tareas.js'
 
//const { MostrarMenu, Pausa } = require('./helpers/mensajes')

console.clear()

const Main = async () =>{
    let opt = ''

    do{
        //opt = await inquirerMenu()    
        //console.log({opt})
        const tareas = new Tareas()
        //const tarea = new Tarea('Comprar ')
        console.log(tareas)

        await pausa()   
    } while(opt !== '0')
}

Main()