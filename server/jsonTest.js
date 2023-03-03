const { log } = require("console");

const obj = {
name : "prashant",
age : 26 ,
address : "mumbai"

}
console.log(obj);
//output: { name: 'prashant', age: 26, address: 'mumbai' } :only keys having quotes 

const jsonData =JSON.stringify(obj);
console.log(jsonData);


//output:{"name":"prashant","age":26,"address":"mumbai"} :key and value both have quotes
//this is json format

const objData = JSON.parse(jsonData);
console.log(objData);

//conversion of datab from json format to obj format