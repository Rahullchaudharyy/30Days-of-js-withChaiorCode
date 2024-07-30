
// task1 

class person {
    constructor(name, age) {
        this.PersonName = name
        this.PersonAge = age
        console.log(`Hello ${this.PersonName} your age is ${this.PersonAge}`)
    }

    UpdateAge(age) {
        this.PersonAge = age
        console.log(`Hello ${this.PersonName} your updated age is ${this.PersonAge}`)
    }
  static  Staticmsg(){
        return `Hello its static massage for the ${this.PersonName}`
    }

    set PersonName(LastName){
        return `Hello ${this.LastName}`
    }
}
 // Task 2 
const PersonInfo = new person("Rahul", 18)
PersonInfo.UpdateAge(2000000000000)


console.log(person.Staticmsg())



// Task three 

class Studentt extends person {

    static studentCount = 0 ;

    constructor(name, age, id) {
        super(name, age);
        this.studentId = id;
        this.name = name;
        this.age = age
         Studentt.studentCount++
         console.log(`Total number of students is ${Studentt.studentCount}`)
    }

    getStudentID() {
        return this.studentId;
    }

    greet() {
        return `Hello, my name is ${this.name} and my ID is ${this.studentId}.`;
    }
}

const student = new Studentt("rahul", 18, 20160024432);
const student2 = new Studentt("ankit", 18, 20160024432);
const student3 = new Studentt("krishna", 18, 20160024432);
console.log(student.greet());

// task 5 


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.personAge = age;
        console.log(`Hello ${this.fullName}, your age is ${this.personAge}`);
    }

    // Getter for full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for lastName
    set lastName(newLastName) {
        this._lastName = newLastName;
    }
}

// Task 7
const Human = new Person('John', 'Doe', 30);


