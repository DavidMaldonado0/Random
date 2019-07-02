// Cada uno creará un nuevo objeto vacio
 
var newObject = {};
 
// o
var newObject = Object.create( Object.prototype );
 
// o también
var newObject = new Object();


// ----- 1. Dot Syntax -----

// establece propiedades
newObject.someKey = "Hello World";
 
// get de propiedades
var value = newObject.someKey;
 

// ---- 2.Llaves o Brackets ----
 
 
// establece propiedades
newObject["someKey"] = "Hello World";
 
// get de propiedades
var value = newObject["someKey"];
 
 


// ---- 3. Object.defineProperty ----
 


// Set properties
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
 


// short hand del anterior
 
var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};


 
// para usarlo, creamos una variable vacía "person"
var person = Object.create(Object.prototype );
 
// asignamos propiedades al objeto
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
 
console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
 
 
// ---- 4. Object.defineProperties ----
 
// asignamos propiedades 

Object.defineProperties( newObject, {
 
  "someKey": {
    value: "Hello World",
    writable: true
  },
 
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
 
});
 
// ----- Uso -----
 
// driver con person anteriormente creado
var driver = Object.create( person );
 
// asignar propiedades
defineProp(driver, "topSpeed", "100mph");
 
// get de propiedad especifica
console.log( driver.dateOfBirth );
 
// get de propiedad que introdujimos (100mph)
console.log( driver.topSpeed );

// ----- JS no soporta clases so se usa el constructor en funciones -----

function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {
    return this.model + " ha recorrido " + this.miles + " millas";
  };
}
 
// Uso:
 
// creamos nuevas instancias para "car"

var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// usamos el metodo toString para ver la informacion 

console.log( civic.toString() );
console.log( mondeo.toString() );


// ----- Constructor con prototypes -----

function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}
 
Car.prototype.toString = function () {
  return this.model + " ha recorrido " + this.miles + " milas";
};
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );

//-------- el resultado es el mismo, pero la instancia toString() se comparte entre todos los objetos de "Car"-----
