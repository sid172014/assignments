const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

setInterval(() => { // This is clearing everything that exists inside that 'numberOfRequestsForUser' to an empty object
    numberOfRequestsForUser = {};
}, 1000);

app.use((req,res,next) => { // This middleware function will be used before any of the router is called by any user with their userId
  const userId = req.headers["user-id"];  // We can only access the elements inside the 'headers' section inside an http request using the square bracket notation like we did here, so be careful whenever using the headers section to extract data

  if(!numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId]= 1; // Intialising a property inside the object 'numberOfRequestForUser' using the 'userId' that is provided to us inside the headers section
    next();
  }else{
    if(numberOfRequestsForUser[userId] > 5){
      res.status(404).send();
    }else{
      numberOfRequestsForUser[userId]++;
      next();
    }
  }
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;