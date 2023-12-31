import colors from 'colors'
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js'
import { guardarDB, leerDB } from './helpers/guardarArchivo.js'
import { Tareas } from './models/tareas.js'
 
//const { MostrarMenu, Pausa } = require('./helpers/mensajes')

console.clear()

const Main = async () =>{
    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }    
   
    do{
        opt = await inquirerMenu()    
        
        switch(opt){
            case '1':
                const desc = await leerInput('Description: ')
                tareas.crearTarea(desc)
            break
            case '2':
                tareas.listadoCompleto()
            break
            case '3':
                tareas.listarPendientesCompletadas(true)
            break
            case '4':
                tareas.listarPendientesCompletadas(false)
            break
        }
        guardarDB( tareas.listadoArr)
        await pausa()   
    } while(opt !== '0')
}

Main()