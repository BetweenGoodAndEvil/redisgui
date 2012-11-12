var images	=	'<input type="button" onclick="getImages()" value="images"></input>';
var audio	=	'<input type="button" onclick="getMAudio()" value="audio"></input>';
var upload	=	'<input type="file" onclick="upload()" value="upload"></input>';
	
var selectSize=	
	'5% <input id="slide" type="range"'+
	'min="5" max="200" step="5" value="100"'+
	'onchange="updateSlider(this.value)" />'+
	'200%'+
	'<div id="chosen">100</div>';
	
var selectView	=
	'<input type="button"'+
	'value="listView"'+
	'id="listView"'+
	'onclick=setListView() />'+
	'</input>'+	
	'<input type="button"'+
	'value="normalView"'+
	'id="normalView"'+
	'onclick=setNormalView() />'+
	'</input>';
	
var view = 'normal';	
	
function setListView()
	{
		if(view == 'list')
			{}
		else
			{
				
			}
	}	
	
function setNormalView()
	{
		if(view == 'normal')
			{}
		else
			{
			
			}
	}
	
function updateSlider(slideAmount)
	{
		//get the element
		var display = document.getElementById("chosen");
		//show the amount
		display.innerHTML=slideAmount;
		
		//get the element
		for(x=0; x<document.getElementById('pictures').children.length; x++)
			{
				if(document.getElementById('pictures').children[x].id=="pics")
					{
						var pic = document.getElementById('pictures').children[x];
						//set the dimensions
						pic.style.width=slideAmount+"%";
						pic.style.height=slideAmount+"%";
					}
			}
		
	}
	
	
		
	var playerControls	=	
		'<div>'+
			'<button onclick="document.getElementById(\'player\').play()">Play</button>'+
			'<button onclick="document.getElementById(\'player\').pause()">Pause</button>'+
			'<button onclick="document.getElementById(\'player\').volume+=0.1">Volume Up</button>'+
			'<button onclick="document.getElementById(\'player\').volume-=0.1">Volume Down</button>'+
		'</div> ';
		
function selectOtherAudio()
	{
		audioWhere = 'r';
		getAudio();
	}		

function getMAudio()
	{
		audioWhere = 'l';
		getAudio();
	}
	
function handleAudioData(data)
	{
			var audioData = 'audio on server = <br />';
			for(var x=0; x<data.length; x++)
				{
					audioData = audioData+
					data[x]+
					'<audio controls="controls">'+
						'<source src="http://127.0.0.1:8125/served/audio/'+data[x]+'" >'+
						'Your browser does not support the audio element.'+
					'</audio>';
				}
			if(audioWhere == 'r')
				{
					document.getElementById('dataGridR').innerHTML = audioData+playerControls;
					document.getElementById('dataGridR').style.display = 'inline';
				}
			else
				{
					document.getElementById('dataGridL').innerHTML = audioData+playerControls;
				}
	}