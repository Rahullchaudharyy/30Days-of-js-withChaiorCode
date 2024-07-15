// Task 1
let Num = -0.1;

if (Num < 0) {
  console.log("Number is Nagative");
} else if (Num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is 0");
}
// Task 2

const PersonAge = 17.5;

if (PersonAge >= 18) {
  console.log("You are eligible for the vote !!!");
} else {
  console.log("You can not give the vote");
}
// Task 3

let num1 = 10;
let num2 = 20;
let num3 = 15;

let largest;

if (num1 >= num2) {
  if (num1 >= num3) {
    largest = num1;
  } else {
    largest = num3;
  }
} else {
  if (num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
}

console.log("The largest number is " + largest);

// Task 4

let day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Just a normal day consider it anything");
    break;
}

let score = 7;
let grade;
switch (score) {
  case 1:
    grade = "F";
    break;
  case 2:
    grade = "F";

    break;
  case 3:
    grade = "D";
    break;
  case 4:
    grade = "C";
    break;
  case 5:
    grade = "C";
    break;
  case 6:
    grade = "C";
    break;
  case 7:
    grade = "B";
    break;
  case 8:
    grade = "A";
    break;
  case 9:
    grade = "A";
    break;
  case 10:
    grade = "A";
    break;

  default:
    console.log("Your dont have grade but you are pass");
    break;
}

console.log("Your grade is", grade);

let NUmber = 2;

console.log(NUmber % 2 === 0 ? "Its Even Number" : "its Odd number");


// Tried by gpt 
let year = 2024;

let isLeapYear;

if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
} else {
    isLeapYear = false;
}

if (isLeapYear) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
