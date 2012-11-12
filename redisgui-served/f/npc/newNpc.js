var newNpc	=	
	"npc name 			=	<input type='text' id='npcName'></input><br />"+
	"npc race 			=	<select id='racesSelector'><option>races in here</option></select><br />"+
	"npc class 			=	<select id='classesSelector'><option>classes in here</option></select><br />"+
	"npc attackable 	=	<select id='attackable'><option>yes</option><option>no</option></select><br />"+
	"npc location 		=	<input type='text' id='locationOfNpc'	 value=''></input><br />"+
	"npc lvl  			=	<input type='text' id='npcLvl'></input><br />"+
	"npc ai lvl 		=	<select id='npcAiLvl'><option>0</option><option>1</option><option>2</option><option>3</option></select><br />"+
	"npc quest			=	<input type='button' onclick='showQBrowser()' value='selectQuest' id='qBrowser'></input><br />"+
	"npc model			=	<input type='text' id='model' ></input><input type='button' onclick='showModelBrowser()' value='selectModel' id='qBrowser'></input><br />"+
	"npc faction		=	<select id='faction'><option>pirate</option><option>stygian unlimited</option><option>more etc</option><option>even more more etc</option></select><br />"+
	"npc storyDefault	=	<input type='text' id='storyDefault' value='storyDefault'></input><br />"+
	"npc race			=	<select id='race'><option>goron</option></select><br />"+
	"<input type='button' onclick='saveNpc()' value='saveNpc'>";
	
var newNpcOnLand	=	
	"npc name 			=	<input type='text' id='npcName'></input><br />"+
	"npc race 			=	<select id='racesSelector'><option>races in here</option></select><br />"+
	"npc class 			=	<select id='classesSelector'><option>classes in here</option></select><br />"+
	"npc attackable 	=	<select id='attackable'><option>yes</option><option>no</option></select><br />"+
	"npc location 		=	<input type='text' id='locationOfNpc'	 value=''></input><br />"+
	"npc lvl  			=	<input type='text' id='npcLvl'></input><br />"+
	"npc ai lvl 		=	<select id='npcAiLvl'><option>0</option><option>1</option><option>2</option><option>3</option></select><br />"+
	"npc quest			=	<input type='button' onclick='showQBrowser()' value='selectQuest' id='qBrowser'></input><br />"+
	"npc model			=	<input type='text' id='model' ></input><input type='button' onclick='showModelBrowser()' value='selectModel' id='qBrowser'></input><br />"+
	"npc faction		=	<select id='faction'><option>pirate</option><option>stygian unlimited</option><option>more etc</option><option>even more more etc</option></select><br />"+
	"npc storyDefault	=	<input type='text' id='storyDefault' value='storyDefault'></input><br />"+
	"npc race			=	<select id='race'><option>goron</option></select><br />"+
	"<input type='button' onclick='saveNpcOnLand()' value='saveNpcOnLand'>";
	
function showQBrowser()
	{
		alert("entering q browser");
	}
	
function saveNpc()
	{
		var npcName 		= document.getElementById("npcName").value;
		var racesSelector 	= document.getElementById('racesSelector').value;
		var classesSelector = document.getElementById('classesSelector').value;
		var attackable 		= document.getElementById('attackable').value;
		var location 		= document.getElementById('locationOfNpc').value;
		var npcLvl 			= document.getElementById('npcLvl').value;
		var npcAiLvl 		= document.getElementById('npcAiLvl').value;
		var storyDefault 	= document.getElementById('storyDefault').value;
		var model 			= document.getElementById('model').value;
		var faction 		= document.getElementById('faction').value;
		var race 			= document.getElementById('race').value;
		var type 			= selected2;
		alert(type);
		socket.emit('newN',[type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model]);
	}
	
function saveNpcOnLand()
	{
		var landName 		= document.getElementById("enterLandNamez").value;
		var npcName 		= document.getElementById("npcName").value;
		var racesSelector 	= document.getElementById('racesSelector').value;
		var classesSelector = document.getElementById('classesSelector').value;
		var attackable 		= document.getElementById('attackable').value;
		var location 		= document.getElementById('locationOfNpc').value;
		var npcLvl 			= document.getElementById('npcLvl').value;
		var npcAiLvl 		= document.getElementById('npcAiLvl').value;
		var storyDefault 	= document.getElementById('storyDefault').value;
		var model 			= document.getElementById('model').value;
		var faction 		= document.getElementById('faction').value;
		var race 			= document.getElementById('race').value;
		var type 			= selected2;
		alert(type);
		socket.emit('newNoL',[type,npcName,racesSelector,classesSelector,attackable,location,npcLvl,npcAiLvl,storyDefault,faction,race,model,landName]);
	}
	
var npcTextDiv = 
		'<div id="npcPropertiesDiv">'+
			'<div id="npcNameProp">name</div>'+ 
			'<div id="npcRaceProp">race</div>'+ 
			'<div id="npcClassProp">clas</div>'+ 
			'<div id="npcAttackableProp">attackable</div>'+ 
			'<div id="npcLocationProp">location</div>'+ 
			'<div id="npcLvlProp">lvl</div>'+ 
			'<div id="npcAiLvlProp">AiLvl</div>'+ 
			'<div id="npcStoryDefaultProp">storyDefault</div>'+ 
			'<div id="npcModelProp">model</div>'+ 
			'<div id="npcFactionProp">faction</div>'+ 
			'<div id="npcTypeProp">type</div>'+
		'</div>'+
		'<div id="npcPropertiesDivz">'+
			'<div id="npcNamePropz"></div>'+ 
			'<div id="npcRacePropz"></div>'+ 
			'<div id="npcClassPropz"></div>'+ 
			'<div id="npcAttackablePropz"></div>'+ 
			'<div id="npcLocationPropz"></div>'+ 
			'<div id="npcLvlPropz"></div>'+ 
			'<div id="npcAiLvlPropz"></div>'+ 
			'<div id="npcStoryDefaultPropz"></div>'+ 
			'<div id="npcModelPropz"></div>'+ 
			'<div id="npcFactionPropz"></div>'+ 
			'<div id="npcTypePropz"></div>'+
		'</div>';
	
