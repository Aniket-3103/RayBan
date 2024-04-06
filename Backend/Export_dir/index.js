//this is a special file which gathers all the objects
//and functions together, create an obj then export it.
//It has to be of name index.js

const apple=require("./apple");
const mango=require("./mango");
const orange=require("./orange");

let arr=[apple, mango, orange];
module.exports=arr;