// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


// Solution

// Writing to a file called "something.txt"
const fs = require('fs');
const data = "This data was written from a NodeJS file Yeah";
fs.writeFile("something.txt", data, (error) => {
    if(error){
        console.log(error);
    }else{
        console.log("Data Written Successfully");
    }
});

// Some Expensive Operation
let a = 0;
for(let i=0;i<10000000000;i++){
    a = a + i;
};
console.log(a);
// Just like the nodeJS file where we had used the 'fs.readFile(...)' function which is an asynchronous function, here we are using the 'fs.writeFile(...)' function which is also an asynchronous function and the main javascript thread will actually be busy here performing this tedious operation while the actual writing to the file part that we triggered through the 'fs.writeFile(...)' will be waiting
