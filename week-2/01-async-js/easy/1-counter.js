// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


// let a=0;
// for(let i=0;i<10;i++){
//     setTimeout(() => {
//         a = a + 1;
//         console.log(a);
//     },i * 1000);
// }

let b = 0;
const intervalId = setInterval(function (){
    b = b + 1;
    console.log(b);
},1000);


let iterations = 0;
function stopInterval(){
    iterations++;   
    if(iterations > 10){
    clearInterval(intervalId);
    }
}
setInterval(stopInterval,1000);