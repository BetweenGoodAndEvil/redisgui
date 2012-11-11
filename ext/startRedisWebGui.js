/**
*
*
*/

var characterWebServer 		=	require('http');
var fs 						=	require('fs');
var webServerPort			=	"8081";

function startRedisWebGui()
	{
		startGuiWebserver()
	}

function onRequest(request, response) 
	{
		fs.readFile(__dirname + '/guiserver.html',
		function (err, data) 
			{
				if (err) 
					{
						response.writeHead(500);
						return response.end('Error loading guiserver.html');
					}
				response.writeHead(200);
				response.end(data);
			});
		console.log('webserver started and listening on 1332');
	}

function startGuiWebserver()
	{
		characterWebServer.createServer
			(
				onRequest
			).listen(webServerPort);
	}
	
exports.startRedisWebGui	=	startRedisWebGui;