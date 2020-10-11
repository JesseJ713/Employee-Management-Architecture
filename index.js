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
      switch (answer.inquiry) {
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

function departmentView() {
  let querySelector = "SELECT * FROM department";
  connection.query(querySelector, function (err, data) {
    if (err) throw err;

    console.table(data);
    initialInquiry();
  });
}

function employeeView() {
  let querySelector =
    "SELECT first_name, last_name, title, salary FROM employee ";
  querySelector += "LEFT JOIN role ";
  querySelector += "ON employee.role_id = role.id";
  connection.query(querySelector, function (err, data) {
    if (err) throw err;

    console.table(data);
    initialInquiry();
  });
}

function roleView() {
  let querySelector = "SELECT * FROM role";
  connection.query(querySelector, function (err, data) {
    if (err) throw err;

    console.table(data);
    initialInquiry();
  });
}
