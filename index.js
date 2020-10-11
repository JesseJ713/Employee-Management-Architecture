let inquirer = require("inquirer");
let server = require("./db-server");

const viewOptions = [
  "View Departments",
  "View Roles",
  "View Employees",
  "Update Employee",
  "exit",
];

const employeeOptions = [
  "Michael Scott",
  "Jim Halpert",
  "Dwight Schrute",
  "Pam Beesly",
  "Kevin Malone",
  "Darryl Philbin",
  "exit",
];

const updateOptions = ["First Name", "Last Name", "Role", "exit"];
