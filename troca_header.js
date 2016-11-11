var http = require ('http')



var server = http.createServer (function(request, response){

  response.writeHead(200, {"Content-Type": "text/html"});

  if(request.url == '/') {
    response.write("<h1> Pagina principal</h1>");
  }

  else if (request.url == "/clientes"){
    response.write("<h1> Pagina de Clientes");
  }

  else if (request.url == "/contatos"){
    response.write("<h1> Pagina de Contatos");
  }

  else {
    response.write ("<h1> Pagina nao encontrada");
  }

  response.end();

});

server.listen(3000, function(){

console.log("App rodando na porta 3000");

})