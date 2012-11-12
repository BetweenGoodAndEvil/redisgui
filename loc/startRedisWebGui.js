var handlerz		=	require("redisGui/redisGui/general/handler");
var createItem		=	require("redisGui/redisGui/general/createItem");
var handleUsers		=	require("redisGui/redisGui/general/handleUsers");
var handleChars		=	require("redisGui/redisGui/general/handleChars");
var handleMod		=	require("redisGui/redisGui/general/handleMod");
var handleNpc		=	require("redisGui/redisGui/general/handleNpc");
var handleLand		=	require("redisGui/redisGui/general/land/handleLand");
var formidable		=	require("formidable");
var sys				=	require("sys");

var app 			=	require('http').createServer(handler);
var io 				=	require('socket.io').listen(app);
var fs 				=	require('fs');
var populate 		=	require("redisGui/redisGui/general/readfiles");

app.listen(8081);

function startRedisWebGui()
	{
		//startGuiWebserver()
	}


function handler (req, res) 
	{
		 if (req.url == '/' && req.method.toLowerCase() == 'post')
			{
				// parse a file upload
				var form = new formidable.IncomingForm();
				form.parse
				(
					req, 
					function(err, fields, files) 
						{
							if(err)
								{
									console.log(err);
								}
							else
								{
									console.log(files);
									console.log(files.upload.type);
									var path = "resources/models/";
									if(files.upload.type=="image/gif"||"image/png"||"image/jpg"||"image/bmp")
										{
											path = "served/images/";
											console.log("uploading images");
										}
									else									
										{
											if(files.upload.type=="audio/mp3"||"audio/wav"||"audio/ogg")
												{
													path = "served/audio/";
													console.log("uploading audio")
												}
											else
												{
													console.log("uploading models")
												}
										}
									fs.rename
										(
											files.upload.path,
											path+files.upload.name,
											function(err) 
												{
													if (err)
														{
															fs.unlink("resources/models/"+files.upload.name);
															fs.rename("resources/error/"+files.upload.name);
															serveIt(res);
														}
													else
														{
															serveIt(res);
														}
												}
										);
								}
						}
				);
			}
		else
			{
				serveIt(res);
			}
	}

function serveIt(res)
	{
		fs.readFile
			(
				__dirname +
				'/guiserver.html',
			function (err, data) 
				{
					if (err) 
						{
							res.writeHead(500);
							return res.end('Error loading guiserver.html');
						}

					res.writeHead(200);
					res.end(data);
				}
			);
	}
	
io.sockets.on
	('connection', 
		function (socket) 
		{
			socket.on
				('get', 
					function (data) 
						{
							console.log('handling get for items');
							handlerz.handle(data,socket);
						}
				);
			socket.on
				('mak', 
					function (data) 
						{
							createItem.create(data,socket);
						}
				);
			socket.on
				('pop', 
					function (data) 
						{
							populate.populate(data,socket);
						}
				);
			socket.on
				('ima', 
					function (data) 
						{
							populate.populate(data,socket,'image');
						}
				);
			socket.on
				('au', 
					function (data) 
						{
							populate.populate(data,socket,'audio');
						}
				);
			
			socket.on('loadUsers', 
				function() 
					{
						handleUsers.handleUsers(socket);
					}
				);
				
			socket.on('loadChars', 
				function() 
					{
						console.log('handling get for chars');
						handleChars.handleChars(socket);
					}
				);		
			socket.on('mod', 
				function() 
					{	
						console.log('model get received');
						handleMod.handleMod(socket);
					}
				);		
			socket.on('newN', 
				function(data) 
					{	
						console.log('npc set received');
						handleNpc.handleNpc(socket,data);
					}
				);
			socket.on('newNoL', 
				function(data) 
					{	
						console.log('npc set received');
						handleNpc.handleNpcOnLand(socket,data);
					}
				);
			socket.on('saveNewLand', 
				function(data) 
					{	
						console.log('new land set received');
						handleLand.handleNewLand(socket,data);
					}
				);
			socket.on('saveeditedLand', 
				function(data) 
					{	
						console.log('edit land set received');
						handleLand.handleEditedLand(socket,data);
					}
				);
			socket.on('getLand', 
				function(data) 
					{	
						console.log('get land received');
						handleLand.geLandFromRedis(socket,data);
					}
				);
			socket.on('emptyplayers', 
				function(data) 
					{	
						console.log('empty land received');
						handleLand.emptyLand(socket,data);
					}
				);
		}
	);

	
exports.startRedisWebGui	=	startRedisWebGui;	