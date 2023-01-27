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
];

const questionsRole = [
  {
    type: "list",
    message: "Chose an option please",
    choices: ["Engineer", "Intern", "Finish Building Team"],
    name: "option",
  },
];

const questionsEngineer = [
  {
    type: "input",
    message: "Engineer's Name please?",
    name: "name",
  },
  {
    type: "input",
    message: "Your Engineer's ID please?",
    name: "id",
  },
  {
    type: "input",
    message: "Your Engineer's Email please?",
    name: "email",
  },
  {
    type: "input",
    message: "Your GitHub Username",
    name: "username",
  },
];

const questionsIntern = [
  {
    type: "input",
    message: "Intern's Name please?",
    name: "name",
  },
  {
    type: "input",
    message: "Your Intern's ID please?",
    name: "id",
  },
  {
    type: "input",
    message: "Your Intern's Email please?",
    name: "email",
  },
  {
    type: "input",
    message: "Your Intern's School please?",
    name: "school",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questionsManager).then((response) => {
    // writeToFile("test.txt", render({ ...response }));
    // console.log(response);
  });
}

init();
