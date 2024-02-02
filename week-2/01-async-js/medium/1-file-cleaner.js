// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
fs.readFile("test.txt", "utf-8", (error,data) => {

    let foundSpace = false;
    let newString = "";
    for(let i=0;i<data.length;i++){
        if(data[i] == ' ' && foundSpace == true){
            continue;
        }else if(data[i] == ' ' && foundSpace == false){
            foundSpace = true;
        }else if(i > 0 && data[i] != ' ' && data[i-1] == ' '){
            foundSpace = false;
        }
        newString = newString + data[i];
    };

    fs.writeFile("test.txt", newString, (error) => {
        if(error){
            console.log(error);
        }else{
            console.log("Data written successfully and thus also filtered");
        }
    })
})
