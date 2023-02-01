// TODO: Write code to define and export the Employee class
class Employee {
  constructor(names, id, email) {
    this.names = names;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.names;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.constructor.name.toString();
  }
}

module.exports = Employee;
