function GiveTheInfo(OS, Admin) {
    let result = `The System Administraiton of ${OS} is ${Admin}.`
    console.log(result)
}
GiveTheInfo("Windows 11", "Rahul Chaudhary")

// Task two 

let MultiLineStr = `I am rahul
                      Try to write the code 
                     Improving my logics . 
                     `

console.log(MultiLineStr)

// task 3 
let arr = [1,2,3,4,5,6,7,8,9,10]
let [firstVal , SecondVal, ...rest] = arr;


console.log(firstVal , SecondVal)

// task 4 

let book = {
    title:"The law of conversation",
    author:"Unknown"
}

let {title,author} = book;

console.log(title,author)

// task 5 

let aray1 = [34,45,465,4,32,4,24,3]
let aray2 = [384,389,53,34,2,4,2,4]

let Combined = [...aray1,...aray2]

console.log(Combined)

// task 6


function Solve(...Numb){
    return Numb.reduce((total,num )=> total + num , 0)

}

console.log(Solve(2,3,4,4))


// task 7
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 3));


// Two questions are remaing .......

