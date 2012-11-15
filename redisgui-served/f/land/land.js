var landDiv				=	"<select name=\"selectLand\" id=\"selectLand\" onchange='getSelected()'>"+
								"<option value=\"shom\">		shom			</option>"+
								"<option value=\"someContinent\">		someContinent3			</option>"+
								"<option value=\"someContinent\">		someContinent2			</option>"+
								"<option value=\"someContinent\">		someContinent			</option>"+
							"</select>";
		
var audioWhere = '';		
var landsWhere = '';		
var oneNpcLandArray = '';		

function returnLandText(landName,description,sound,size,model,owners,npcs,mobs,lvl,l,r,t,b)
	{
		console.log('npcs entering the landtext');
		console.log(npcs[0]);
		oneNpcLandArray = npcs;
		if(!landName){landName="";}
		if(!description){description="";}
		if(!sound){sound="";}
		if(!size){size="";}
		if(!model){model="";}
		if(!owners){owners="";}
		if(!npcs){npcs="";}
		if(!mobs){mobs="";}
		if(!lvl){lvl="";}
		if(!l){l="";}
		if(!r){r="";}
		if(!t){t="";}
		if(!b){b="";}
		var landData = 
		"landName 		=	<input type='text' 		id='enterLandNamez' 	value='"+landName+"'></input><br />"+
		"discription 	=	<input type='text' 		id='descriptionDiv1z' 	value='"+description+"'></input><br />"+
		"lands size		=	<input type='text' 		id='sizeDiv1z' 			value='"+size+"'></input><br />"+
		"lands sound	=	<input type='text' 		id='soundDiv1z' 		value='"+sound+"'></input><input type='button' onclick='selectOtherAudio()' value='choose other audio'></input><br />"+
		"lands model	=	<input type='text'	 	id='modelDiv1z' 		value='"+model+"'  maxlength=\'2000000\'></input><br /><br />"+
		"lands owners	=	<input type='text' 		id='owners1z' 			value='"+owners+"'></input><br />"+
		"lands npcs		=	<input type='button'	id='npcs' 				value='showNpcs' onclick='showNpcs(\"\")'></input><br />"+
		"lands mobs		=	<input type='button'	id='mobs' 				value='showMobs' onclick='showMobs(\""+mobs+"\")'></input><br />"+
		"lands lvl		=	<input type='text'		id='lvlz' 				value='"+lvl+"'></input><br />"+
		"lands top		=	<input type='text'		id='lTop' 				value='land on top'>	</input><input type='button' 	id='topz' 				value='pick land' onclick='showLands(\""+t+"\")'></input><br />"+
		"lands bot		=	<input type='text'		id='lBot' 				value='land on Bot'>	</input><input type='button'	id='botz' 				value='pick land' onclick='showLands(\""+b+"\")'></input><br />"+
		"lands left		=	<input type='text'		id='lLeft' 				value='land on Left'>	</input><input type='button'	id='leftz' 				value='pick land' onclick='showLands(\""+l+"\")'></input><br />"+
		"lands right	=	<input type='text'		id='lRight' 			value='land on Right'>	</input><input type='button'	id='rightz' 			value='pick land' onclick='showLands(\""+r+"\")'></input><br />"+
		"<input type='button' value='empty players' onclick='removeplayers(\""+landName+"\")'></input>"+
		"<input type='button' value='saveLand' onclick='saveLand()'></input>";
		return landData;
	}	

function showNpcs(npcs)
	{
		fillNpcs('',npcTextDiv,'r');
	}
	
