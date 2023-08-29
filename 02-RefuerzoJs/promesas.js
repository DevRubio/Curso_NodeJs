
const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const Salarios = [
  {
    id: 1,
    nombre: 1000,
  },
  {
    id: 2,
    nombre: 1500,
  },
];

/* const getEmpleado = (id, callback) =>{
    const empleado = empleados.find(e =>e.id === id)
    if(empleado){
       callback(null,empleado) 
    }else{
        callback( `Empleado con id ${id} no existe`)
    }
    
} */
console.clear()

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre
    empleado
      ? resolve(empleado)
      : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) =>{
    return new Promise((response, reject) =>{
        const salario = Salarios.find(s => s.id === id)?.nombre
        salario
            ? response(salario)
            : reject(`No existe salario con id ${id}`)
    })
}

const id = 10

/* getEmpleado(id)
  .then((empleado) => console.log(empleado))
  .catch((err) => console.log(err));

getSalario(id)
    .then((salario) => console.log(salario))
    .catch((err) => console.error(err))
 */

/* getEmpleado(id)
    .then(empleado =>{
        getSalario(id)
            .then(salario=>{
                console.log("el empleado: ", empleado, " Tiene un salario de: ", salario)
            })
            .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err)) */

    //Promesas en Cadenas

    let nombre

    getEmpleado(id)
        .then(empleado => {
            nombre = empleado
           return getSalario(id)
            
        })
        .then(salario =>console.log("El empleado: ", nombre, "Tiene un salario de ", salario))
        .catch(err =>console.log(err))
