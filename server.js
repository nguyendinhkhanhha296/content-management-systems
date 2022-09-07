const connection = require('./config/connection');
const inquirer = require('inquirer');
require("console.table");

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    promptUser();
});

// Prompt User for Choices
const promptUser = () => {
    inquirer.prompt([{
            name: 'choices',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'View All Employees By Department',
                'View Department Budgets',
                'Update Employee Role',
                'Update Employee Manager',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Remove Employee',
                'Remove Role',
                'Remove Department',
                'Quit'
            ]
        }])
        .then((answers) => {
            const {
                choices
            } = answers;

            if (choices === 'View All Employees') {
                viewAllEmployees();
            }

            if (choices === 'View All Departments') {
                viewAllDepartments();
            }

            if (choices === 'View All Employees By Department') {
                viewEmployeesByDepartment();
            }

            if (choices === 'Add Employee') {
                addEmployee();
            }

            if (choices === 'Remove Employee') {
                removeEmployee();
            }

            if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }

            if (choices === 'Update Employee Manager') {
                updateEmployeeManager();
            }

            if (choices === 'View All Roles') {
                viewAllRoles();
            }

            if (choices === 'Add Role') {
                addRole();
            }

            if (choices === 'Remove Role') {
                removeRole();
            }

            if (choices === 'Add Department') {
                addDepartment();
            }

            if (choices === 'View Department Budgets') {
                viewDepartmentBudget();
            }

            if (choices === 'Remove Department') {
                removeDepartment();
            }

            if (choices === 'Quit') {
                sequelize.end();
            }
        });
};

//========================================VIEW=========================================
//1. View All Employees
const viewAllEmployees = () => {
    let query = `SELECT employee.id, 
                    employee.first_name, 
                    employee.last_name, 
                    role.title, 
                    department.department_name AS 'department', 
                    role.salary
                 FROM employee, role, department 
                 WHERE department.id = role.department_id 
                 AND role.id = employee.role_id
                 ORDER BY employee.id ASC`;
    connection.promise().query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
    });
};

//2. View all Roles
const viewAllRoles = () => {
    const query = `SELECT role.id, role.title, department.department_name AS department
                   FROM role
                   INNER JOIN department ON role.department_id = department.id`;
    connection.promise().query(query, (err, res) => {
        if (err) throw err;
        res.forEach((role) => {
            console.log(role.title);
        });
        promptUser();
    });
};

//3. View all Departments
const viewAllDepartments = () => {
    const sql = `SELECT department.id AS id, department.department_name AS department FROM department`;
    connection.promise().query(sql, (err, res) => {
        if (err) throw err;
        console.log(chalk.yellow.bold(`====================================================================================`));
        console.log(`                              ` + chalk.green.bold(`All Departments:`));
        console.log(chalk.yellow.bold(`====================================================================================`));
        console.table(res);
        console.log(chalk.yellow.bold(`====================================================================================`));
        promptUser();
    });
};

//4. View all Employees by Department
const viewEmployeesByDepartment = () => {
    const sql = `SELECT employee.first_name, 
                    employee.last_name, 
                    department.department_name AS department
                    FROM employee 
                    LEFT JOIN role ON employee.role_id = role.id 
                    LEFT JOIN department ON role.department_id = department.id`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.log(chalk.yellow.bold(`====================================================================================`));
        console.log(`                              ` + chalk.green.bold(`Employees by Department:`));
        console.log(chalk.yellow.bold(`====================================================================================`));
        console.table(res);
        console.log(chalk.yellow.bold(`====================================================================================`));
        promptUser();
    });
};

//5. View all Departments by Budget
const viewDepartmentBudget = () => {
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.log(`                              ` + chalk.green.bold(`Budget By Department:`));
    console.log(chalk.yellow.bold(`====================================================================================`));
    const sql = `SELECT department_id AS id, 
                    department.department_name AS department,
                    SUM(salary) AS budget
                    FROM  role  
                    INNER JOIN department ON role.department_id = department.id GROUP BY  role.department_id`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log(chalk.yellow.bold(`====================================================================================`));
        promptUser();
    });
};