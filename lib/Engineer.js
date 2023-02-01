// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(names, id, email, github) {
    super(names, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}

// const engineer = new Engineer("bob", 23, "hello@hello.com", "gitHubUserName");
// console.log(typeof engineer.getRole());

module.exports = Engineer;
