const { CrearArchivo } = require('./helpers/multiplicar')
require('colors')
const argv = require('./config/yargs')
console.clear()

//const base = 3


//console.log(process.argv)

//Se utiliza para ver los argumentos que vienen en la consola
//console.log(process.argv)

/* const [ , , arg3='base=5'] = process.argv
const [, base=5] = arg3.split('=')


 */

CrearArchivo(argv.b, argv.l, argv.h)
    .then(response => console.log(response.rainbow))
    .catch(err => console.error(err))




