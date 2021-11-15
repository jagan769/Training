var http = require('http');
var Q3= require('./Q3');

const a1=["Archa","Raj","Ambili"];
const a2=["a","b","c"];


http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("sum: "+Q3.sumofTwo(20,20));
    res.write("<br>Array: "+Q3.joinarrays(a1,a2));
    res.end();
}).listen(8080);
