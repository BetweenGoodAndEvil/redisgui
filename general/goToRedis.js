var redis = require("redis")
var redisClient	=	redis.createClient();

function getFromRedis(db,what,socket,type)
	{	
		console.log('type='+type);
		redisClient.select(db);
		redisClient.SMEMBERS(
			what,
			function(err,value)
				{
					if(err)
						{
							console.log("error");
							console.log(err);
						}
					else
						{
							console.log("set");
							console.log("subtype for rhe SMEMBERS - "+what);
							console.log("members: "+value);
							getAll(db,value,socket,type);
						}
				}
			);	
	}
	
function getAll(db,value,socket,type)
	{
		redisClient.select(db);
		var answer = new Array();
		var amountInArray = value.length;
		for(var x=0; x<amountInArray; x++)
			{
				console.log(x);
				console.log('valueQ = '+value[x]);
				console.log('                    BREAK            ');
				var valueQ	=	value[x];
				redisClient.get
					(
						value[x],
						function(err,newValue)
							{
								if(err)
									{
										console.log(err);
										console.log("error");
									}
								else
									{
										console.log("value we do a get for: "+valueQ);
										console.log("type = "+type);
										answer.push(newValue);
										if(answer.length == amountInArray)
											{
												console.log(amountInArray);
												console.log(answer.length);
												socket.emit("data",[answer,type]);
											}
									}
							}
					)
			}
	}


exports.getFromRedis	=	getFromRedis;
