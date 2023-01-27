// TODO: Write code to define and export the Employee class
class Employee {
  constructor(names, id, email) {
    this.name = name;
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
    return `Employee`;
  }
}