function fillNpcs(dataz,textdiv,lr)
	{
		console.log('dataz entering npc = ');
		console.log(dataz);
		var edit   			= "<input type='button' value='editNpc' onclick='makeNpc(\"r\",newNpcOnLand)'></input>"
		var newNpcCreate 	= "<input type='button' value='makeNpc' onclick='makeNpc(\"r\",newNpcOnLand)'></input>"
		var deleteNpc 		= "<input type='button' value='delete' onclick='makeDelete(\"r\",newNpcOnLand)'></input>"
		if(lr == 'l')
			{
				document.getElementById("dataGridL").style.width 		= '100%';
				document.getElementById("dataGridL").innerHTML 			= textdiv;
				document.getElementById("dataGridR").style.display 		= 'none';
				hadleRestOfFill(dataz);
			}
		else
			{
				document.getElementById("dataGridR").innerHTML 			=	 edit+newNpcCreate+deleteNpc+"<br />"+textdiv;
				document.getElementById("dataGridR").style.display 		=	'inline';
				dataz = oneNpcLandArray;
				console.log(oneNpcLandArray);
				console.log(dataz);
				hadleRestOfFill2(dataz);
		}
	}

function hadleRestOfFill(dataz)
	{
		var name = document.getElementById("npcNamePropz");
		var race = document.getElementById("npcRacePropz");
		var clas = document.getElementById("npcClassPropz");
		var attackable = document.getElementById("npcAttackablePropz");
		var location = document.getElementById("npcLocationPropz");
		var lvl = document.getElementById("npcLvlPropz");
		var ailvl = document.getElementById("npcAiLvlPropz");
		var defaultStory = document.getElementById("npcStoryDefaultPropz");
		var model = document.getElementById("npcModelPropz");
		var faction = document.getElementById("npcFactionPropz");
		var type = document.getElementById("npcTypePropz");
			
		for(var x=0; x<dataz.length; x++)
			{
				var data  = JSON.parse(dataz[x]);
				console.log(data);
				console.log(x);
				name.innerHTML 			= name.innerHTML			+data.name+"<br />";
				race.innerHTML 			= race.innerHTML			+data.race+"<br />";
				clas.innerHTML 			= clas.innerHTML			+data.clas+"<br />";
				attackable.innerHTML 	= attackable.innerHTML		+data.attackable+"<br />";
				location.innerHTML 		= location.innerHTML		+data.location+"<br />";
				lvl.innerHTML 			= lvl.innerHTML				+data.lvl+"<br />";
				ailvl.innerHTML 		= ailvl.innerHTML			+data.ailvl+"<br />";
				defaultStory.innerHTML 	= defaultStory.innerHTML	+data.storyDefault+"<br />";
				model.innerHTML 		= model.innerHTML			+data.model+"<br />";
				faction.innerHTML 		= faction.innerHTML			+data.faction+"<br />";
				type.innerHTML 			= type.innerHTML			+data.type+"<br />";
			}
	}
	
function hadleRestOfFill2(dataz)
	{
		var name = document.getElementById("npcNamePropz");
		var race = document.getElementById("npcRacePropz");
		var clas = document.getElementById("npcClassPropz");
		var attackable = document.getElementById("npcAttackablePropz");
		var location = document.getElementById("npcLocationPropz");
		var lvl = document.getElementById("npcLvlPropz");
		var ailvl = document.getElementById("npcAiLvlPropz");
		var defaultStory = document.getElementById("npcStoryDefaultPropz");
		var model = document.getElementById("npcModelPropz");
		var faction = document.getElementById("npcFactionPropz");
		var type = document.getElementById("npcTypePropz");
			
		for(var x=0; x<dataz.length; x++)
			{
				var data  = dataz[x];
				console.log(data);
				console.log(x);
				name.innerHTML 			= name.innerHTML			+data.name+"<br />";
				race.innerHTML 			= race.innerHTML			+data.race+"<br />";
				clas.innerHTML 			= clas.innerHTML			+data.clas+"<br />";
				attackable.innerHTML 	= attackable.innerHTML		+data.attackable+"<br />";
				location.innerHTML 		= location.innerHTML		+data.location+"<br />";
				lvl.innerHTML 			= lvl.innerHTML				+data.lvl+"<br />";
				ailvl.innerHTML 		= ailvl.innerHTML			+data.ailvl+"<br />";
				defaultStory.innerHTML 	= defaultStory.innerHTML	+data.storyDefault+"<br />";
				model.innerHTML 		= model.innerHTML			+data.model+"<br />";
				faction.innerHTML 		= faction.innerHTML			+data.faction+"<br />";
				type.innerHTML 			= type.innerHTML			+data.type+"<br />";
			}
	}
	
function makeNpc(rl,what)
	{
		if(rl == "r")
			{
				document.getElementById('dataGridR').innerHTML = what;
			}
		else
			{
				document.getElementById('dataGridL').innerHTML = what;
			}
			
	}