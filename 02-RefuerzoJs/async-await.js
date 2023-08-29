console.clear()

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
  
  const id = 1


  const getInfoUsuario = async() =>{
    return 'Hola Mundo'
  }

  getInfoUsuario()