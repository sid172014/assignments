/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() =>{ 
            resolve("First completed");
        },t * 1000);
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() =>{ 
            resolve("Second completed");
        },t * 1000);
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() =>{ 
            resolve("Third completed");
        },t * 1000);
    })
};


function calculateTime(t1, t2, t3) {
    const allPromise = Promise.all([wait1(t1),wait2(t2),wait3(t3)]);
    let totalTime = 0;    
    const date = new Date();
    const millis1 = date.getTime();
    return allPromise.then(() => {  // This overall return value won't be a promise but the 'totalTime' evaluated value i.e after this promise is resolved or is evaluated
        const date2 = new Date();
        const millis2 = date2.getTime();
        return millis2-millis1; // This value is returned to the 'then(...)' block i.e it means the promise is thus resolved and the totalTime is the value returned to this 'then(...)' block
    });
};
calculateTime(1,2,3);
module.exports = calculateTime;
