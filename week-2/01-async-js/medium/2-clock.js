// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// const date = new Date();
// // console.log(date.getHours() + ":"  + date.getMinutes() + ":" + date.getSeconds());
// const date2 = new Date().toLocaleTimeString();


// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// setInterval(() => {
//     console.log(hours + ":" + minutes + ":" + seconds);
//     if(seconds == 59){
//         minutes++;
//         seconds = -1;
//     }
//     if(minutes == 59){
//         hours++;
//         minutes = -1;
//     }
//     if(hours == 24){
//         hours = 0;
//     }
//     seconds++;
//     console.log(date2);
// },1000);

let readline = require('readline');

setInterval(()=>{
    console.clear();
    process.stdout.cursorTo(0);
    process.stdout.write(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit', hour12:false}) + "\n");   
    process.stdout.write(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit'}) + "\n");   
    process.stdout.write((new Intl.DateTimeFormat("en", {timeStyle: "medium"})).format(Date.now()))
}, 1000);