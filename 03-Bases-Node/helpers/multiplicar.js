const fs = require('fs')

const CrearArchivo  = async (base = 5) => {
  try{
    console.log("==================");
    console.log(` TABLA DEL: ${base}`);
    console.log("==================");
    let salida = "";
  
    for (i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }
  
   // console.log(salida);
  
    fs.writeFileSync(`Tabla-${base}.txt`, salida);

    return`${salida}Tabla-${base}.txt creado`;

  }catch(err){
    throw err
  }

};

module.exports = {
    CrearArchivo
}
