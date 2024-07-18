// Task 1 

let FirstArrays = [1, 2, 3, 4, 5];
console.log(FirstArrays)


// Task 2 

let TaskTwoArr = [1, 3, 53, 38, 2];
console.log(TaskTwoArr[0], ",", TaskTwoArr[4])

// Task 3 

let CurrentArr = ["Chai", "Coffee"]
CurrentArr.push("Rahul")
console.log(CurrentArr)


// Task 4 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let EvenNumbers = numbers.filter((Elem) => {
    return Elem % 2 == 0
})

console.log(EvenNumbers)


// Task 5 

let Numbers = [1,2,3,4,5,6,7,8,9,10]
let sum = Numbers.reduce((curr , accu)=>{
   return curr + accu ;

})

console.log(sum)

// task 6 

let Arrayy = ["Index0","Index1","Index2","Index3","Index4"]

for(let i = 0 ; i< Arrayy.length; i++){
    console.log("For Loop",Arrayy[i])
}

// Task 7

Arrayy.forEach(Elem=>{
    console.log("For Each Loop",Elem)
})

// Task 8 

let TwoDimension = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]

console.log(TwoDimension[0])
