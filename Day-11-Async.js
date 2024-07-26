
// let MyPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this message is logged after 2s');
//     }, 2000);
// });

// MyPromise.then((message) => {
//     console.log(message);
// });


// let ThePromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//          reject('Something went wrong!!!')
//     }, 2000);
// })

// ThePromise.catch((ERRE)=>{
//     console.log(ERRE)
// })



// function FetchDataFromUser(message,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
// resolve(message)
//         }, delay);
//     })

// }


// FetchDataFromUser("Data enterd by the user.",1000)
// .then((massege)=>{
//     console.log(massege)
//     return FetchDataFromUser("Data Analyzing from the url..",1500)
// })
// .then((massege)=>{
//     console.log(massege)
//     return FetchDataFromUser("Data is still loading please wait...",2000)
// })
// .then((massege)=>{
//    console.log(massege)
//    return FetchDataFromUser("Data fetched succussfullt but not in the use",1000)
// })
// .then((err)=>{
//     console.log(err)
// })




// let Data = new Promise((resolve,reject)=>{

//    setTimeout(() => {
//      resolve("Hey here is your data ! ready to use.")
//    }, 3000);


// })
// .then((massege)=>{
//     console.log(massege)
// })

// async function GiveMeData(){
//     await Data
// }
// GiveMeData()



// function MakeLoading(massege, delay) {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve(massege)
//         }, delay)
//     })
// }


// function startLoad(){
//     MakeLoading(".", 100)
//         .then((massege) => {
//             console.log(massege)
//             return MakeLoading("..", 100)
//         })
//         .then((massege) => {
//             console.log(massege)
//             return MakeLoading("...", 100)
//         })
//         .then((massege) => {
//             console.log(massege)
//             return MakeLoading("....", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("....", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading(".....", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("......", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading(".......", 100)
//         })
     
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("........", 100)
//         })
     
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading(".........", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("..........", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("...........", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("............", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("...........", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("..........", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading(".........", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("........", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading(".......", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("......", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading(".....", 100)
//         })
     
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("....", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("...", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading("..", 100)
//         })
//         .then((massege)=>{
//             console.log(massege)
//             return MakeLoading(".", 100)
//         })
     
//         .then((massege)=>{
//             console.log(massege)
//             startLoad()
//         })


// }
    

// startLoad()


// async function HandleError(api){
   
//     try{
//         const response = await fetch(api);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//      let Photo_Url = data.message;

//     }catch{
//         console.error("Something went wrong!!! The API might be private or might not be accessible for some reason", error);
//     }
// }

// HandleError("https://dog.ceo/api/breeds/image/random")


// function fetchData(api) {
//     fetch(api)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error("Something went wrong!!! The API might be private or might not be accessible for some reason", error);
//         });
// }

// fetchData("https://dog.ceo/api/breeds/image/random");


function fetchDataAll(api) {
    return fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

const api1 = "https://dog.ceo/api/breeds/image/random";
const api2 = "https://dog.ceo/api/breeds/image/random";
const api3 = "https://dog.ceo/api/breeds/image/random";

Promise.all([fetchDataAll(api1), fetchDataAll(api2), fetchDataAll(api3)])
    .then(values => {
        console.log('All API responses:', values);
    })
    .catch(error => {
        console.error("Something went wrong!!! One of the APIs might be private or might not be accessible for some reason", error);
    });


    Promise.race([fetchDataAll(api1), fetchDataAll(api2), fetchDataAll(api3)])
    .then(value=>{
        console.log('First api is :',value)
    })
    .catch(err=>{
    console.log(err)
    })


    