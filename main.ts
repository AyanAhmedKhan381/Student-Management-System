import chalk from "chalk";
import inquirer from "inquirer";

class Student {
    static counter = 10000;
    id: Number;
    name: string;
    course: string[];
    balance: number;

    constructor(name: string) {
        this.id = Student.counter++;
        this.name = name;
        this.course = []; // Initialize an empty array for courses
        this.balance = 100;
    }

//  1 method to enroll a student in a course
   enroll_course(course: string) {
    this.course.push(course);
   }


   // 2 method to view a student balance
   View_balance(){
    console.log(`Balance For ${this.name} : $${this.balance}`);
   }


   // 3 method to pay student fees
   Pay_fees(amount: number){
    this.balance -= amount;
    console.log(`$${amount} Fees Paid Successfully for ${this.name}`)
    console.log(`Remaning Balance is $${this.balance}`)
   }


// 4 method to display student status
Show_status (){
console.log(`ID: ${this.id}`)
console.log(`Name: ${this.name}`)
console.log(`Courses: ${this.course}`)
console.log(`Balance: $${this.balance}`)
}

}



//Defining a Student_manager class to manage student
class Student_Manager {
    students: Student[]

    constructor(){
        this.students = []
    }

    //Method to add a new student
    add_student(name: string){
        let student = new Student(name)
        this.students.push(student)
    console.log(`Student: ${name} added Successfully Student ID: ${student.id}`)

    }

    //Method to enroll a student in a course
    enroll_student(student_id: number, course: string){
        let student = this.find_student(student_id);
        if (student){
            student.enroll_course(course)
            console.log(chalk.green(`${student.name} enroll in ${course}`))
        }

    }
// method to view a student balance
view_student_balance(student_id: number){
    let student = this.find_student(student_id);
    if (student){
        chalk.green(student.View_balance())
    }
    else {
        console.log("Student Not Found Please Enter Correct Student ID:")

    }
 }

// Method to pay student fees
  pay_student_fees(student_id: number, amount: number){
    let student = this.find_student(student_id);
    if (student){
        student.Pay_fees(amount)
    }
    else {
        console.log("Student Not Found Please Enter Correct Student ID:")
    }

}

//Method to display student status
show_student_status(student_id: number){
    let student = this.find_student(student_id);
    if(student){
        student.Show_status()

    }

}

    //Method to find a student by student id
    find_student(student_id: number) {
        return this.students.find(std => std.id === student_id)
    }
 }

 //Main function to run the program
 async function main(){
    console.log("Welcome to Code-with-Ayan'     - Student Management System" )
    console.log("-".repeat(50))


    let student_manager = new Student_Manager()
    //while loop to keep program running
    while(true){
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an options",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit"
                ]
            }
        ]);

        //Using Switch case to handle user choice
     switch(choice.choice){
          case "Add Student":
            let name_input = await inquirer.prompt([
                {
                   name: "name",
                 type: "input",
                 message: "Enter a Student Name"
                }
           ]);
           student_manager.add_student(name_input.name);
           break;

          case "Enroll Student":
          let course_input = await inquirer.prompt([
            {
                name: "student_id",
                type: "number",
                message: "Enter a Student ID"
            },
            {
                name: "course",
                type: "input", 
                message: "Enter a Course Name",

            }

          ]);
          student_manager.enroll_student(course_input.student_id, course_input.course);
          break;

          case "View Student Balance":
            let balance_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Entera Student ID",
                }
            ]);
            student_manager.view_student_balance(balance_input.student_id);
            break;

            case "Pay Fees":
                let Fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID:"
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay"
                    }
                ]);
                student_manager.pay_student_fees(Fees_input.student_id, Fees_input.amount);
                break;

                case "Show Status":
                    let Show_status = await inquirer.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: 'Enter a Student ID:'
                        }
                    ]);
                    student_manager.show_student_status(Show_status.student_id);
                    break;

                    case "Exit":
                        console.log("Exit...")
                        process.exit();
   
     }
   }

}

// Calling a main function
main();
 










































function find_student(student_id: any, number: any) {
    throw new Error("Function not implemented.");
}

