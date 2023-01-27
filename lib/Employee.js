// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return `Employee name: ${this.name}`;
  }
  getId() {
    return `Employee ID: ${this.name}`;
  }
  getEmail() {
    return `Employee email: ${this.email}`;
  }
  getRole() {
    return `Employee`;
  }
}
