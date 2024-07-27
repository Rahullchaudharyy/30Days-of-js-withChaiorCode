import axios from "axios";
let Result = axios.get('https://jsonplaceholder.typicode.com/posts/2')

Result
.then(response=>console.log(response.data))
.catch(err => console.log(err))


