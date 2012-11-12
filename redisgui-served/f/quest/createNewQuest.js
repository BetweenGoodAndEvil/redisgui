function createNewQuest()
	{
		var select	=	document.getElementById(selected1);
		select  		=	select.value;
		selected2  		=	select;
		
		var dataGrid = document.getElementById("dataGridL");
		
		if(select == "")
			{
				dataGrid.innerHTML	=	
				""+
				itemdata;
			}
	}