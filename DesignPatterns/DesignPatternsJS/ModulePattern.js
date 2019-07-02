// ----- Object literals -----

/*
var myObjectLiteral = {
 
    variableKey: variableValue,
 
    functionKey: function () {
      // ...
    }
};

*/

var myModule = {
 
    myProperty: "someValue",
   
    // object literals puede contener metodos y propiedades

    myConfig: {
      useCaching: true,
      language: "en"
    },
   
    // metodo basico
    saySomething: function () {
      console.log( "Where in the world is Paul Irish today?" );
    },
   
    // output de valor basado en la configuración

    reportMyConfig: function () {
      console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
    },
   
    // update de la configuración

    updateMyConfig: function( newConfig ) {
   
      if ( typeof newConfig === "object" ) {
        this.myConfig = newConfig;
        console.log( this.myConfig.language );
      }
    }
  };
   
  // Outputs: Where in the world is Paul Irish today?

  myModule.saySomething();
   
  // Outputs: Caching is: enabled

  myModule.reportMyConfig();
   
  // Outputs: fr
  myModule.updateMyConfig({
    language: "fr",
    useCaching: false
  });
   
  // Outputs: Caching is: disabled
  myModule.reportMyConfig();