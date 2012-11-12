function makeNewWeapon()
	{
		var select	=	document.getElementById(selected1);
		select  		=	select.value;
		selected2  		=	select;
		
		var dataGrid = document.getElementById("dataGridL");
		document.getElementById("dataGridR").style.discplay = 'inline';
		
		
		if(select == "1 handed katana")
			{
				dataGrid.innerHTML	=	
				"make a new 1 handed katana"+
				itemdata;
			}
		if(select == "1 handed mace")
			{
				dataGrid.innerHTML	=	
				"make a new 1 handed mace"+
				itemdata;
			}
		if(select == "1 handed sword")
			{
				dataGrid.innerHTML	=	
				"make a new 1 handed sword"+
				itemdata;
			}
		if(select == "1 handed hammer")
			{
				dataGrid.innerHTML	=	
				"make a new 1 handed hammer"+
				itemdata;
			}
		if(select == "2 handed katana")
			{
				dataGrid.innerHTML	=	
				"make a new 2 handed katana"+
				itemdata;
			}
		if(select == "2 handed sword")
			{
				dataGrid.innerHTML	=	
				"make a new 2 handed sword"+
				itemdata;
			}
		if(select == "2 handed mace")
			{
				dataGrid.innerHTML	=	
				"make a new 2 handed mace"+
				itemdata;
			}
		if(select == "2 handed hammer")
			{
				dataGrid.innerHTML	=	
				"make a new 2 handed hammer"+
				itemdata;
			}
		if(select == "dagger")
			{
			dataGrid.innerHTML	=	
			"make a new dagger"+
				itemdata;
			}
		if(select == "staff")
			{
				dataGrid.innerHTML	=	
				"make a new staff"+
				itemdata;
			}
		if(select == "pole")
			{
				dataGrid.innerHTML	=	
				"make a new pole"+
				itemdata;
			}
		if(select == "blowdart")
			{
				dataGrid.innerHTML	=	
				"make a new blowdart"+
				itemdata;
			}
		if(select == "bow")
			{
				dataGrid.innerHTML	=	
				"make a new bow"+
				itemdata;
			}
		if(select == "gun")
			{
				dataGrid.innerHTML	=	
				"make a new gun"+
				itemdata;
			}
		if(select == "pistol")
			{
				dataGrid.innerHTML	=	
				"make a new pistol"+
				itemdata;
			}
		if(select == "fist weapons")
			{
				dataGrid.innerHTML	=	
				"make a new fist weapom"+
				itemdata;
			}
		if(select == "morning Star")
			{
				dataGrid.innerHTML	=	
				"make a new morning Star"+
				itemdata;
			}
		if(select == "wand")
			{
				dataGrid.innerHTML	=	
				"make a new wand"+
				itemdata;
			}
		if(select == "pistol")
			{
				dataGrid.innerHTML	=	
				"make a new pistol"+
				itemdata;
			}
	}