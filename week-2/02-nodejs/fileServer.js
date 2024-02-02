/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */


// Solution
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// const port = 3000;

app.use(express.json()); 

app.get('/files', (req,res) => {
  fs.readdir('./files', (err,files) => {
    if(err){
      res.status(500).json({
        "error" : err
      })
    }else{
      res.json(files);
    }
  })
});

app.get('/file/:filename', (req,res) => {
  const notesPath = `./files/${req.params.filename}`;
  fs.readFile(notesPath, "utf-8", (error,data) => {
    if(error){
      res.status(404).send("File not found");
    }else{
      res.send(data);
    }
  });
});

app.get('*',(req,res) => {
    res.status(404).send("Route not found");
})

// app.listen(port,() => {
//   console.log("Server is listening at the port " + port);
// })

module.exports = app;