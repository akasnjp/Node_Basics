//file handling --> fs module

const fs = require("fs");

//Synchronous call , here it overwrites the previous statement
fs.writeFileSync('./test.txt', 'Hey there');
fs.writeFileSync('./test.txt', 'Hello');


//Asynchronous call, here same parameter will be there along with a callback function
fs.writeFile('./test1.txt', "Everyone", (err) =>{});
fs.writeFile('./test1.txt', "Acknowledge Me", (err)=> {});
