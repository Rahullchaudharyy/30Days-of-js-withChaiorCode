
// Task first . 
function riskyFunction() {
    throw new Error("Something went wrong in riskyFunction!");
  }

  try {
    riskyFunction();
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
  /// Task two
  function Devide(numerator,denominator){
    if(denominator === 0 ){
        throw new Error("Can't divide by zero")
    }
    return console.log(numerator/denominator) 
  }

  try{
    const result =  Devide(10,0)
  }catch (error){
    console.error("Error is:", error.message);
}

// Task Three 
function exampleFunction() {
    try {
      console.log("Inside the try block");
      throw new Error("error in the try block");
    } catch (error) {
      console.log("Inside the catch block");
      console.error("Caught an error:", error.message);
    } finally {
      console.log("Inside the finally block");
    }
  }

  exampleFunction();

// Task four 

class CustomError extends Error {

  constructor(message) {
    super(message);
    this.name = "CustomError"
  }
}

function ThrowError() {
  throw new CustomError("Something went wrong!!!")
}

try {
  ThrowError()
} catch (error) {
  console.log(error.message)
}


// class Car{
//   constructor(model,name,year){
//     this.CarName = name
//     this.CarModel = model
//     this.Manufacture = year
//   }

//   DisplayInfo(){
//     console.log(`The car name is ${this.CarName} and the model is  ${this.CarModel} `)
//   }

// }

// let MyCar = new Car("Altroz","Tata",2002)
// let RahulsCar = new Car("Audi","New",2012)

// RahulsCar.DisplayInfo()


//Task 5 

// Although i am not able to understand this code properly but i am trying to understand ,
class ValidateError extends Error {
  constructor(message) {
    super(message)
    this.name = "ValidationError"
  }
}





function CheckString(UserInput) {

  try {
    if (!UserInput.trim()) {
      throw new ValidateError("Please enter the input first")
    }
    console.log("Input is valid")
  } catch (error) {

    if (error instanceof ValidateError) {
      console.log(error.message)
    } else {
      console.log("Something Went Wrong")
    }
  }

}


CheckString("asdghm,")







// Task 6 

let MyPromise =  new Promise((resolve, reject) => {
  let condition =  Math.random() > 0.5;

  if (condition) {
    resolve("Its done!!!")
  } else {
    reject("Its not a appropirate thing ...")
  }

})

MyPromise.then((succes) => console.log(succes))
  .catch((err) => console.log(err))

// Task 7 

  async function HandleThings(){
    try{
let result = await MyPromise;
console.log(result)
    }catch(error){
console.log(error)
    }
  }

  HandleThings()


// TASK 8 
// In this i am trying to figure out more the if block that is return newe promise .
function fetchDataFromInvalidUrl() {
  fetch("https://invalid-url.example.com")
    .then(response => {
      if (!response.ok) {
        return Promise.reject(new Error(`HTTP error! status: ${response.status}`));
      }
      return response.json();
    })
    .then(data => {
      console.log("Data:", data);
    })
    .catch(error => {
      console.error("Oops!! Something went wrong:", error.message);
    });
}

fetchDataFromInvalidUrl();

 // Task 9 




 async function FetchApi(Api){
  try{
    let Results = await fetch(Api) 
   let data =  await Results.json()
    console.log('Here is your data -',data)
  }catch{
  console.log('Opps !! Something went wrong... Or might be you are using the wrong api . ')
  }
 }

 FetchApi('https://jsonplacehotlder.typicode.com/users')




