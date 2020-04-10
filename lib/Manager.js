// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
      super(name, id, email);
    this.officeNumber = officeNumber 
      }
      
    getOfficeNumber(){
      return this.officeNumber;
    }
    getRole(){
        return Manager.name
    }
}
// const Theresa = new Manager ("theresa", "1", "t.eatherly", 615);
// console.log(Theresa.getRole());
module.exports = Manager;
