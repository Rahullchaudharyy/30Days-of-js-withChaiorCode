// 1 
console.log("Task one")
for (let num = 1; num <= 10; num++) {
    console.log(num)
}


// 2
console.log("Task two")
for (let table = 1; table <= 10; table++) {
    let otpt = 5 * table
    console.log(otpt)
}
//3
console.log("Task three")
let i = 1
let sum = 0
while (i <= 10) {
    sum += i
    i++
    
    
}
console.log(sum)

// 4
console.log("Task four")
let number = 10;
while(number>=1){
    console.log(number)
    number--
}

//5
console.log("Task five")

let Count = 1
do {
    console.log(Count)
    Count++
} while (Count<=5);


// jsut for fun 😂😂😂
console.log("*")
console.log("* *")
console.log("* * *")
console.log("* * * *")
console.log("* * * * *")
console.log("* * * * * *")
console.log("* * * * * ")
console.log("* * * * ")
console.log("* * * ")
console.log("* * ")
console.log("* ")

console.log("Task six")




function factorial(num) {
    let result = 1;
    let i = num;
    
    do {
        result *= i;
        i--;
    } while (i > 0);
    
    return result;
}

let numberrrr = 5;
console.log("The factorial of " + numberrrr + " is: " + factorial(numberrrr));

console.log("Task seven")


for (let j = 1; j <= 5; j++) {
    let stars = "";
    for (let n = 1; n <= j; n++) {
        stars += "* ";
    }
    console.log(stars);
}

console.log("task 8 ")

for (let num = 1; num <= 10; num++) {

    if(num===5){
        continue
    }
    console.log(num)
}
console.log("task 9 ")

for (let num = 1; num <= 10; num++) {

    if(num==7){
       break;
    }
    console.log(num)
}
