/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


// Solution - Uses a setTimeout function which is an asynchronous function that can be called using the argument that has been passed inside the wait functio

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },n * 1000);
    });
};

module.exports = wait;
