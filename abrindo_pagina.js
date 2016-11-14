var http = require ('http')
	,arquivo = require('fs');


var server = http.createServer(function (req, res){

	arquivo.readFile('index.html', function (err, html){

		res.writeHead(200, {"Content-Type":"text/html"});
		res.write(html);
		res.end();	
	});
});

server.listen(3000, function(){

	console.log("Servidor rodando na porta 3000");
})
