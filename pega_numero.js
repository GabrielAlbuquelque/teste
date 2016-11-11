
var http = require("http");
var url = require("url");





http.createServer(function(request, response) {

     response.writeHead(200, {"Content-Type": "text/plain"});

     
     var params = url.parse(request.url, true).query;
     var num = params.number;

     response.write("Hello World \n");
     response.write(num);
     response.end();

   
}).listen(3000);


console.log("Testando REST... Porta 3000");
