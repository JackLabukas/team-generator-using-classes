// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(names, id, email, school) {
    super(names, id, email);
    this.school = school;
  }
}
