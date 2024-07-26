// function riskyFunction() {
//     throw new Error("Something went wrong in riskyFunction!");
//   }
  
//   try {
//     riskyFunction();
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
  



//   function Devide(numerator,denominator){
//     if(denominator === 0 ){
//         throw new Error("Can't divide by zero")
//     }
//     return console.log(numerator/denominator) 
//   }

//   try{
//     const result =  Devide(10,0)
//   }catch (error){
//     console.error("Error is:", error.message);
// }


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
  

