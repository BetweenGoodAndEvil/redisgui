var npc = require('gloomfall/gameServer/gameMech/mob/npc');
var land = require('gloomfall/gameServer/gameMech/world/land');
var redis = require('redis');
var redisClient = redis.createClient();
redisClient.select(7);

var redisClient1 = redis.createClient();
redisClient1.select(8);

function handleNpc(socket,data)
	{
		var type 			= data[0];
		var npcName 		= data[1];
		var racesSelector 	= data[2];
		var classesSelector = data[3];
		var attackable 		= data[4];
		var location 		= data[5];
		var npcLvl 			= data[6];
		var npcAiLvl 		= data[7];
		var storyDefault 	= data[8];
		var faction 		= data[9];
		var race 			= data[10];
		var model 			= data[11];
		console.log(type);
		console.log(npcName);
		console.log(racesSelector);
		console.log(classesSelector);
		console.log(location);
		console.log(npcLvl);
		console.log(npcAiLvl);
		console.log(storyDefault);
		console.log(faction);
		console.log(race);
		console.log(model);
		handleIt(type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model);
	}

function handleIt(type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model)
	{
		handleSet(type,npcName);
		jsonIt(npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,type,race,model);
	}

function handleSet(type,npcName)
	{
		redisClient.sadd
			(
				type,
				npcName,
				function(err,value)
					{
						if(err)
							{
								console.log(err);
							}
						else
							{
								console.log('succesfully put '+npcName + ' on '+type);
							}
					}
			)	
	}
	
function jsonIt(npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,type,race,faction, model)
	{
		var newNpc =new npc.npc(npcName,type,race,'clas',attackable,location,npcAiLvl,npcLvl,'dialogue','disease','areaStoryL','areaStoryR',storyDefault,faction,model);
		var newestNpc = JSON.stringify(newNpc)
		handleNpc2(npcName,newestNpc);
	}
	
function handleNpc2(npcName,newNpc)
	{
		redisClient.set
			(
				npcName,
				newNpc,
				function(err,value)
					{
						if(err)
							{
								console.log(err);
							}
						else
							{
								console.log('succesfully put '+npcName + ' on DB');
							}
					}
			)
	}
	
function handleNpcOnLand(socket,data)
	{
		var type 			= data[0];
		var npcName 		= data[1];
		var racesSelector 	= data[2];
		var classesSelector = data[3];
		var attackable 		= data[4];
		var location 		= data[5];
		var npcLvl 			= data[6];
		var npcAiLvl 		= data[7];
		var storyDefault 	= data[8];
		var faction 		= data[9];
		var race 			= data[10];
		var model 			= data[11];
		var landName 		= data[12];
		console.log(type);
		console.log(npcName);
		console.log(racesSelector);
		console.log(classesSelector);
		console.log(location);
		console.log(npcLvl);
		console.log(npcAiLvl);
		console.log(storyDefault);
		console.log(faction);
		console.log(race);
		console.log(model);
		console.log(landName);
		handleLandSet(landName,type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model);
	}
	
function handleLandSet(landName,type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model)
	{
		redisClient1.get
			(
				landName,
				function(err,val)
					{
						if(err)
							{
							
							}
						else
							{
								handleLand(landName,val,type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model);
							}
					}
			)
	}
	
function handleLand(landName,val,type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model)
	{
		console.log(val);
		var landObject = JSON.parse(val);
		var newLand = new land.land(landObject.name,landObject.description,landObject.owners,landObject.map,model,landObject.port,landObject.continent,landObject.npcs,landObject.lvl);
		var newNpc =new npc.npc(npcName,type,race,'clas',attackable,location,npcAiLvl,npcLvl,'dialogue','disease','areaStoryL','areaStoryR',storyDefault,faction,model);
		newLand.npcs.push(newNpc);
		var newParsedLand = JSON.stringify(newLand);
		redisClient1.set
			(
				landName,
				newParsedLand,
				function(err,value)
					{
						if(err)
							{
								console.log(err);
							}
						else
							{
								console.log('succesfully put '+landName + ' on DB');
							}
					}
			)
	}
	
exports.handleNpc			=handleNpc;	
exports.handleNpcOnLand		=handleNpcOnLand;	