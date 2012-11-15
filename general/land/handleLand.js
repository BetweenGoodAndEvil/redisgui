var npc = require('gloomfall/gameServer/gameMech/mob/npc');
var land = require('gloomfall/gameServer/gameMech/world/land');
var redis = require('redis');
var redisClient1 = redis.createClient();
redisClient1.select(8);

function handleNewLand(socket,data)
	{
		var landName 	= data[0];
		var size 		= data[1];
		var model 		= data[2];
		var soundDiv1z 	= data[3];
		var owners 		= data[4];
		var sound 		= data[5];
		var description = data[6];
		var lvl 		= data[7];
		var l 			= data[8];
		var t 			= data[9];
		var r 			= data[10];
		var b 			= data[11];
		var continent 	= data[12];
		console.log('landName = '+ landName,size,model,soundDiv1z,owners,sound,description,lvl,l,t,r,b,'continent = '+continent);
		setNewLand(landName,size,model,soundDiv1z,owners,sound,description,lvl,l,t,r,b,continent);
	}

function emptyLand(socket,data)
	{
		redisClient1.get
			(
				data,
				function(err,value)
					{
						if(err)
							{
								console.log('error');
								console.log(err);
							}
						else
							{
								console.log('handling emptying for '+data);
								handleEmpty(value,data);
							}
					}
			)
	}
	
function handleEmpty(value,landName)
	{
		console.log(value);
		var land = JSON.parse(value);
		land.players = new Array();
		var newLand = JSON.stringify(land);
		redisClient1.set
			(
				landName,
				newLand,
				function(err,value)
					{
						if(err)
							{
								console.log('error');
								console.log(err);
							}
						else
							{
								console.log('succes');
							}
					}
			)
	}	
	
function setNewLand(landName,size,model,soundDiv1z,owners,sound,description,lvl,l,t,r,b,continent)
	{
		var newLand = new land.land(landName,description,owners,'',model,'2000',continent,soundDiv1z,lvl);
		var stringLand = JSON.stringify(newLand);
		redisClient1.set
			(
				landName,
				stringLand,
				function(err,value)
					{
						if(err)
							{
								console.log("error setting land");
								console.log(err);
							}
						else
							{
								console.log("succes setting land")
							}
					}
			);
		redisClient1.sadd
			(
				continent,
				landName,
				function(err,value)
					{
						if(err)
							{
								console.log("err setting continent");
								console.log(err);
							}
						else
							{
								console.log("succes setting continent")
							}
					}
			);
	}
	
function handleEditedLand(socket,data)
	{
		var landName 	= data[0];
		var size 		= data[1];
		var model 		= data[2];
		var soundDiv1z 	= data[3];
		var owners 		= data[4];
		var sound 		= data[5];
		var description = data[6];
		var lvl 		= data[7];
		var l 			= data[8];
		var t 			= data[9];
		var r 			= data[10];
		var b 			= data[11];
		var continent 	= data[12];
		console.log('model = '+model);
		setEditedLand(landName,size,model,soundDiv1z,owners,sound,description,lvl,l,t,r,b,continent);
	}

function setEditedLand(landName,size,model,soundDiv1z,owners,sound,description,lvl,l,t,r,b,continent)
	{
		var newLand = new land.land(landName,description,owners,'',model,'2000',continent,soundDiv1z,lvl);
		var stringLand = JSON.stringify(newLand);
		redisClient1.set(landName,stringLand);
		redisClient1.sadd(continent,landName);
	}
	
function geLandFromRedis(socket,data)
	{	
		console.log(data);
		var what = data[1];
		var type = data[0];
		redisClient1.SMEMBERS(
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
							getAll(value,socket,type);
						}
				}
			);	
	}
	
function getAll(value,socket,type)
	{
		var answer = new Array();
		var amountInArray = value.length;
		for(var x=0; x<amountInArray; x++)
			{
				console.log(x);
				var valueQ	=	value[x];
				console.log('valueQ = '+valueQ);
				console.log('                    BREAK            ');
				fetchData(valueQ,socket,type,answer,amountInArray);
			}
	}
	
function fetchData(valueQ,socket,type,answer,amountInArray)
	{
		redisClient1.get
			(
				valueQ,
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
								console.log(newValue);
								answer.push(newValue);
								if(answer.length == amountInArray)
									{
										console.log(amountInArray);
										console.log(answer.length);
										socket.emit("landData",[[answer],[type]]);
									}
							}
					}
			)
	}
	
	
exports.geLandFromRedis				=	geLandFromRedis;	
exports.handleEditedLand			=	handleEditedLand;	
exports.handleNewLand				=	handleNewLand;	
exports.emptyLand					=	emptyLand;	