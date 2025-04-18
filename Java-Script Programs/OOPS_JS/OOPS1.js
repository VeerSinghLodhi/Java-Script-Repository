console.log("---OOPS----");

class Student{
    #stu_rollno;
    #stu_name;          // private variable (using # symbol)
    #stu_className;
    constructor(rollno,name,className){
        this.#stu_rollno=rollno;
        this.#stu_name=name;
        this.#stu_className=className;
    }

}

const getStudentDetails=(object)=>{
    console.log('Student Rollno is ',object.stu_rollno);
    console.log('Student Name is ',object.stu_name);
    console.log('Student Class  is ',object.stu_className);
    console.log('--------------------------------------');
}

const s1=new Student(101,"Veer Singh Lodhi","12th");
const s2=new Student(102,"Krishna Kurmi","12th");
const s3=new Student(103,"Rajendra","12th");
getStudentDetails(s1);
getStudentDetails(s2);
getStudentDetails(s3);

