const { CrearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv

//const base = 3

console.clear()

console.log(process.argv)
console.log(argv)

console.log('base: yargs',argv.base)

//Se utiliza para ver los argumentos que vienen en la consola
//console.log(process.argv)

/* const [ , , arg3='base=5'] = process.argv
const [, base=5] = arg3.split('=')



CrearArchivo(base)
    .then(response => console.log(response))
    .catch(err => console.error(err))


 */

