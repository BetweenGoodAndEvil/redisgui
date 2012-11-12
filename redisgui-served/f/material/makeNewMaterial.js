function makeNewMaterial(select)
	{
		var select	=	document.getElementById(selected1);
		select  		=	select.value;
		selected2  		=	select;
		
		var dataGrid = document.getElementById("dataGrid");
		if(select == "gems")
			{
				dataGrid.innerHTML	=	
				"make a new gem"+
				itemdata;
			}
		if(select == "woods")
			{
				dataGrid.innerHTML	=	
				"make a new wood"+
				itemdata;;
			}
		if(select == "leather")
			{
				dataGrid.innerHTML	=	
				"make a new leather"+
				itemdata;
			}
		if(select == "stones")
			{
				dataGrid.innerHTML	=	
				"make a new stones"+
				itemdata;
			}
		if(select == "herbs")
			{
				dataGrid.innerHTML	=	
				"make a new herbs"+
				itemdata;
			}
		if(select == "enchanting")
			{
				dataGrid.innerHTML	=	
				"make a new enchanting"+
				itemdata;
			}
		if(select == "food")
			{
				dataGrid.innerHTML	=	
				"make a new food"+
				itemdata;
			}
		if(select == "cloth")
			{
				dataGrid.innerHTML	=	
				"make a new cloth"+
				itemdata;
			}
		if(select == "metals")
			{
				dataGrid.innerHTML	=	
				"make a new metals"+
				itemdata;
			}
		if(select == "eleResidue")
			{
				dataGrid.innerHTML	=	
				"make a new eleResidue"+
				itemdata;
			}
		if(select == "papyr")
			{
				dataGrid.innerHTML	=	
				"make a new papyr"+
				itemdata;
			}
		if(select == "inks")
			{
				dataGrid.innerHTML	=	
				"make a new inks"+
				itemdata;
			}
	}