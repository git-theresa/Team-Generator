const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Prompts within command line
const questions = [
    {   
      type: "input",
      message: "What is your full name?",
      name: "firstLast"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "list",
      message: "Employee Type",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role"
    },
    {
      type: "list",
      message: "Number of Employees",
      choices: ["1", "2", "3", "No More Team Members"],
      name: "employeeAmt"
    } 
    ]
    // End Questions:
  function runEmployees(){
    inquirer.prompt(questions)
    .then(function(response){
    console.log(response);
    
      // switch(response.choice){
      // case '1':
      // getEmployee(Manager) {
      if(response.role === "Manager"){
      inquirer.prompt({
      type: "input",
      message: "What is your office number?",
      name: "officeNumber"
      })
     
      .then (function(manager){
        console.log(manager);
      })
      }

      else if(response.role === "Engineer"){
      inquirer.prompt({
      type: "input",
      message: "what is your github id?",
      name: "github"
      })
   
      .then (function(engineer){
      console.log(engineer);
      })
       }
      })
// End function 
}


runEmployees();

