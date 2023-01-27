// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(names, id, email, officeNumber) {
    super(names, id, email);
    this.officeNumber = officeNumber;
  }
}
// const manager = new Manager("Nick", 12, "info@email.com", 55);
// console.log(manager.getRole());
module.exports = Manager;
