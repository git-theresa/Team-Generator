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
    name: "firstLast",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Employee Type",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
  
  {
    type: "list",
    message: "Employees Number id",
    choices: ["1", "2", "3", "No More Team Members"],
    name: "id",
  },
];
 // End Questions:
const team = [];

function runEmployees() {
 
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: ["Build Team", "Finish Team"],
        name: "newTeam",
      },
    ])
    .then(function (response) {
      const buildTeam = response.newTeam;
      switch (buildTeam) {
        case "Build Team":
          inquirer.prompt(questions).then(function (choices) {
            // switch(response.choice){  // case './Manager': // getEmployee(Manager) {

            if (choices.role === "Manager") {
              inquirer
                .prompt({
                  type: "input",
                  message: "What is your office number?",
                  name: "officeNumber",
                })
                // .then(function({officeNumber}){
                .then(function (answer) {
                  var newManager = new Manager(
                   choices.firstLast,
                    choices.id,
                    choices.email,
                    answer.officeNumber
                  );
                  team.push(newManager);
                  console.log(team);
                  runEmployees();

                  // })
                });
            }
            // runEmployees();
            // switch(response.choice){ // case "./Engineer" // getEmployee(Engineer){
            else if (choices.role === "Engineer") {
              inquirer
                .prompt({
                  type: "input",
                  message: "what is your github id?",
                  name: "github",
                })
                .then(function (answer) {
                  var newEngineer = new Engineer(
                    choices.firstLast,
                    choices.id,
                    choices.email,
                    answer.github
                  );
                  team.push(newEngineer);
                  console.log(Engineer);
                  runEmployees();
                });
            }
            // switch(response.choice){ // case "./Intern" // getEmployee(Intern){
            else if (choices.role === "Intern") {
              inquirer
                .prompt({
                  type: "input",
                  message: "What school did you attend?",
                  name: "school",
                })
                .then(function (answer) {
                  var newIntern = new Intern(
                    choices.firstLast,
                    choices.id,
                    choices.email,
                    answer.school
                  );
                  team.push(newIntern);
                  runEmployees();
                });
            }
          });
                   break;
                 // End Switch Case 1
        case "Finish Team":
          console.log(team);
          if (team.length > 0) {
            console.log("all done!"); 
            writeHTML(render(team));
          } else {
            console.log("no team members");
          }
          break;
        default:
          break;
      }
      // End
    });
}
// End function
runEmployees();
// Write to Page
  function writeHTML(HTML){
    console.log(HTML);
  fs.writeFileSync(outputPath, HTML, function(err) {
  if (err) {
  return console.log(err);
  }
  // console.log("Success!");
  });
}

