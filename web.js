var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response)
 {
  //response.send('Hello World2!');
  ReadFiles();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
ReadFiles();
});

var fs = require('fs');

/*fs.readFile('index.html','utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});*/
var buf =new Buffer(256);
function ReadFiles()
{
var len=buf.write(fs.readFileSync('index.html','utf8'),'utf-8');
response.send(buf.toString('utf8',0,len));
}
