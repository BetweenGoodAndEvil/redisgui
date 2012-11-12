function makeNewConsumable()
	{
		var select	=	document.getElementById(selected1);
		select  		=	select.value;
		selected2  		=	select;
		
		var dataGrid = document.getElementById("dataGridL");
		if(select == "food")
			{
				dataGrid.innerHTML	=	
				"make a new food"+
				itemdata;
			}
		if(select == "armour enchantments")
			{
				dataGrid.innerHTML	=	
				"make a new armour enchantments"+
				itemdata;
			}
		if(select == "weapon enchantments")
			{
				dataGrid.innerHTML	=	
				"make a new weapon enchantments"+
				itemdata;
			}		
		if(select == "mounts")
			{
				dataGrid.innerHTML	=	
				"make a new mounts"+
				itemdata;
			}
		if(select == "potions")
			{
				dataGrid.innerHTML	=	
				"make a new potions"+
				itemdata;
			}
		if(select == "elixirs")
			{
				dataGrid.innerHTML	=	
				"make a new elixirs"+
				itemdata;
			}
		if(select == "companions")
			{
				dataGrid.innerHTML	=	
				"make a new companions"+
				itemdata;
			}
		if(select == "recipies")
			{
				dataGrid.innerHTML	=	
				"make a new recipies"+
				itemdata;
			}
		if(select == "keys")
			{
				dataGrid.innerHTML	=	
				"make a new keys"+
				itemdata;
			}
}