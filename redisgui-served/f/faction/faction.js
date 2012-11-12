var faction =
	"<select name=\"selectFaction\" id=\"selectFaction\"  onchange='getSelected()'>"+
		"<option value=\"Stygian Unlimited\">							Stygian Unlimited			</option>"+
		"<option value=\"The Acron Dynasty\">							The Acron Dynasty			</option>"+
		"<option value=\"The Denninshta Guardianship \">				The Denninshta Guardianship 			</option>"+
		"<option value=\"The Order of Penance\">						The Order of Penance			</option>"+
		"<option value=\"The Sky-Dwellers\">							The Sky-Dwellers			</option>"+
		"<option value=\"The Sleepers\">								The Sleepers			</option>"+
		"<option value=\"The Union Of REvolt\">							The Union Of REvolt			</option>"+
		"<option value=\"Buccaneers\">									Buccaneers			</option>"+
		"<option value=\"Clashing Sword's\">							Clashing Sword's			</option>"+
		"<option value=\"Hippies\">										Hippies			</option>"+
		"<option value=\"Pirates\">										Pirates			</option>"+
		"<option value=\"Slayers\">										Slayers			</option>"+
		"<option value=\"The Charity Faction\">							The Charity Faction			</option>"+
		"<option value=\"The Nobles\">									The Nobles			</option>"+
		"<option value=\"Particore - The Elementalist Faction\">		Particore - The Elementalist Faction			</option>"+
		"<option value=\"Infinate Jam - Musians Faction\">				Cog' Maw - The engineers Guild			</option>"+
		"<option value=\"The Sinister Blade - Rogue Faction\">			The Sinister Blade - Rogue Faction		</option>"+
		"<option value=\"Universal Knowledge - The Scientist Faction\">	Universal Knowledge - The Scientist Faction			</option>"+
		"<option value=\"The Deviators - Shapeshifter Faction\">		The Deviators - Shapeshifter Faction			</option>"+
		"<option value=\"Ardor Angen - The Spirit Warrior Guild\">		Ardor Angen - The Spirit Warrior Guild			</option>"+
		"<option value=\"Jujujinx - Voodo Faction\">					Jujujinx - Voodo Faction			</option>"+
		"<option value=\Fisherman Inc - Bounty Hunter Faction\">		Fisherman Inc - Bounty Hunter Faction			</option>"+
		"<option value=\"Cog' Maw - The engineers Guild\">				Cog' Maw - The engineers Guild			</option>"+
		"<option value=\"Cog' Maw - The engineers Guild\">				Cog' Maw - The engineers Guild			</option>"+
		"<option value=\"Cog' Maw - The engineers Guild\">				Cog' Maw - The engineers Guild			</option>"+
	"</select>"+
	'<input type="button" value="edit" onclick="editLand()"></input>'+
	'<input type="button" value="make new faction" onclick="makeNewFaction()"></input>';
	
var makeNewFactionText	=	
	'faction name<input type="text" value="factionName" ></input><br />'+
	'faction enemies<select><option>enemies in here</option></select><input type="button" value="addEnemyFaction"  function="addEnemyFaction()"></input><br />'+
	'faction image<select><option>images in here</option></select><input type="button" value="uploadImage" function="uploadImage()"></input><br />'
	'faction bonus for: <select><option>races in here</option></select><input type="button" value="add Race Bonus To Faction"  function="addRaceBonusToFaction()"></input><br />'+
	'<input type="button" value=createThisFactio" onclick="createFaction()">';
	
function addEnemyFaction()
	{
	
	}
	
function makeNewFaction()
	{
		document.getElementById('dataGridL').innerHTML = makeNewFactionText;
	}
	
function addRaceBonusToFaction()
	{
	
	}
	
function createFaction()
	{
		socket.emit('fac','')
	}
	
function uploadImage()
	{
	
	}