DROP DATABASE IF EXISTS Employee_Tracker;

CREATE DATABASE Employee_Tracker;

USE Employee_Tracker;

CREATE TABLE department
(
    id INT
    AUTO_INCREMENT NOT NULL,
name VARCHAR
    (30) NOT NULL,
PRIMARY KEY
    (id)
);

    CREATE TABLE role
    (
        id INT
        AUTO_INCREMENT NOT NULL,
title VARCHAR
        (30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
CONSTRAINT fk_department_id FOREIGN KEY
        (department_id) REFERENCES department
        (id),
PRIMARY KEY
        (id)
);


        CREATE TABLE employee
        (
            id INT
            AUTO_INCREMENT NOT NULL,
first_name VARCHAR
            (30) NOT NULL,
last_name VARCHAR
            (30) NOT NULL,
role_id INT NOT NULL,
CONSTRAINT fk_role_id FOREIGN KEY
            (role_id) REFERENCES role
            (id),
manager_id INT,
CONSTRAINT fk_manager_id FOREIGN KEY
            (manager_id) REFERENCES employee
            (id),
PRIMARY KEY
            (id)
);

            SELECT *
            FROM employee;
            SELECT *
            FROM role;
            SELECT *
            FROM department;

            INSERT INTO department
                (name)
            VALUES
                ("Sales");
            INSERT INTO department
                (name)
            VALUES
                ("Distribution");
            INSERT INTO department
                (name)
            VALUES
                ("Finance");
            INSERT INTO department
                (name)
            VALUES
                ("Secretary");
            INSERT INTO department
                (name)
            VALUES
                ("Manager");

            SELECT *
            FROM department;

            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ("Salesperson", 45000, 1);
            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ("Warehouse Worker", 35000, 2);
            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ("Accountant", 50000, 3);
            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ("Receptionist", 35000, 4);
            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ("Manager", 65000, 5);

            SELECT *
            FROM role;

            INSERT INTO employee
                (first_name, last_name, role_id)
            values
                ("Michael", "Scott", 5);
            INSERT INTO employee
                (first_name, last_name, role_id)
            values
                ("Jim", "Halpert", 1);
            INSERT INTO employee
                (first_name, last_name, role_id)
            values
                ("Dwight", "Schrute", 1);
            INSERT INTO employee
                (first_name, last_name, role_id)
            values
                ("Pam", "Beesly", 4);
            INSERT INTO employee
                (first_name, last_name, role_id)
            values
                ("Kevin", "Malone", 3);
            INSERT INTO employee
                (first_name, last_name, role_id)
            values
                ("Darryl", "Philbin", 2);

            SELECT *
            FROM employee;
