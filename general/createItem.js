var redis = require('redis');
var redisClient = redis.createClient();
var item					=	require("gloomfall/gameServer/gameEngine/socketStart/item/item");

function handleCreate(data,socket)
	{
		var what 		=	data[0];
		var subtype		=	data;
		console.log(what);
		console.log(subtype);
		if(what == "weapons")
			{
				create(7,subtype,socket);
			}
		if(what == "npcs")
			{
				create(7,subtype,socket);
			}
		if(what == "mobs")
			{
				create(7,subtype,socket);
			}
		if(what == "quests")
			{
				create(7,subtype,socket);
			}
		if(what == "consumables")
			{
				create(7,subtype,socket);
			}
		if(what == "questitems")
			{
				create(7,subtype,socket);
			}
		if(what == "misc")
			{
				create(7,subtype,socket);
			}
		if(what == "armour")
			{
				create(7,subtype,socket);
			}
		if(what == "materials")
			{
				create(7,subtype,socket);
			}
		if(what == "containers")
			{
				create(7,subtype,socket);
			}
		if(what == "salvageItems")
			{
				create(7,subtype,socket);
			}
		if(what == "land")
			{
				create(8,subtype,socket);
			}
	}

function create(dbnumber,data,socket)
	{
		console.log(data);
		var selected0 = data[0];
		var selected2 = data[1];
		var name = data[2];
		var value = data[3];
		var salvegeables = data[4];
		var description = data[5];
		var size = data[6];
		var options = data[7];
		var baseSwing = data[8];
		var stats = data[9];
		var sound = data[10];
		var quest = data[11];
		var image = data[12];
		var model = data[13];
		var animations = data[14];
		var baseDmg = data[15];
		var baseDef = data[16];
		console.log("selected2 = "+selected2);
		createItOnDb(dbnumber,selected0,selected2,name,value,salvegeables,description,size,options,baseSwing,stats,sound,quest,image,model,animations,baseDmg,baseDef);
	}

function createItOnDb(dbnumber,selected0,selected2,name,value,salvegeables,description,size,options,baseSwing,stats,sound,quest,image,model,animations,baseDmg,baseDef)
	{
		createItem(dbnumber,selected0,selected2,name,value,salvegeables,description,size,options,baseSwing,stats,sound,quest,image,model,animations,baseDmg,baseDef);
		console.log(selected0);
		console.log("createItOnDb- selected2 = "+selected2);
	}

function createItem(dbnumber,selected0,selected2,name,value,salvegeables,description,size,options,baseSwing,stats,sound,quest,image,model,animations,baseDmg,baseDef)
	{
		console.log("createItem - selected2 = "+selected2);
		redisClient.select(dbnumber);
		var newItem = new item.item(selected2,name,value,salvegeables,description,size,options,baseSwing,stats,sound,quest,image,model,animations,baseDmg,baseDef);
		newItem = JSON.stringify(newItem);
		redisClient.get
			(
				"amount",
				function(err,valuez)
					{
						if(err)
							{
								console.log(err);
								console.log("err");
							}
						else
							{
								redisClient.set
									(
										valuez,
										newItem
									)
								var newValue = parseInt(valuez);
								newValue = newValue+1;	
								redisClient.set
									(
										"amount",
										newValue
									)
								
								createSet(selected2,valuez);
							}
					}
			)
		
	}
	
function createSet(selected2,name)
	{
		console.log("creating a set for "+selected2);
		redisClient.SADD
			(
				selected2,
				name
			)
	}
	
exports.create = handleCreate;