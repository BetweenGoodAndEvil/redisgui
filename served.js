var http = require('http');
var path = require('path');
var fs = require('fs');
 
function serveStatics()
	{
		http.createServer(function (request, response) {
		 
			console.log('request starting...');
			 
			var filePath = '.' + request.url;
			if (filePath == './')
				filePath = './redisgui-served/';
			 
			path.exists(filePath, function(exists) {
			 
				if (exists) {
					fs.readFile(filePath, function(error, content) {
						if (error) {
							response.writeHead(500);
							response.end();
						}
						else {
							response.writeHead(200, { 'Content-Type': 'image/gif' });
							response.writeHead(200, { 'Access-Control-Allow-Origin': '*'});
							response.end(content, 'utf-8');
						}
					});
				}
				else {
					response.writeHead(404);
					response.end();
				}
			});
			 
		}).listen(8125);
		 
		console.log('File Server running at http://127.0.0.1:8125/');
	}

exports.serve				=		serveStatics;