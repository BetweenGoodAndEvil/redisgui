function addToDiv(divname,what)
	{
	
	}

var selected0 = '';	
var selected1 = '';	
var selected2 = '';	
	
var createNew				=	"<input type='button' 	value='new' onclick='makenew()' 				></input>";	
var createNewWeapon			=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewWeapon()' 		></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewMaterial		=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewMaterial()'		></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	;	
var createNewArmour			=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewArmour()'	 	></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewLand			=	"<input type='button' 	id='makeNew'	value='new' onclick='makenewLand()' 		></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editLand()' 			></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='LandWeapon()' 		></input>";		
var createNewConsumable		=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewConsumable()' 	></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewMob			=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewMob()' 			></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewQuest			=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewQuest()' 		></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewQuestItem		=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewQuestItem()' 	></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewMisc			=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewMisc()' 		></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewNpc			=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewNpc()' 			></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";
var createNewContainer		=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewContainer()' 	></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewAchief			=	"<input type='button' 	id='makeNew'	value='new' onclick='makeNewAchief()' 		></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	
var createNewSalvageItem	=	"<input type='button' 	id='makeNew' 	value='new' onclick='makeNewSalvageItem()' 	></input>"+
								"<input type='button' 	id='edit'		value='edit' onclick='editWeapon()' 		></input>"+
								"<input type='button' 	id='delete'		value='delete' onclick='deleteWeapon()' 	></input>";	

var selectIt				=	"<input type='button' value= 'select' 			id='select'	name='select' onclick='getSelected()'></input>";
var selectItLand			=	"<input type='button' value= 'select continent' id='select'	name='select' onclick='getContinentSelected()'></input>";
