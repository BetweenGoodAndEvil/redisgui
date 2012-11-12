var weaponDiv	=	
	"<select name=\"selectWeapon\" id=\"selectWeapon\" onchange='getSelected()'>"+
		"<option value=\"1 handed katana\">	1 handed katana	</option>"+
		"<option value=\"1 handed sword\">	1 handed sword	</option>"+
		"<option value=\"1 handed mace\">	1 handed mace	</option>"+
		"<option value=\"1 handed hammer\">	1 handed hammer	</option>"+
		"<option value=\"2 handed katana\">	2 handed katana	</option>"+
		"<option value=\"2 handed sword\">	2 handed sword	</option>"+
		"<option value=\"2 handed mace\">	2 handed mace	</option>"+
		"<option value=\"2 handed hammer\">	2 handed hammer	</option>"+
		"<option value=\"dagger\">			dagger			</option>"+
		"<option value=\"staff\">			staff			</option>"+
		"<option value=\"wand\">			wand			</option>"+
		"<option value=\"pole\">			pole			</option>"+
		"<option value=\"bow\">				bow				</option>"+
		"<option value=\"blowdart\">		blowdart		</option>"+
		"<option value=\"gun\">				gun				</option>"+
		"<option value=\"pistol\">			pistol			</option>"+
		"<option value=\"fist weapons\">	fist weapons	</option>"+
		"<option value=\"morning Star\">	morning Star	</option>"+
	"</select>";
	
var weaponDisplayText = 
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