// No use of any template system
var express = require('express'),
  logger = require('morgan');

var fs = require('fs');
const mysql = require('mysql2');

var app = express();
var x = 1;
var y = 2;


const connection = mysql.createConnection({
  hostname: "127.0.0.1",
  user: "root",
  password: "root123",
  database: "script"
});


connection.connect((err) => {
  if (err) {console.log("\nSomething wrong...");throw err}
  else {console.log("\nConnected to baiim sql database")}
});

// Determining the contents of the middleware stack
app.use(logger('dev'));                            // Place an HTTP request recorder on the stack — each request will be logged in the console in 'dev' format
// app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' — static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory

// *** Route definitions ***

// The first route
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/page_1.html")
});

app.get('/json/:name', (req, res) => {
  const fileName = req.params.name
  const filePath = `./${fileName}.json`

  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    };


    try {
      const fileInLines = JSON.parse(data)


      let resultTable = '<table><thead><tr><th>X</th><th>Operation</th><th>Y</th><th>Result</th></tr></thead><tbody>';
      fileInLines.forEach( (object) => {
        switch(object.type) {
          case 'add':
            object.result = object.x + object.y;
            break;
          case 'subtract':
            object.result = object.x - object.y;
            break;
          case 'multiply':
            object.result = object.x * object.y;
            break;
          case 'divide':
            object.result = (object.x / object.y).toFixed(2);
            break;
        }

        resultTable += `<tr><td>${object.x}</td><td>${object.type}</td><td>${object.y}</td><td>${object.result}</td></tr>`
      });

      resultTable += '</tbody></table>';
      res.send(resultTable);
    }
    catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

  
});



app.get('/calculate/:operation/:x/:y', (req, res) => {
  const operationFromURL = req.params.operation;
  const xFromURL = req.params.x;
  const yFromURL = req.params.y;

  let resultFromURL = 0;
  
    switch(operationFromURL) {
      case 'add':
        resultFromURL += xFromURL + yFromURL;
        break;
      case 'subtract':
        resultFromURL += xFromURL - yFromURL;
        break;
      case 'multiply':
        resultFromURL += xFromURL * yFromURL;
        break;
      case 'divide':
        resultFromURL += ( xFromURL / yFromURL ).toFixed(2);
        break;
    }

  let sqlQuery = "INSERT INTO script.ops (x, operation, y, result) VALUES (?, ?, ?, ?)"

  connection.query(sqlQuery,[xFromURL, operationFromURL, yFromURL, resultFromURL]);
  res.send("<p>Added to database...</p>");
});

app.get("/results", (req, res) => {
  
  

  connection.query("SELECT * FROM script.ops", function(err, results, fields) {
    if (!results) {return;}

    let resultTable = '<table><thead><tr><th>X</th><th>Operation</th><th>Y</th><th>Result</th></tr></thead><tbody>';
    
    results.forEach((object) => {
      resultTable += `<tr><td>${object.x}</td><td>${object.operation}</td><td>${object.y}</td><td>${object.result}</td></tr>`
    });

    resultTable += '</tbody></table>';
    res.send(resultTable);
  });
});




// The application is to listen on port number 3000
app.listen(3000, function () {
  console.log('The application is available on port 3000');
});