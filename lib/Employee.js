// TODO: Write code to define and export the Employee class
class Employee {
  constructor(names, id, email) {
    this.names = names;
    this.id = id;
    this.email = email;
  }
  getName() {
    return `Employee name: ${this.names}`;
  }
  getId() {
    return `Employee ID: ${this.id}`;
  }
  getEmail() {
    return `Employee email: ${this.email}`;
  }
  getRole() {
    return `${this.constructor.name.toString()}`;
  }
}

module.exports = Employee;
