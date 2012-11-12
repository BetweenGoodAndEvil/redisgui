function makeNewQuest()
	{	
		var select		=	document.getElementById(selected1);
		select  		=	select.value;
		selected2  		=	select;
		
		var dataGrid = document.getElementById("dataGridL");
		
		if(select == "solo")
			{
				dataGrid.innerHTML	=	
				"make a new solo quest"+
				newQuestData;
			}
		if(select == "eliteSolo")
			{
				dataGrid.innerHTML	=	
				"make a new eliteSolo quest"+
				newQuestData;
			}
		if(select == "team")
			{
				dataGrid.innerHTML	=	
				"make a new team quest"+
				newQuestData;
			}
		if(select == "eliteTeam")
			{
				dataGrid.innerHTML	=	
				"make a new eliteTeam quest"+
				newQuestData;
			}
	}