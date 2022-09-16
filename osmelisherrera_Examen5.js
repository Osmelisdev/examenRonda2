class persona {
//constructor
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
    }
}


class jugador extends persona {

    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }
   
    getDetalles() {
        super.getDetalles();
        console.log(this.posicion);
    }
}


class entrenador extends persona {

    constructor(nombre, apellido, edad, anioExperencia, idFederacion=null) {
        super(nombre, apellido, edad);
        this.anioExperencia = anioExperencia;

        if(idFederacion != null){this.idFederacion = idFederacion;}
        else{this.idFederacion = Math.floor(Math.random() * 90000) + 10000;}
    }

    getDetalles() {
        super.getDetalles();
        console.log(this.anioExperencia);
        console.log(this.idFederacion);
    }
}

class equipo{

    constructor(director, jugadores) {
        this.jugadores = jugadores;
        this.director = director;
    }

    getDetalles() {
        console.log(this.director);
        for (var i = 0; i < this.jugadores.length; i++) {
            console.log(this.jugadores[i]);
         }
    }

}

//let obj_jugador = new jugador('osmelis', 'herrera', 34, 'portero');
//obj_jugador.getDetalles();

//let obj_entrenador = new entrenador('osmelis', 'herrera', 34, 5);
//obj_entrenador.getDetalles();

let entrenadorDt = new entrenador('Zidane', 'Romero', 55, 10)
let jugador1 = new jugador('osmelis', 'herrera', 33, 'portero');
let jugador2 = new jugador('franklin', 'montenegro', 34, 'defensa');
let jugador3 = new jugador('francelys', 'barrios', 14, 'delantera');
let jugadores = [jugador1,jugador2,jugador3];
let obj_equipo = new equipo(entrenadorDt, jugadores);
obj_equipo.getDetalles();

