// Outer function
function outerFunction(outerVariable) {
    function innerFunction() {
      return `The value of the outer variable is: ${outerVariable}`;
    }    return innerFunction;
  }
  



  let Out = 123
  const inner = outerFunction(Out);
  
  console.log(inner());
  

  //Task two 

  function CreateCounter (){
    let Counter = 0 

    return {
        Increase:function(){
            Counter++
        },
        TheValue:function(){
            return Counter
        }
    }
  }

const MainConter = CreateCounter()

MainConter.Increase()



console.log(MainConter.TheValue())



MainConter.Increase()
console.log(MainConter.TheValue())

// Task three 


function IdGen(){
    let Ids = 0 

    return function Genrate(){
   Ids++
    return `Id is ${Ids}`

    }
}

const ID = IdGen()

console.log(ID())
console.log(ID())
console.log(ID())
console.log(ID())
console.log(ID())
console.log(ID())

// Task 4 

function GreetFn(name){
    return function Greet(){
        console.log(`hello ${name}`)
    }
    
}

let Name =  GreetFn("rahul")

Name()

// Task 5

function createItemManager() {
    const itemCollection = [];
  
    return {
      addItem: function(item) {
        itemCollection.push(item);
        console.log(`Added: ${item}`);
      },
      removeItem: function(item) {
        const index = itemCollection.indexOf(item);
        if (index !== -1) {
          itemCollection.splice(index, 1);
          console.log(`Removed: ${item}`);
        } else {
          console.log(`Item not found: ${item}`);
        }
      },
      listItems: function() {
        console.log('Items in collection:');
        itemCollection.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      }
    };
  }
  
  const myItemManager = createItemManager();
  
  myItemManager.addItem('Book');
  myItemManager.addItem('Laptop');
  myItemManager.addItem('Pen');

  myItemManager.listItems();
  
  myItemManager.removeItem('Laptop');
  
  myItemManager.listItems();
  
  // Task 6  This code has written by gpt becuase i am not able to understand the problem thats why but figure out how we can solve this ? 


  function memoize(func) {
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key] !== undefined) {
        console.log(`Cache hit for arguments: ${args}`);
        return cache[key];
      } else {
        console.log(`Cache miss for arguments: ${args}`);
        const result = func(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const memoizedFibonacci = memoize(fibonacci);
  
  console.log(memoizedFibonacci(5)); 
  console.log(memoizedFibonacci(6)); 
  console.log(memoizedFibonacci(5)); 
  

  // Last task by gpt 

  function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key] !== undefined) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(6)); 
  