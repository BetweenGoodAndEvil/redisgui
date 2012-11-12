function makeNewNpc()
	{
		var select		=	document.getElementById(selected1);
		select  		=	select.value;
		selected2  		=	select;
		
		var dataGrid = document.getElementById("dataGridL");
		
		if(select == "trader")
			{
				dataGrid.innerHTML	=	
				"make a new trader"+
				newNpc;
			}
		if(select == "proffesionTrainer")
			{
				dataGrid.innerHTML	=	
				"make a new proffesionTrainer"+
				newNpc;
			}
		if(select == "skillTrainer")
			{
				dataGrid.innerHTML	=	
				"make a new skillTrainer"+
				newNpc;
			}
		if(select == "merchant")
			{
				dataGrid.innerHTML	=	
				"make a new merchant"+
				newNpc;
			}
		if(select == "questGiver")
			{
				dataGrid.innerHTML	=	
				"make a new questGiver"+
				newNpc;
			}
		if(select == "questCompleter")
			{
				dataGrid.innerHTML	=	
				"make a new questCompleter"+
				newNpc;
			}
		if(select == "questNpc")
			{
				dataGrid.innerHTML	=	
				"make a new questNpc"+
				newNpc;
			}
	}