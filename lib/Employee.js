// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
    this.name = name
    this.id = id
    // what is id supposed to be? = Employee # "1"
    this.email = email

    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
   
    getRole(){
        return Employee.name;
    }
}

module.exports = Employee;












module.export = Employee.js
