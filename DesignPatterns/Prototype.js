//creamos la clase persona utilizando prototype


// ----- constructor -----

function Persona(apellido, nombre)
{
    this.apellido = apellido;
    this.nombre = nombre;
}

// ----- permite obtener el apellido -----
// @return void

Persona.prototype.getApellido = function()
{
    console.log(`Mi apellido es ${this.apellido}`);
};

// ---- permite obtener el nombre
// @return void

Persona.prototype.getNombre = function()
{
    console.log(`Mi nombre es ${this.nombre}`);
};

// generar la instancia del objeto

let person = new Persona("Maldonado", "David");

//invocamos sus metodos

person.getNombre();
person.getApellido();