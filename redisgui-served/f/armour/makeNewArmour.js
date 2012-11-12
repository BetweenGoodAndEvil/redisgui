function makeNewArmour(select)
	{
		var select		=	document.getElementById(selected1);
		select  		=	select.value;
		selected2  		=	select;
		
		var dataGrid = document.getElementById("dataGridL");
		
		if(select == "cloth")
			{
				dataGrid.innerHTML	=	
				"make a new cloth armour"+
				itemdata;
			}
		if(select == "leather")
			{
				dataGrid.innerHTML	=	
				"make a new leather armour"+
				itemdata;
			}
		if(select == "glass")
			{
				dataGrid.innerHTML	=	
				"make a new glass armour"+
				itemdata;
			}
		if(select == "mail")
			{
				dataGrid.innerHTML	=	
				"make a new mail armour"+
				itemdata;;
			}
		if(select == "plate")
			{
				dataGrid.innerHTML	=	
				"make a new plate armour"+
				itemdata;
			}
	}