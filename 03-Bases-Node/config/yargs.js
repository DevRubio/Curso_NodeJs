const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: 'true',
                    describe:'Es la base de la multiplicacion'
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default: 'false',
                    describe: 'Muestra la tabla en consola'
                })
                .check((argv, options)=>{
                    if( isNaN(argv.b)){
                        throw 'La base debe ser un numero'
                    }
                    return true
                })          
.argv


module.exports = argv