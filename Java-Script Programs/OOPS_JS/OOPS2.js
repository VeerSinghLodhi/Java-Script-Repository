
console.log('----OOPS----');

// Constructor
function Employee(empid,name,salary){
    this.emp_id=empid;
    this.emp_name=name;
    this.emp_salary=salary;
}

const emp1=new Employee(101,'Veer',40000);
const emp2=new Employee(102,'Krishna',41000);
const emp3=new Employee(103,'Rajendra',42000);
const emp4=new Employee(104,'Hani',43000);
const emp5=new Employee(105,'Pawan',44000);

let objects=[emp1,emp2,emp3,emp4,emp5];    // Objects Array.

for(let i=0;i<objects.length;i++){
    console.log('Employee id '+objects[i].emp_id);
    console.log('Employee Name '+objects[i].emp_name);
    console.log('Employee Salary '+objects[i].emp_salary);    
    console.log('----------------------------------------------');
}

console.log('------------------------------------------');
console.log('Employee id '+objects[objects.length-1].emp_id);
console.log('Employee Name '+objects[objects.length-1].emp_name);
console.log('Employee Salary '+objects[objects.length-1].emp_salary);



