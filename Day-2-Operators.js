/* Task one */

let a = 20;
let b = 1;
let Total = a + b;
console.log(Total)
// Output = 21

/* Task 2 */

let x = 22;
let y = 1;
let Diff = x - y;
console.log(Diff)
// Output = 21

/* Task 3 */

let first = 21
let second = 1
let multiple = first * second;
console.log(multiple)
// Output = 21


/* Task 4 */
let num = 21
let num2 = 1
let result = num / num2;
console.log(result);
// Output = 21

/* Task 5 */

let newNum1 = 21
let newNum2 = 42

let reminder = newNum1 % newNum2;
console.log(reminder)

/* Task 6 */

let Number = 20
let NewNumber = 1
Number += NewNumber
console.log(Number)
/* Task 7 */


let numb = 22
let DecValue = 1
numb -= DecValue
console.log(numb)

/* Task 8 */


let ComNumb = 483
let ComNumb2 = 32;
console.log(ComNumb > ComNumb2)

/* Task 9 */

let EqNumb = 30
let EqNumb2 = 30
console.log(EqNumb <= EqNumb2)

/* Task 10 */
let EQOP = 20
let EQOP2 = "20"
console.log(EQOP == EQOP2)

// Outpput probbably would be the true 



let DEQOP = 20
let DEQOP2 = "20"
console.log(EQOP === EQOP2)

// Outpput probbably would be the false 

// it cheaks mainly the type of the value weather it is same or not ? 

let age = 18
let BloodGroup = "O positive+"
let Resuls = false

if (age == 18 && BloodGroup == "O positive+") {
    console.log("The person age is 18 and the BG is 0+ thats tottaly fine !!!")
    if (age == 18 || BloodGroup == "O nagative") {

        console.log("The person age is 18 and the BG is 0- thats tottaly fine !!!")
        if (!Resuls) {
            console.log("Age is not 17")
        }
    }

} 


let NumbCheck = -50

console.log(NumbCheck<0?`The number is nagative with the value of ${NumbCheck}`:`the value is postive with the value of ${NumbCheck}`)