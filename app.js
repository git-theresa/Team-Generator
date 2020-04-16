// Dependencies built in Node
const path = require("path");
const fs = require("fs");
// Dependencies from Json
const inquirer = require("inquirer");
const validator = require("validator");
// Export.Employee Types
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
// Path Directories
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Prompts within command line (Based from Employee Role)
const questions = [
  {
    type: "input",
    message: "What is your full name?",
    name: "firstLast",
    validate: (value) => {
      var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
      if (!regName.test(value)) {
        return "'Please enter your full name (first name & last name)";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (value) => {
      if (validator.isEmail(value)) {
        return true;
      }
      return "Please enter a valid @ e-mail address.";
    },
  },
  {
    type: "list",
    message: "Employee Type",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
  {
    type: "input",
    message: "Employee's ID Number",
    name: "id",
    validate: (value) => {
      if (validator.isInt(value)) {
        return true;
      }
      return "Please enter a valid ID Number.";
    },
  },
];
// End Questions:
const team = [];

const runEmployees = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: ["Build Team", "Finish Team"],
        name: "newTeam",
      },
    ])
    .then((response) => {
      const buildTeam = response.newTeam;
      switch (buildTeam) {
        case "Build Team":
          inquirer.prompt(questions).then((choices) => {
            // Manager Role
            if (choices.role === "Manager") {
              inquirer
                .prompt({
                  type: "input",
                  message: "What is your office number?",
                  name: "officeNumber",
                  validate: (value) => {
                    if (validator.isInt(value)) {
                      return true;
                    }
                    return "Please enter a valid number.";
                  },
                })
                .then((answer) => {
                  let newManager = new Manager(
                    choices.firstLast,
                    choices.id,
                    choices.email,
                    answer.officeNumber
                  );
                  team.push(newManager);
                  runEmployees();
                });
            }
            // Engineer Role
            else if (choices.role === "Engineer") {
              inquirer
                .prompt({
                  type: "input",
                  message: "What is your GitHub id?",
                  name: "github",
                  validate: (value) => {
                    var regName = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
                    if (!regName.test(value)) {
                      return "'Please enter a valid GitHub ID.";
                    }
                    return true;
                  },
                })
                .then((answer) => {
                  let newEngineer = new Engineer(
                    choices.firstLast,
                    choices.id,
                    choices.email,
                    answer.github
                  );
                  team.push(newEngineer);
                  runEmployees();
                });
            }
            // Intern Role
            else if (choices.role === "Intern") {
              inquirer
                .prompt({
                  type: "input",
                  message: "What school did you attend?",
                  name: "school",
                })
                .then((answer) => {
                  let newIntern = new Intern(
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
        // Begin Case 2 - Finish Team and Render
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
};
// End Team-Employees Function
runEmployees();
// Write to Page
const writeHTML = (HTML) => {
  console.log(HTML);
  fs.writeFileSync(outputPath, HTML, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
};
