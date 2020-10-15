let mysql = require("mysql");

let server = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_tracker",
});

server.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + server.threadId);
});

module.exports = server;
