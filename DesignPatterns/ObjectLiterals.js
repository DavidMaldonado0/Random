//Se indica la declaracion del patron Object Literal

let MyObjectLiteral = {

    suma : (valor_a, valor_b) => {
        let result = valor_a + valor_b;
        console.log(`El resultado de la suma de ${valor_a} + ${valor_b} = ${result}`);    
    },

    resta : (valor_a, valor_b) => {
        let result = valor_a - valor_b;
        console.log(`El resultado de la resta de ${valor_a} + ${valor_b} = ${result}`);    
    },
};

//invocando la funcion suma
MyObjectLiteral.suma(5,10); //Retornará el resultado de la suma = 15

//invocando la funcion resta
MyObjectLiteral.resta(15,10); //Retornará el resultado de la resta = 5