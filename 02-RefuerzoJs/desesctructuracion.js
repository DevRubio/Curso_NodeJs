const deapool = {
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'regenracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

const { nombre, apellido, poder, edad } = deapool

console.log(nombre, apellido, poder, edad)