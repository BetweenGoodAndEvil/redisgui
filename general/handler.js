var getFromRedis	=	require("gloomfall/redisGui/general/goToRedis");
getFromRedis		=	getFromRedis.getFromRedis;

function handle(data,socket)
	{
		var what 		=	data[0];
		var subtype		=	data[1];
		console.log("type = "+what);
		console.log("subtype = "+subtype);
		if(what == "weapons")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "npcs")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "mobs")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "quests")
			{
				getFromRedis(8,subtype,socket,what);
			}
		if(what == "consumables")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "questitems")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "misc")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "armour")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "materials")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "containers")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "salvageItems")
			{
				getFromRedis(7,subtype,socket,what);
			}
		if(what == "land")
			{
				getFromRedis(8,subtype,socket,what);
			}
	}
	
exports.handle	=	handle;