import colors from 'colors'
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js'
import { Tarea } from './models/tarea.js'
import { Tareas } from './models/tareas.js'
 
//const { MostrarMenu, Pausa } = require('./helpers/mensajes')

console.clear()

const Main = async () =>{
    let opt = ''

    const tareas = new Tareas()

    do{
        opt = await inquirerMenu()    
        
        switch(opt){
            case '1':
                const desc = await leerInput('Description: ')
                tareas.crearTarea(desc)
            break
            case '2':
                console.log(tareas.listadoArr)
            break
        }

        await pausa()   
    } while(opt !== '0')
}

Main()