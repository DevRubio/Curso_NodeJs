const fs = require("fs");
const colors = require('colors')

const CrearArchivo = async (base = 5, l) => {
  try {
    let salida = "";

    for (i = 1; i <= 10; i++) {
      salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
    }

    // console.log(salida);

    fs.writeFileSync(`Tabla-${base}.txt`, salida);
    if (l == true) {
      console.log("==================".green);
      console.log(" TABLA DEL: ".green, colors.blue(base));
      console.log("==================".green);
      console.log(salida);
    }

    return `Tabla-${base}.txt creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  CrearArchivo,
};
