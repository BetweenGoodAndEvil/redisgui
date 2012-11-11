var fs = require("fs");

function readFiles(data,socket,what)
	{
		console.log(data);
		readMusic(socket,what);
	}
	
function readMusic(socket,what)
	{
		fs.readdir
			(
				"./served/audio/", 
				function (err, filenames) 
					{
						if(err)
							{
								console.log(err);
								console.log('error ');
							}
						else
							{
								
								if(what == 'audio')
									{
										console.log('readAudio started');
										console.log(filenames);
										var i;
										for (i = 0; i < filenames.length; i++) 
											{
												console.log(filenames[i]);
											}
										console.log("Ready.");
										socket.emit('audio',filenames);
									}
								else
									{
										if(what == 'image')
											{
												readPictures('none',socket);
											}
										else
											{
												console.log(filenames);
												var i;
												for (i = 0; i < filenames.length; i++) 
													{
														console.log(filenames[i]);
													}
												console.log("Ready.");
												readPictures(filenames,socket);
											}

									}
							}
					}
			);
	}
	
function readPictures(filenames,socket)
	{
		console.log('readimages started');
		console.log('fileNames = '+filenames);
		var oldResult = filenames;
		fs.readdir
			(
				"./served/images/", 
				function (err, filenames) 
					{
						if(err)
							{
								console.log(err);
								console.log('error ');
							}
						else
							{
								console.log(filenames);
								var i;
								for (i = 0; i < filenames.length; i++) 
									{
										console.log(filenames[i]);
									}
								console.log("Ready.");
								if(oldResult == 'none')
									{
										socket.emit('images',filenames);
									}
								else
									{
										socket.emit('files',[oldResult,filenames]);
									}
							}
					}
			);
	}
	
exports.populate	=	readFiles;
