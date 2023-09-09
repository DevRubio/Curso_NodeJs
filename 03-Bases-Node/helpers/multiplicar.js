const fs = require("fs");
const colors = require('colors')

const CrearArchivo = async (base = 5, l, h) => {
  try {
    let salida, consola = "";

    for (i = 1; i <= h; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
    }

    // console.log(salida);

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
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
