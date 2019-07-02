var testModule = (function () {
 
    var counter = 0;
   
    return {
   
      incrementCounter: function () {
        return counter++;
      },
   
      resetCounter: function () {
        console.log( "valor del contador previo al reset: " + counter );
        counter = 0;
      }
    };
   
  })();
   
  // Uso:
   
  // Incremento del contador

  testModule.incrementCounter();
   
  // Verificar el valor del contador y hacer reset
  // Outputs: valor del contador previo al reset: 1

  testModule.resetCounter();

  var myNamespace = (function () {
 
    var myPrivateVar, myPrivateMethod;
   
    // variable privada del contador
    myPrivateVar = 0;
   
    // funcion privada

    myPrivateMethod = function( foo ) {
        console.log( foo );
    };
   
    return {
   
      // variable publica
      myPublicVar: "foo",
   
      // funcion publica utilizando privados
      myPublicFunction: function( bar ) {
   
        // Incrementa el contador privado
        myPrivateVar++;
   
        // llama al metodo privado utilizando bar
        myPrivateMethod( bar );
   
      }
    };
   
  })();

  var basketModule = (function () {
 
    // private
   
    var basket = [];
   
    function doSomethingPrivate() {
      //...
    }
   
    function doSomethingElsePrivate() {
      //...
    }
   
    // Return de objeto publico
    return {
   
      // Añade items a basket
      addItem: function( values ) {
        basket.push(values);
      },
   
      // get del contador de items en basket
      getItemCount: function () {
        return basket.length;
      },
   
      // alias publico de funcion privada
      doSomething: doSomethingPrivate,
   
      // Get del valor total de items en basket
      getTotal: function () {
   
        var q = this.getItemCount(),
            p = 0;
   
        while (q--) {
          p += basket[q].price;
        }
   
        return p;
      }
    };
  })();


// basketModule retorna un objeto con un API publico
 
basketModule.addItem({
  item: "bread",
  price: 0.5
});
 
basketModule.addItem({
  item: "butter",
  price: 0.3
});
 
// Outputs: 2
console.log( basketModule.getItemCount() );
 
// Outputs: 0.8
console.log( basketModule.getTotal() );
 
// no funcionará
 
// Outputs: undefined
// Esto es porque basket en sí no se expone como parte del API publica
console.log( basketModule.basket );
