const fs = require('fs')

const CrearArchivo = (base = 5) => {
  console.log("==================");
  console.log(` TABLA DEL: ${base}`);
  console.log("==================");
  let salida = "";

  for (i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i} \n`;
  }

  console.log(salida);

  fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`Tabla-${base}.txt creado`);
  });
};

module.exports = {
    CrearArchivo
}
