/**
*	user selects what should be shown and edited
*/

function showWhat(what)
	{
		var dataView	=	document.getElementById("dataView");
		if(what == "weapons")
			{
				dataView.innerHTML	=	weaponDiv+createNewWeapon;
				selected0	=	"weapons";
				selected1	=	"selectWeapon";
			}
		if(what == "npcs")
			{
				dataView.innerHTML	=	npcDivs+createNewNpc;
				selected0	=	"npcs";
				selected1	=	"selectNpc";
			}
		if(what == "mobs")
			{
				dataView.innerHTML	=	mobDiv+createNewMob;
				selected0	=	"mobs";
				selected1	=	"selectMobs";
			}
		if(what == "quests")
			{
				dataView.innerHTML	=	questDiv+createNewQuest;
				selected0	=	"quests";
				selected1	=	"selectQuest";
			}
		if(what == "consumables")
			{
				dataView.innerHTML	=	consumableDiv+createNewConsumable;
				selected0	=	"consumables";
				selected1	=	"selectConsumable";
			}
		if(what == "questitems")
			{
				dataView.innerHTML	=	questDiv+createNewQuestItem;
				selected0	=	"questitems";
				selected1	=	"selectQuest";
			}
		if(what == "misc")
			{
				dataView.innerHTML	=	miscDiv+selectIt+createNewMisc;
				selected0	=	"misc";
				selected1	=	"selectMisc";
			}
		if(what == "armour")
			{
				dataView.innerHTML	=	armourDiv+createNewArmour;
				selected0	=	"armour";
				selected1	=	"selectArmour";
			}
		if(what == "materials")
			{
				dataView.innerHTML	=	materialDiv+createNewMaterial;
				selected0	=	"materials";
				selected1	=	"selectMaterial";
			}
		if(what == "containers")
			{
				dataView.innerHTML	=	containerDiv+selectIt+createNewContainer;
				selected0	=	"containers";
				selected1	=	"selectContainers";
			}
		if(what == "salvageItems")
			{
				dataView.innerHTML	=	salvageItemDiv+createNewSalvageItem;
				selected0	=	"salvageItems";
				selected1	=	"selectSalvageable";
			}
		if(what == "land")
			{
				dataView.innerHTML	=	landDiv+selectItLand+createNewLand;
				selected0	=	"land";
				selected1	=	"selectLand";
			}		
		if(what == "achiefment")
			{
				dataView.innerHTML	=	achiefmentDiv+createNewAchief;
				selected0	=	"achiefment";
				selected1	=	"selectAchiefment";
			}		
		if(what == "data")
			{
				dataView.innerHTML	=	images+"   "+audio +  "  "+ upload;
			}		
		if(what == "model")
			{
				dataView.innerHTML	=	modelDiv;
			}		
		if(what == "users")
			{
				dataView.innerHTML	=	showUsers+showChars;
			}	
		if(what == "skilz")
			{
				dataView.innerHTML	=	"select the skilz" ;
			}	
		if(what == "factions")
			{
				dataView.innerHTML	=	faction;
			}
	}