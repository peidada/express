// var express = require('express');
import express from 'express'; //通过babelrc转为es6

var app = express();

// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('Hello world!');
})

app.listen(3000);