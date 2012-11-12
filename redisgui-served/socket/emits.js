function getImages()
	{
		socket.emit('ima');
	}
	
function getAudio()
	{
		socket.emit('au');
	}
	
function sendWhat(what)
	{
		socket.emit('get', what);
		/* socket.on('news', function (data) 
			{
			} */
	}
	
	
function populate()
	{
		socket.emit('pop');
	}
	
function getSelected()
	{
		var selected	=	document.getElementById(selected1);
		selected  		=	selected.value;
		socket.emit("get",[selected0,selected]);
		alert(selected0, selected);
	}
	
function getContinentSelected()
	{
		alert('started getContinentSelect');
		var selected	=	document.getElementById(selected1);
		selected  		=	selected.value;
		socket.emit("getLand",[selected0,selected]);
		alert('geting land data for the continent: '+selected);
	}
	
function getModels()
	{
		alert('geting models');
		socket.emit("mod");
	}