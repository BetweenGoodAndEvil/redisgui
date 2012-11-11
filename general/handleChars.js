var redis = require('redis');
var redisClient = redis.createClient();
redisClient.select(1);

function handleChars(socket)
	{
		console.log('handleUsers started');
		redisClient.keys
			(
				"*",
				function(e,v)
					{
						if(e)
							{
								console.log(e);
								console.log('eroor!!!');
							}
						else
							{
								console.log('value = '+v);
								handleIndivUser(v,socket);
							}
					}
			)
	}
	
function handleIndivUser(v,socket)
	{
		var newArray= new Array();
		var nameLength = v.length;
		for(x=0; x<v.length; x++)
			{
				var username = v[x];
				console.log('username = '+username);
				redisClient.get
					(
						v[x],
						function(error,password)
							{
								if(error)
									{
									
									}
								else
									{
										console.log('succes = '+password);
										var q = new Array();
										q.push(username);
										q.push(password);
										newArray.push(q);
										console.log()
										//console.log(newArray);
										console.log('x = '+x);
										console.log('userArray = '+v.length);
										if(x == v.length)
											{
												socket.emit('chars',newArray);
											}
									}
							}
					)
			}
	}
	
exports.handleChars	=	handleChars;	