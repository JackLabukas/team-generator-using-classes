// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(names, id, email, gitHub) {
    super(names, id, email);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return `GitHub username ${this.gitHub}`;
  }
}

// const engineer = new Engineer("bob", 23, "hello@hello.com", "gitHubUserName");
// console.log(engineer.getRole());
