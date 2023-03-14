const express= require('express');

const app= express();

var mongoose = require('mongoose');

const port = 3000;

var db = require("./config/db");

console.log("connecting--" ,db);
mongoose.connect(db.url);
app.get('/',function(req,res){
    res.send("Welcome Ananya!!!")
})
app.get('/tproute',function(req,res){
    res.send("This is routing for the application developed using Node and Express")
});

    var Student = require ('./app/models/students');
    

    app.get('/api/students',function(req,res){
        Student.find().then(function(err,students) {
            if(err)
            res.send(err);

            res.json(students);
        });
    });


    app.post('/api/students/send', function(req, res){
        var student = new Student();
        student.name= req.body.name;
        student.save(function(err){
        if(err)
            res.send(err);

            res.json(students);
        });
    });






    app.listen(port,function(req,res){
        console.log("The app is running on port 3000")
    });