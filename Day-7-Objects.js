// Task 1 
let BooksData = {
    name:"The Power of you subconsious mind",
    author:"Dr. Jauseph morphy",
    year:1997,
   
}
console.log(BooksData)


// task 2 

console.log(BooksData.author)

// task 3 
let AnotherBook = {
    title :"The power of your positive attitude ",
    Author:"None",
    getDetails:function(year){
        return `${this.name} is the name of the book and the author is respected ${this.author}. `
    }
}
console.log(AnotherBook.getDetails)


// task 4 
let NormalBook = {
    title:"How to Become Rat Racer and Be in the infifnite loop of being poor!!!",
    author:"Indian Society",
    year : "1948",
    getInfo:function(year){
        return `the real value is off course ${NormalBook.year} : updated value of year is ${this.year = year} , `
    }
}
console.log(NormalBook.getInfo(2006))



// task 5 

let Liberary = {
    name : "Big Library",
    books:[
        {
            title:"The god of small things",
            author:"Arundhati Roy",
            
        },{
            title:"The white tiger",
            author:"Arvind Adiga",
            
        },{
            title:"The inheritance of loss",
            author:"Kiran Desai",
        }
    ]
}

console.log(Liberary.books.forEach((ttl)=>console.log(ttl.title)))

// task 6 

let BooksIsthere = {
    title:"No justice",
    author:"I**n Govt.",
    getData:function(){
        return `The book name is ${this.title} and the authour of this book is ${this.author} that you know `
    }
}

console.log(BooksIsthere.getData())

// task 7 

// for (const key in Liberary.books) {

//  console.log(key)                            // This is not able to complete ...


// }

// task 8 

console.log(BooksData.keys)    // tried but not able to solve will see in the next 

