var http=require('http');
var mydate=require('./myfile1');

http.createServer(function(req,res){

   res.writeHead(200,{'Content-Type':'text/html'});
   res.write("Date and Time is"+mydate.myDateTime()); 
   res.end();

}).listen(8080);

