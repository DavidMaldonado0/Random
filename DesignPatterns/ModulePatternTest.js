//Modulo Anonimo

let myModule = ( () => {

    //se genera un objeto que contendrá todos nuestros metodos públicos
    let publicFunction = {};
    //esta es la variable "privada"
    let total = 0;

    // ---- Metodos privados ----

    privateFunction = () => total * 500;

    // ---- Metodos Publicos ----

    publicFunction.suma = (valor_a, valor_b) => {
        let suma = valor_a + valor_b;
        total += suma;
        console.log(`El resultado de la suma es: ${suma}`);
    };

    publicFunction.getPrivateFunction = () => console.log(`El Valor de privateFunction es: ${privateFunction()}`)

    //retorno de metodos
    return publicFunction;

})();

//consultando el metodo publico
myModule.suma(10, 5); //retorna el resultado de la suma = 15

//consiguiendo el resultado de privateFunction
myModule.getPrivateFunction(); //retorna 7500 

//accesando a private function
myModule.privateFunction (); // retorna un error