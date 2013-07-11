var express = require('express');

var app = express.createServer(express.logger());
var fs=require('fs');
var buf =new Buffer(10240);
app.get('/', function(request, response)
 {
  //response.send('Hello World2!');
//  ReadFiles(response);


var len=buf.write(fs.readFileSync('index.html','utf8'),'utf-8');
response.send(buf.toString('utf8',0,len));



});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
//ReadFiles();
});

/*fs.readFile('index.html','utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});*/


//buf.write(fs.readFileSync('index.html','utf8'),'utf-8');
//console.log(buf.toString('utf8',0));
var len=buf.write(fs.readFileSync('index.html','utf8'),'utf-8');
console.log(buf.toString('utf8',0,len));
