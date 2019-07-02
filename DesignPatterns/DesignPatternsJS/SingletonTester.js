var SingletonTester = (function () {
    
 
    // options: objeto que contiene configuración de opciones para singleton
    // e.g var options = { name: "test", pointX: 5};
    function Singleton( options ) {


      options = options || {};
   
      // asigna propiedades a singleton
      this.name = "SingletonTester";
   
      this.pointX = options.pointX || 6;
   
      this.pointY = options.pointY || 10;
   
    }
   
    // instance 
    var instance;
   
    // an emulation of static variables and methods
    var _static = {
   
      name: "SingletonTester",
   

      getInstance: function( options ) {
        if( instance === undefined ) {
          instance = new Singleton( options );
        }
   
        return instance;
   
      }
    };
   
    return _static;
   
  })();
   
  var singletonTest = SingletonTester.getInstance({
    pointX: 5
  });
   
  // Outputs: 5
  console.log( singletonTest.pointX );