const sql= require('../db/query');


const deptChoices= async()=>{
    const newArray = await sql.getDepts();
    const choices= newArray[0];
    let choicesArr=[];

    choices.forEach(Element =>{
        let valueObj={
            name:Element.departement_name,
            value: Element.id
        }
        choicesArr.push(valueObj);
    });
return choicesArr;
}
const ManagerChoices = async () => {
    const tempArr = await sql.getManagers();
   
    const choices = tempArr[0];
    let choicesArr = [];
    choices.forEach(element => {
      let valueObj = {
        name: element.manager_name,
        value: element.id
      }
      choicesArr.push(valueObj);
    });
    return choicesArr;
  }
  const EmployeesChoices = async () => {
    const tempArr = await sql.getEmloyees();
   
    const choices = tempArr[0];
    let choicesArr = [];
    choices.forEach(element => {
      let valueObj = {
        name: element.employee_name,
        value: element.id
      }
      choicesArr.push(valueObj);
    });
    return choicesArr;
  }

  const roleChoices = async () => {
    const tempArr = await sql.getRoleIds();
    const choices = tempArr[0];
    let choicesArr = [];
    choices.forEach(element => {
      let valueObj = {
        name: element.title,
        value: element.id
      }
      choicesArr.push(valueObj);
    });
    return choicesArr;
  }

  const EmpChoices = async () => {
    const tempArr = await sql.getEmpRaw();
    const choices = tempArr[0];
    let choicesArr = [];
    choices.forEach(element => {
      let valueObj = {
        name: element.first_name + ' ' + element.last_name,
        value: element.id
      }
      choicesArr.push(valueObj);
    });
    return choicesArr;
  }

  module.exports ={deptChoices,  ManagerChoices, EmployeesChoices, roleChoices, EmpChoices }