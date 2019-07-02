var mySingleton = (function () {
 
    // Instance almacena referencia a singleton
    var instance;
   
    function init() {
   
      // Singleton
   
      // Private --- metodos y variables privados

      function privateMethod(){
          console.log( "I am private" );
      }
   
      var privateVariable = "Im also private";
   
      var privateRandomNumber = Math.random();
   
      return {
   
        // Public --- metodos y variables publicos

        publicMethod: function () {
          console.log( "The public can see me!" );
        },
   
        publicProperty: "I am also public",
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
   
      // Get de la instancia  the Singleton si esta existe, de lo contrario la crearía

      getInstance: function () {
   
        if ( !instance ) {
          instance = init();
        }
   
        return instance;
      }
   
    };
   
  })();
   
  var myBadSingleton = (function () {
   
    // Instance --- almacena referencia a Singleton
    var instance;
   
    function init() {
   
      // Singleton
   
      var privateRandomNumber = Math.random();
   
      return {
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
   
      // Siempre crea una nueva instancia Singleton

      getInstance: function () {
   
        instance = init();
   
        return instance;
      }
   
    };
   
  })();
   
   
  // Usage:
   
  var singleA = mySingleton.getInstance();
  var singleB = mySingleton.getInstance();
  console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
   
  var badSingleA = myBadSingleton.getInstance();
  var badSingleB = myBadSingleton.getInstance();
  console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); // true
   
 /* Al trabajar con random hay cierta posibilidad que los numeros sean los mismos */

 

 mySingleton.getInstance = function(){
    if ( this._instance == null ) {
      if ( isFoo() ) {
         this._instance = new FooSingleton();
      } else {
         this._instance = new BasicSingleton();
      }
    }
    return this._instance;
  };


  