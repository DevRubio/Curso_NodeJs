const empleados = [
    {
        id: 1,
        nombre: "Fernando"
    },
    {
        id: 2,
        nombre: "Linda"
    },
    {
        id: 3,
        nombre: "Karen"
    }
]

const Salarios = [
    {
        id: 1,
        nombre: 1000
    },
    {
        id: 2,
        nombre: 1500
    }
]

const getEmpleado = (id, callback) =>{
    const empleado = empleados.find(e =>e.id === id)
    if(empleado){
       callback(null,empleado) 
    }else{
        callback( `Empleado con id ${id} no existe`)
    }
    
}

const getSalario = (id, callback) =>{
    const salario = Salarios.find(e => e.id == id)
    if(salario){
        callback(null, salario)
    }else{
        callback(`No existe el salario para el Id ${id}`)
    }
}


console.clear()

//console.log(getEmpleado(3))

const id = 10

getEmpleado(id, (err, empleado)=>{
    if(err){
        console.log("ERROR")
        return console.log(err)
    }
    console.log("Empleado existe")
    console.log(empleado)
})

getSalario(id, (err, salario) =>{
    if(err){
        console.log("Error")
        return console.log(err)
    }else{
        console.log('Salario Existe')
        console.log(salario)
    }
})