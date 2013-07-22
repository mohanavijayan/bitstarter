var express = require('express');

var app = express.createServer(express.logger());
var fs=require('fs');
var htmlfile="index.html";

//var buf =new Buffer(10240);
app.get('/', function(request, response)
 {
  //response.send('Hello World2!');
//  ReadFiles(response);


//var len=buf.write(fs.readFileSync('index.html','utf8'),'utf-8');
//response.send(buf.toString('utf8',0,len));

var html=fs.readFileSync(htmlfile).toString();
response.send(html);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
//ReadFiles();
});


//buf.write(fs.readFileSync('index.html','utf8'),'utf-8');
//console.log(buf.toString('utf8',0));
//var len=buf.write(fs.readFileSync('index.html','utf8'),'utf-8');
//console.log(buf.toString('utf8',0,len));

