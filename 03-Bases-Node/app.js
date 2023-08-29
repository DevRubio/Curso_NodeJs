
const { CrearArchivo } = require('./helpers/multiplicar')

const base = 3

console.clear()

CrearArchivo(20)
    .then(response => console.log(response))
    .catch(err => console.error(err))




