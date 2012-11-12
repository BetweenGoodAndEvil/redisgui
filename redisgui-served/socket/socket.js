var socket = io.connect('http://127.0.0.1:8081');

socket.on('images', 
		function (data) 
			{
				var images = '<div id="pictures">';
				for(var x=0;x<data.length; x++)
					{
						var newImage = '<img src="http://127.0.0.1:8125/served/images/'+data[x]+'" alt="'+data[x]+'" id="pics" height="100" width="100"></img>';
						images = images + newImage;
					}
				document.getElementById('dataGrid').innerHTML = 'images on server = <br />'+selectSize+selectView+images+"</div>";
			}
		)
		
socket.on('audio', 
		function (data) 
			{
				handleAudioData(data);
			}
		)
socket.on('data', 
	function (q) 
		{
			var data  = q[0];
			var what = 	q[1];
			console.log(data);
			var dataGrid = document.getElementById("dataGrid");
			handleWhat(data,what);
		}
	);
socket.on('landData', 
	function (q) 
		{
			fillLand(q,landTextDiv);
		}
	);
	
socket.on('files', 
	function (data) 
		{
			console.log(data);
			var music 		=	data[0];
			var pictures 	=	data[1];
		}
	);
	
socket.on('mod', 
	function (data) 
		{
			alert("models received");
			handleModel(data);
		}
	);
	
socket.on('users', 
	function (data) 
		{
			console.log(data);
			handleUsers(data);
		}
	);	
		
socket.on('chars', 
	function (data) 
		{
			console.log(data);
			handleChars(data);
		}
	);	
	