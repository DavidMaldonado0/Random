// clase persona -------- emacscript 2016

class Persona {
    
    // ----- constructor -----

    constructor(apellido, nombre)
    {
        this.apellido = apellido;
        this.nombre = nombre;
    }

    // ----- permite obtener el apellido -----
    // @return void

    getApellido()
    {
        console.log(`Mi apellido es ${this.apellido}`);
    }

    // ----- permite obtener el nombre -----
    // @return void

    getNombre()
    {
        console.log(`Mi nombre es ${this.nombre}`);
    }

}

// ---- instancia del objeto ----
let person = new Persona("Maldonado", "David");

// ---- invocamos metodos ----

person.getNombre(); 
person.getApellido();