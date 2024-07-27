
// TaskTwo

class person {
    constructor(name, age) {
        this.PersonName = name
        this.PersonAge = age
        console.log(`Hello ${this.PersonName} your age is ${this.PersonAge}`)
    }

    UpdateAge(age) {
        this.PersonAge = age
        console.log(`Hello ${this.PersonName} your age is ${this.PersonAge}`)
    }
}

const PersonInfo = new person("Rahul", 18)
PersonInfo.UpdateAge(2000000000000)



// Task two 

class Studnt extends person {
    constructor(name, age, id) {
        super(name, age)
        this.StudntId = id
    }
    getStudetnID() {
        return this.StudntId

    }
}

const Student = new Studnt('Rahul', 18, 20160024432)
console.log(Student)



// Task three 

