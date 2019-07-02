var orgChart = {
 
    addNewEmployee: function(){
   
      // getEmployeeDetail provee una vitsa con la que interactuán los usuarios
      var employeeDetail = this.getEmployeeDetail();

      employeeDetail.on("complete", function(employee){
   
        var managerSelector = this.selectManager(employee);
        managerSelector.on("save", function(employee){
          employee.save();
        });
   
      });
    },
   
    // ...
  }