function handleWhat(data,what)
	{
		var text = 
			"<div id='nameDiv' value='name'>name<br /></div>"+
			"<div id='valueDiv' value='Value'>Value<br /></div>"+
			"<div id='descriptionDiv' value='description'>description<br /></div>"+
			"<div id='optionsDiv' value='options'>options<br /></div>"+
			"<div id='sizeDiv' value='size'>size<br /></div>"+
			"<div id='statsDiv' value='stats'>stats<br /></div>"+
			"<div id='enchantmentsDiv' value='enchantments'>enchantments<br /></div>"+
			"<div id='baseSwingDiv' value='baseSwing'>baseSwing<br /></div>"+
			"<div id='soundDiv' value='sound'>sound<br /></div>"+
			"<div id='questDiv' value='quest'>quest<br /></div>"+
			"<div id='imageDiv' value='image'>image<br /></div>"+
			"<div id='modelDiv' value='model'>model<br /></div>"+
			"<div id='animations' value='animations'>animations<br /></div>"+
			"<div id='baseDmg' value='baseDmg'>baseDmg<br /></div>"+
			"<div id='baseDef' value='baseDef'>baseDef<br /></div>"+
			"<div id='sel' value='selected'>selected<br /></div>"+
			"<div id='nameDiv1' value='name'><br /></div>"+
			"<div id='valueDiv1' value='Value'><br /></div>"+
			"<div id='descriptionDiv1' value='description'><br /></div>"+
			"<div id='optionsDiv1' value='options'><br /></div>"+
			"<div id='sizeDiv1' value='size'><br /></div>"+
			"<div id='statsDiv1' value='stats'><br /></div>"+
			"<div id='enchantmentsDiv1' value=''><br /></div>"+
			"<div id='baseSwingDiv1' value='baseSwing'><br /></div>"+
			"<div id='soundDiv1' value='sound'><br /></div>"+
			"<div id='questDiv1' value='quest'><br /></div>"+
			"<div id='imageDiv1' value='image'><br /></div>"+
			"<div id='modelDiv1' value='model'><br /></div>"+
			"<div id='animations1' value='animations'><br /></div>"+
			"<div id='baseDmg1' value='baseDmg'><br /></div>"+
			"<div id='baseDef1' value='baseDef'><br /></div>"+
			"<div id='sel1' value='selected'><br /></div>";
		alert(what);
		if(what=='consumables')
			{
				alert("consumables handling");
				filIt(data,consumableDisplayText);
			}
		else
			{
				if(what == 'weapons')
					{
						alert('weapons handling');
						filIt(data,weaponDisplayText);
					}
				else
					{
						if(what == 'materials')
							{
								alert('materials handling');
								filIt(data,text);
		}
						else
							{
								if(what == 'armour')
									{
										alert('armour handling');
										filIt(data,text);
									}	
								else
									{
										if(what == 'salvageItems')
											{
												alert('salvageItem handling');
												filIt(data,text);
											}
										else
											{
												if(what == 'land')
													{
														alert('land handling');
														fillLand(data,landTextDiv);
													}
												else
													{
														if(what == 'npcs')
															{
																alert('handling incoming npc data');
																fillNpcs(data,npcTextDiv,'l');
															}
													}
											}
									}
							}
					}
			}
	}	
	
function filIt(data,text)
	{
		var dataGrid = document.getElementById('dataGridL');
		document.getElementById('dataGridL').style.width='100%';
		document.getElementById('dataGridR').style.display = 'none';
		
		dataGrid.innerHTML = text;	
			var newArray = new Array();
			for(var x=0;x<data.length; x++)
				{
					console.log(data);
					try
						{
							var newData = JSON.parse(data[x]);
							newArray.push(newData);	
						}
					catch(err)
						{
							alert(err);						
						}
			for(var x=0;x<data.length; x++)
				{
					console.log(newData);
					var innername 											= document.getElementById("nameDiv1").innerHTML;
					var innervalue 											= document.getElementById("valueDiv1").innerHTML;
					var innerSize 											= document.getElementById("sizeDiv1").innerHTML;
					var innermodel 											= document.getElementById("modelDiv1").innerHTML;
					var innerdescription 									= document.getElementById("descriptionDiv1").innerHTML;
					var innerStats		 									= document.getElementById("statsDiv1").innerHTML;
					var innerEnchant	 									= document.getElementById("enchantmentsDiv1").innerHTML;
					var animation 											= document.getElementById("animations1").innerHTML;
					var innerSound	 										= document.getElementById("soundDiv1").innerHTML;
					document.getElementById("nameDiv1").innerHTML 			= innername + newData.name;
					document.getElementById("statsDiv1").innerHTML 			= innerStats + newData.stats;
					document.getElementById("enchantmentsDiv1").innerHTML 	= innerEnchant + newData.enchantments;
					document.getElementById("animations1").innerHTML 		= animation + newData.animation;
					document.getElementById("soundDiv1").innerHTML 			= innerSound + newData.sound;
					document.getElementById("valueDiv1").innerHTML 			= innervalue + newData.value;
					document.getElementById("descriptionDiv1").innerHTML 	= innerdescription + newData.description;
					document.getElementById("modelDiv1").innerHTML 			= innermodel + newData.model;
					document.getElementById("sizeDiv1").innerHTML 			= innerSize + newData.size;
				}		
			}
	}