function editLand()
	{
		var x = ''; 
		var ctr = 0;
		var radiodbtn = document.getElementsByName('selectRadio');
		var radioLength = radiodbtn.length;
		for (var i = 0; i < radioLength; i++) 
			{
				if(radiodbtn[i].checked) 
					{
						{
							alert(radiodbtn[i].value);
							x = radiodbtn[i].value;
						}
					}
			}
		if (ctr == radioLength)
			{
				alert("None of the lands have been selected:");
			}
        var landName 	= document.getElementById("landName"+x).innerHTML;
		var size 		= document.getElementById("landsize"+x).innerHTML;
		var model 		= document.getElementById("landmodel"+x).innerHTML;
		var owners		= document.getElementById("ownersOfTheLand"+x).innerHTML;
		var sound		= document.getElementById("landSound"+x).innerHTML;
		var description	= document.getElementById("landDescription"+x).innerHTML;
		var lvl			= document.getElementById("landLevel"+x).innerHTML;
		var l			= document.getElementById("neighbourLeftz"+x).innerHTML;
		var t			= document.getElementById("neighbourTopz"+x).innerHTML;
		var r			= document.getElementById("neighbourRightz"+x).innerHTML;
		var b			= document.getElementById("neighbourBotz"+x).innerHTML;
		var npcs		= allNpcsOfAllLand[x];
		console.log('nocs = ');
		console.log(npcs);
		
		document.getElementById('dataGridL').innerHTML = returnLandText(landName,description,sound,size,model,owners,npcs,mobs,lvl,l,r,t,b);
		
	}
	
var landTextDiv = 
	"<div id='landPropNames'>"+
		"<div id='selected'			value='selected'><br /></div>"+
		"<div id='nameDiv' 			value='name'>name<br /></div>"+
		"<div id='descriptionDiv' 	value='description'>description<br /></div>"+
		"<div id='sizeDiv' 			value='size'>size<br /></div>"+
		"<div id='soundDiv' 		value='sound'>sound<br /></div>"+
		"<div id='modelDiv' 		value='model'>model<br /></div>"+
		"<div id='owners' 			value='owners'>owners<br /></div>"+
		"<div id='playersOnline' 	value='playersOnline'>playersOnline<br /></div>"+
		"<div id='neighbourT' 		value='neighbourT'>neighbourT<br /></div>"+
		"<div id='neighbourL' 		value='neighbourL'>neighbourL<br /></div>"+
		"<div id='neighbourR' 		value='neighbourR'>neighbourR<br /></div>"+
		"<div id='neighbourB' 		value='neighbourB'>neighbourB<br /></div>"+
		"<div id='level' 			value='level'>level<br /></div>"+
	"</div>"+
	"<div id='landProperties'>"+
		"<div id='selected1' value='selected'></div>"+
		"<div id='nameDiv1' value='name'></div>"+
		"<div id='descriptionDiv1' value='description'></div>"+
		"<div id='sizeDiv1' value='size'></div>"+
		"<div id='soundDiv1' value='sound'></div>"+
		"<div id='modelDiv1' value='model'></div>"+
		"<div id='owners1' value='owners1'></div>"+
		"<div id='playersOnline1' value='playersOnline1'></div>"+
		"<div id='neighbourTz' 		value='neighbourT'></div>"+
		"<div id='neighbourLz' 		value='neighbourL'></div>"+
		"<div id='neighbourRz' 		value='neighbourR'></div>"+
		"<div id='neighbourBz' 		value='neighbourB'></div>"+
		"<div id='levelz' value='levelz'></div>"+
		"<input type='hidden' id='landNpcsz'	value=''></input>"+
	"</div>";

var allNpcsOfAllLand	=	new Array();
	
