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
          server.end();
          break;
      }
    });
}

initialInquiry();

function departmentView() {
  let querySelector = "SELECT * FROM department";
  server.query(querySelector, function (err, res) {
    if (err) throw err;

    console.table(res);
    initialInquiry();
  });
}

function employeeView() {
  let querySelector =
    "SELECT first_name, last_name, title, salary FROM employee ";
  querySelector += "LEFT JOIN role ";
  querySelector += "ON employee.role_id = role.id";
  server.query(querySelector, function (err, res) {
    if (err) throw err;

    console.table(res);
    initialInquiry();
  });
}

function roleView() {
  let querySelector = "SELECT * FROM role";
  server.query(querySelector, function (err, res) {
    if (err) throw err;

    console.table(res);
    initialInquiry();
  });
}

// function updateEmployee() {
//   let querySelector = "SELECT first_name, last_name, role_id FROM employee";
//   server.query(querySelector, function (err, res) {
//     if (err) throw err;

//     inquirer
//       .prompt([
//         {
//           type: "list",
//           name: "employeeName",
//           message: "While employee role would you like to update?",
//           choices: employeeOptions,
//         },
//         {
//           type: "input",
//           name: "role",
//           message: "What is the new role id?",
//         },
//       ])
//       .then(function (res) {
//         server.query(
//           "UPDATE employee SET role = ${res.role} WHERE id = ${res.employeeName}"
//         ),
//           function (err, res) {
//             if (err) throw err;
//             console.log(res);
//             initialInquiry();
//           };
//       });
//   });
// }
