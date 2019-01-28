const express = require('express');
const bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var mongoose = require('mongoose');

var mongo = require('mongodb').MongoClient;
var theDb;

var ProgrammingLanguage = {
    name: String,
    title: String,
    introduction: String
};

var Lesson = {
    name: String,
    description: String,
    details: String
};

var url = "mongodb://localhost:27017/mydb";
mongo.connect("mongodb://localhost:27017/",{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;

    theDb = ds.db("mydb");

    theDb.createCollection("lessons", function (err, res) {
        if(err) throw err;
        console.log("Created collection Lessons")
    });

    //INSERT
    console.log("Database created!");


    // db.close();
  });

  //INSERT
  function insertLesson(item) {
    theDb.collection("lessons").insertOne(item, function(err, res) {
        if(err) throw err;
        console.log(item, " has been inserted")
        db.close();
    });
  }

  //DELETE
  function deleteLesson(item) {
    theDb.collection("lessons").deleteOne(item, function(err, obj) {
        if(err) throw err;
        console.log(item, " has been deleted");
        theDb.close();
    });
  }

  //UPDATE
  function updateLesson(item) {

  }


// mongoose.connect('mongodb://USER')
const app = express();
app.use(bodyParser.json());

//Handle CORS: share resources accross domains
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.header("Access-Control-Allow-Origin", "http://localhost:2100");
    res.header( 'Content-Type', 'application/json');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
   
//create rest-api endpoint
app.get('/api/gaze-data', (req, res) => {
   // res.json(mappedData);
  
});

app.get('/api/check-data', (req, res) => {
    //not implemented yet
});


//create a server object:
http.createServer(function (req, res) {

    console.log("Listening on port 3000");
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    console.log("Listening on port 3000");
}).listen(3000);
