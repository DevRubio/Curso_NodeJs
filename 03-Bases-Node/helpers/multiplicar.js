const fs = require("fs");

const CrearArchivo = async (base = 5, l) => {
  try {
    let salida = "";

    for (i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }

    // console.log(salida);

    fs.writeFileSync(`Tabla-${base}.txt`, salida);
    if (l == true) {
      console.log("==================");
      console.log(` TABLA DEL: ${base}`);
      console.log("==================");
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
