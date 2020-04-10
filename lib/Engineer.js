// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");




class Engineer extends Employee {
    constructor(name, id, email, github){
      super(name, id, email);
    this.github = github
    
    }
    
    getGithub(){
        return this.github;
    }
    getRole(){
        return Engineer.name;
    }
}
// const Theresa = new Engineer("Theresa", "1", "t.eatherly", "@git-theresa");
// console.log(Theresa.getRole());
// console.log(Theresa);

module.exports = Engineer;