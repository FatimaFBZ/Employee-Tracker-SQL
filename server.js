const inquirer = require('inquirer');
const cTable= require("console.table");
// const mysql = require("mysql2");
const connection = require('./config/connection');
const choices= require('./lib/choices')




const chooseRequest=()=>{
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'request',
                message: 'what would like to do?',
                choices: ['view all departments',
                          'view all roles',
                          'view all employees',
                          'add a department',
                          'add a role',
                          'add an employee',
                          'update an employee role'

                ],
                loop:false,
            },
        ])
        .then((data) => {
            const {request} = data;
            console.log(request);

            switch (request) {

                case 'view all departments':

                    viewDepts();
        
                  break;
        
                case 'view all roles':
        
                    viewRoles();
        
                  break;
        
                case 'view all employees':
        
                 viewEmployees();
        
                  break;
        
                case 'add a department':
        
                  addDep();
        
                  break;
        
                case 'add a role':
        
                  addRole();
        
                  break;
        
                case 'add an employee':
        
                  addEmpl();
        
                  break;
        
                case 'update an employee role':
        
                  viewDepts();
        
                  break;
    
    
                default:
                    console.log("default")
        
                    break;
        
            }
        
          })
        
        }
        
        //chooseRequest();
//view all departements
const  viewDepts =  ()=>{
    
    sql.getDepts ()
    .then(([rows]) => {
        console.log(cTable.getTable(rows));
        
    })
    .then(()=>{
    chooseRequest();
    })
}
// view all roles
const viewRoles= ()=>{
    sql.getRoles()
    .then(([rows])=>{
        console.log(cTable.getTable(rows));
    })
    .then(()=>{
        chooseRequest();
    })
}
// view all employees

const viewEmployees= ()=>{
    sql.getEmployees()
    .then(([rows])=>{
        console.log(cTable.getTable(rows));
    })
    .then(()=>{
        chooseRequest();
    })
}

//add departement
const newDepartement= async ()=>{

    const departement = await inquirer.prompt([
        {
            type: "input",
            name:"name",
            message:"what is the name of the Departement",
            validate:(name)=>{
                if(name){
                    return true;
                }else{
                    console.log("please Enter a Departement Name!")
                    return false;
                }
            },
        },
    ]);
    await sql.addDepartement(departement);
    chooseRequest();
    }

    // add a role
    const newRole = async () => {
        const choicesArr = await choices.deptChoices();
        const role = await inquirer.prompt([
            {
              type: "input",
              name: "title",
              message: "What is the name of the Role?",
              validate: (title) =>{
                if (title) {
                  return true;
                } else {
                  console.log(" Please Enter the Role Name!")
                  return false;
                }
              },
           },
           {
             type: "input",
             name: 'salary',
             message: "What is the Salary of the Role?",
             validate: (salary) =>{
               if(salary && !isNaN(salary)){
                 return true;
               } else {
                 console.log(" Please Enter the Role Salary");
               }
             }
           },
           {
            type: "list",
            name: 'department_id',
            message: "What Department is the Role connected with?",
            choices: choicesArr,
            loop: false,
          }
         ]);
        await sql.addRole(role);
        chooseRequest(); 
        }
// add employee

const newEmp = async () => {
    const roleArr = await choices.roleChoices();
    const ManagerArray = await choices.ManagerChoices();
    const emp = await inquirer.prompt([
        {
          type: "input",
          name: "first",
          message: "What is the Employees First Name?",
          validate: (first) =>{
            if (first && isNaN(first)) {
              return true;
            } else {
              console.log(" Please Enter a Name!")
              return false;
            }
          },
       },
       {
        type: "input",
        name: "last",
        message: "What is the Employees Last Name?",
        validate: (last) =>{
          if (last && isNaN(last)) {
            return true;
          } else {
            console.log(" Please Enter a Name!")
            return false;
          }
        },
      },
      {
        type: "list",
        name: 'role_id',
        message: "What is the Employees Role?",
        choices: roleArr,
        loop: false,
      },
      {
        type: "list",
        name: 'manager_id',
        message: "Who is the Employees Manager?",
        choices: ManagerArr,
        loop: false,
      }
     ]);
    await sql.addEmp(emp);
    chooseRequest(); 
   
  }
//   update an employee role

const updateEmpRole = async () => {
    const roleArr = await choices.roleChoices();
    const empArr = await choices.empChoices();
    const emp = await inquirer.prompt([
      {
        type: "list",
        name: "emp_id",
        message: "What is the Employee do you want to update?",
        choices: empArr,
        loop: false,
      },
      {
        type: "list",
        name: 'role_id',
        message: "What is the Employees Role?",
        choices: roleArr,
        loop: false,
      }
     ]);
    await sql.updateEmpRoleById(emp);
    chooseRequest(); 
   
  }
  chooseRequest();