
const { CrearArchivo } = require('./helpers/multiplicar')

//const base = 3

console.clear()

//Se utiliza para ver los argumentos que vienen en la consola
//console.log(process.argv)

const [ , , arg3='base=5'] = process.argv

const [, base=5] = arg3.split('=')

console.log(base)


CrearArchivo(base)
    .then(response => console.log(response))
    .catch(err => console.error(err))




