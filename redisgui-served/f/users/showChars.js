var showChars = 
	"<input value='loadChars' type='button' onclick='loadChars()'></input>";
	
function loadChars()
	{
		socket.emit('loadChars');
	}
	
function handleChars(data)
	{
		console.log(data);
		var divs = '<div id="usernames">Username</div><div id="password">passwords</div>';
		for(var x=0; x<data.length; x++)
			{
				console.log(data[x]);
				divs = divs	+	"<div id='username'>"+data[x][0]+"</div><div id='password'>"+data[x][1]+"</div>";
			}
		document.getElementById('dataGridL').innerHTML = divs;
	}
	
