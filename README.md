<h1 align="center">Employee Tracker</h1>
   
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/nguyendinhkhanhha296/employee-tracker" />
    <img src="https://img.shields.io/github/languages/top/nguyendinhkhanhha296/employee-tracker"  />
    <img src="https://img.shields.io/github/issues/nguyendinhkhanhha296/employee-tracker" />
    <img src="https://img.shields.io/github/last-commit/nguyendinhkhanhha296/employee-tracker" >
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/jQuery-blue"  />
    <img src="https://img.shields.io/badge/mySQL-purple"  />
    <img src="https://img.shields.io/badge/-Node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-json-orange" />
</p>

## Screenshot

![Screenshot](./Assets/Screen%20Shot%202022-09-08%20at%201.38.14%20PM.png)
   
## Description
  
🔍 A command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.  
  
💻 Below is the gif showing the functionality of the application:
  
![Gif](./Assets/employeetracker.gif)
  
🎥 The full movie file showing functionality of the application can be found [here](./Assets/Screen%20Recording%202022-09-08%20at%202.01.36%20PM.mov)  
  
## User Story
  
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business 
```
  
## Acceptance Criteria
  
``` 
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
  
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)

## Installation
💾   
  
`npm init`
  
`npm install inquirer`

`npm install mysql2`

`npm install console-table`

`npm install validator`
  
## Usage
💻   
  
Run the following command at th root of your project and answer the prompted questions:
  
`npm start`