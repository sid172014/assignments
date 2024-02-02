// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


// Solution

// Reading from file using the 'FileSystem' module which is took as a variable called 'fs'
const fs = require('fs');
fs.readFile("something.txt", "utf-8", (error , data) => {
    console.log(data);
});

// Expensive Operation
let a =0;
for(let i=0;i<10000000000;i++){
    a = a + 1;
};

// Note : As we grow this expensive operation to be more and more expensive the 'fs.readFile(...)' output kind of waits inside the callback queue so that the main javascript thread becomes free after doing all the synchronous tasks it will pick things up which are waiting inside the callback queue