function fillLand(data,text)
	{
		var dataGrid = document.getElementById('dataGridL');
		document.getElementById('dataGridR').style.display='none';
		var realData = data[0];
		var type	=	data[1];
		dataGrid.innerHTML = text;	
		console.log('amount of lands = '+realData[0].length);
		console.log(realData[0].length);
		for(var x=0;x<realData[0].length; x++)
			{
				var newData = JSON.parse(realData[0][x]);
				var selected	 										= document.getElementById("selected1").innerHTML;
				var innername 											= document.getElementById("nameDiv1").innerHTML;
				var innerSize 											= document.getElementById("sizeDiv1").innerHTML;
				var innermodel 											= document.getElementById("modelDiv1").innerHTML;
				var innerdescription 									= document.getElementById("descriptionDiv1").innerHTML;
				var innerSound	 										= document.getElementById("soundDiv1").innerHTML;
				var playersOnline	 									= document.getElementById("playersOnline1").innerHTML;
				var owners	 											= document.getElementById("owners1").innerHTML;
				var level		 										= document.getElementById("levelz").innerHTML;
				var neighbourT		 									= document.getElementById("neighbourTz").innerHTML;
				var neighbourB		 									= document.getElementById("neighbourBz").innerHTML;
				var neighbourL		 									= document.getElementById("neighbourLz").innerHTML;
				var neighbourR		 									= document.getElementById("neighbourRz").innerHTML;
				var landNpcsz		 									= document.getElementById("landNpcsz").value;
				
				document.getElementById("selected1").innerHTML 			= selected+'<div id="selectedLand"><input type="radio" name="selectRadio" id="selectedLandRadio" value="'+x+'"></input></div>';
				document.getElementById("nameDiv1").innerHTML 			= innername + '<div class="row" id="landName'+x+'">'+newData.name+'</div>';
				document.getElementById("soundDiv1").innerHTML 			= innerSound + '<div class="row" id="landSound'+x+'">'+newData.sound+'</div>';
				document.getElementById("descriptionDiv1").innerHTML 	= innerdescription + '<div class="row" id="landDescription'+x+'">'+newData.description+'</div>';
				document.getElementById("modelDiv1").innerHTML 			= innermodel + '<div class="row" id="landmodel'+x+'">'+newData.model+'</div>';
				document.getElementById("sizeDiv1").innerHTML 			= innerSize + '<div class="row" id="landsize'+x+'">'+newData.size+'</div>';
				document.getElementById("playersOnline1").innerHTML 	= playersOnline + '<div class="row" id="playersOnlineNow'+x+'">'+newData.players.length+'</div>';
				document.getElementById("owners1").innerHTML 			= owners + '<div class="row" id="ownersOfTheLand'+x+'">'+newData.owners+'</div>';
				document.getElementById("levelz").innerHTML 			= level + '<div class="row" id="landLevel'+x+'">'+newData.lvl+'</div>';
				document.getElementById("neighbourTz").innerHTML 		= neighbourT + '<div class="row" id="neighbourTopz'+x+'">'+newData.top+'</div>';
				document.getElementById("neighbourBz").innerHTML 		= neighbourB + '<div class="row" id="neighbourBotz'+x+'">'+newData.bot+'</div>';
				document.getElementById("neighbourRz").innerHTML 		= neighbourL + '<div class="row" id="neighbourLeftz'+x+'">'+newData.right+'</div>';
				document.getElementById("neighbourLz").innerHTML 		= neighbourR + '<div class="row" id="neighbourRightz'+x+'">'+newData.left+'</div>';
				allNpcsOfAllLand.push(newData.npcs);
				console.log(newData);
			}
	}
	
function createLand()
	{
		alert('creating land on db8');
		var landName 	= document.getElementById("landNameInput").value;
		var model 		= document.getElementById("modelSelector").value;
		var mapSelector	= document.getElementById("mapSelector").value;
		var owners		= document.getElementById("landOwners").value;
		var sound		= document.getElementById("backgroundMusic").value;
		var description	= document.getElementById("descriptionCreator").value;
		var lvl			= document.getElementById("setLvl").value;
		var l			= document.getElementById("neighBourLeft").value;
		var t			= document.getElementById("neighBourTop").value;
		var r			= document.getElementById("neighBourRight").value;
		var b			= document.getElementById("neighBourBot").value;
		var continent	= document.getElementById("contienentSelector").value;
		socket.emit('saveNewLand',[landName,'size',model,mapSelector,owners,sound,description,lvl,l,t,r,b,continent]);
	}
	
function saveLand()
	{
		alert('updating edited land on db8');
		var landName 	= document.getElementById("enterLandNamez").value;
		var size 		= document.getElementById("sizeDiv1z").value;
		var model 		= document.getElementById("modelDiv1z").value;
		alert(model);
		alert(document.getElementById("modelDiv1z"));
		alert(document.getElementById("modelDiv1z").value);
		var map			= 'map';//document.getElementById("map").innerHTML;
		var owners		= document.getElementById("owners1z").value;
		var sound		= document.getElementById("soundDiv1z").value;
		var description	= document.getElementById("descriptionDiv1z").value;
		var lvl			= document.getElementById("lvlz").value;
		var l			= document.getElementById("lLeft").value;
		var t			= document.getElementById("lTop").value;
		var r			= document.getElementById("lRight").value;
		var b			= document.getElementById("lBot").value;
		socket.emit('saveEditedLand',[landName,size,model,map,owners,sound,description,lvl,l,t,r,b]);
	}
	
function removeplayers(landname)
	{
		socket.emit('emptyplayers',landname);
		console.log('épty sent');
	}