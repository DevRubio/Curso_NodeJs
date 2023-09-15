import inquirer from 'inquirer';
import colors from 'colors'

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear una tarea`
            },
            {
                value: '2',
                name: `${'2'.green}. Listar tareas`
            },
            {
                value: '3',
                name: `${'3'.green}. Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4'.green}. Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5'.green}. Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.green}. Salir \n`
            }
        ]
    }
]

const inquirerMenu = async() =>{
    console.clear()
    console.log(`"""""""""""""""""""""`.green)
    console.log(`   Seleccione una opcion   `.green)
    console.log(`"""""""""""""""""""""`.green)

    const { opcion }  = await inquirer.prompt(preguntas)
    return opcion
}

const pausa = async () =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async(message) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate (value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]
    
    const {desc} = await inquirer.prompt(question)

    return desc
}


export { 
    inquirerMenu,
    pausa,
    leerInput
};