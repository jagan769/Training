var express = require('express');
var app = express();
var f1=(req,res,next)=>{
    console.log("this is first function");
    next()
}
var f2=(req,res,next)=>{
    console.log("this is second function");
    next()
}
var f3=(req,res,next)=>{
    console.log("this is third function");
    next()
}
var f4=(req,res,next)=>{
    console.log("this is last function");
    next()
}

app.get('/',[f1,f2,f3,f4])
var server = app
