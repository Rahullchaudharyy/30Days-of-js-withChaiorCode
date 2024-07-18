const CheakNumber = (Number) => {
  if (Number % 2 == 0) {
    console.log("Number You have given :", Number, "Its Even Number!!");
  } else {
    console.log("Number You have given :", Number, "Its Odd Number!!");
  }
};

CheakNumber(3);

const Square = (Input) => {
  let Output = Input * Input;
  console.log(Output);
};

Square(4);

const FindMax = (a, b) =>
  a > b
    ? console.log(a, " Is the Maximmum in this case")
    : console.log(b, " Is the Maximmum in this case");

FindMax(20, 53);

const ConcatStr = (str1, str2) => {
  let MainString = str1 + " " + str2;
  console.log(MainString);
};

ConcatStr("Rahul", "Chaudhary");

const Sum = (n1, n2) => console.log(n1 + n2);
Sum(20, 30);

const StringSpecCheak = (Str) => {
  Str.includes("S") ? console.log(true) : console.log(false);
};

StringSpecCheak("CheckString");

const Product = (Val1, Val2 = 2) => {
  let Pro = Val1 * Val2;
  console.log(Pro);
};

Product(20);

const Greet = function (name, age = "unknown") {
  return `Hello, ${name}! You are ${age} years old.`;
};
console.log(Greet("rahul", 18));

const HigherOrderFunction = function (CB, NUm) {
  for (let i = 0; i <= NUm; i++) {
    CB();
  }
};

function SayHello() {
  console.log("Hey its Call back");
}

HigherOrderFunction(SayHello, 4);
