const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const team = [];
const questionsManager = [
  {
    type: "input",
    message: "Your Manager's Name please?",
    name: "name",
  },
  {
    type: "input",
    message: "Your Manager's ID please?",
    name: "id",
  },
  {
    type: "input",
    message: "Your Manager's Email please?",
    name: "email",
  },
  {
    type: "input",
    message: "Your Manager's office number?",
    name: "officeNumber",
  },

  {
    type: "list",
    message: "Chose an option please",
    choices: ["Engineer", "Intern", "FinishBuildingTeam"],
    name: "option",
  },
];

const questionsEngineer = [
  {
    type: "input",
    message: "Engineer's Name please?",
    name: "nameEngineer",
  },
  {
    type: "input",
    message: "Your Engineer's ID please?",
    name: "idEngineer",
  },
  {
    type: "input",
    message: "Your Engineer's Email please?",
    name: "emailEngineer",
  },
  {
    type: "input",
    message: "Your GitHub Username",
    name: "usernameGitHubEngineer",
  },
];
const questionsIntern = [
  {
    type: "input",
    message: "Intern's Name please?",
    name: "nameIntern",
  },
  {
    type: "input",
    message: "Your Intern's ID please?",
    name: "idIntern",
  },
  {
    type: "input",
    message: "Your Intern's Email please?",
    name: "emailIntern",
  },
  {
    type: "input",
    message: "Your Intern's School please?",
    name: "schoolIntern",
  },
];

// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

function init() {
  inquirer.prompt(questionsManager).then((response) => {
    // writeToFile("test.html", render(manager));
    // render(manager);
    const manag = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    team.push(manag);
    if (response.option === "Engineer") {
      inquirer.prompt(questionsEngineer).then((response) => {
        const engin = new Engineer(
          response.nameEngineer,
          response.idEngineer,
          response.emailEngineer,
          response.usernameGitHubEngineer
        );
        console.log(response);
        team.push(engin);
        console.log(team);
      });
    } else if (response.option === "Intern") {
      inquirer.prompt(questionsEngineer).then((response) => {
        const internUser = 
      });
    } else if (response.option === "FinishBuildingTeam") {
    }
    // console.log(render(manager));
  });
}
init();
