// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
    this.name = name
    this.id = id
    // what is id supposed to be? = Employee # "1"
    this.email = email

    }
    getName(){
        console.log(`Employees Name is ${this.name}.`);
    }
    getId(){
        console.log(`This is employee id ${this.id}.`);
    }
    getEmail(){
        console.log(`Employee email address ${this.email}`);
    }
    getRole(){
        return Employee
    // } will just be overwritten
    }
}

module.exports = Employee;












module.export = Employee.js
