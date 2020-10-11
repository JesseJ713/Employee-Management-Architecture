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

function initialInquiry() {
  inquirer
    .prompt({
      name: "inquiry",
      type: "list",
      message: "What would you like to do?",
      choices: viewOptions,
    })
    .then(function (answer) {
      switch (answer.action) {
        case viewOptions[0]:
          departmentView();
          break;

        case viewOptions[1]:
          roleView();
          break;

        case viewOptions[2]:
          employeeView();
          break;

        case viewOptions[3]:
          updateEmployee();

        case updateOptions[4]:
          connection.end();
          break;
      }
    });
}

initialInquiry();
