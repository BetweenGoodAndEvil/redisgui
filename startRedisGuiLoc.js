/**
*		
*
*
**/

var startRedisWebGui	=	require("redisGui/redisGui/loc/startRedisWebGui");
var served				=	require("redisGui/redisGui/served");

function startRedisGuiLoc()
	{
		startRedisWebGui.startRedisWebGui();
		served.serveStatics();
	}

exports.startRedisGuiLoc	= startRedisGuiLoc;