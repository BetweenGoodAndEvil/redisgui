var questDiv			=	
	"<select id='selectQuest'	onchange='getSelected()'>"+
		"<option value='solo'>solo</option>"+
		"<option value='eliteSolo'>eliteSolo</option>"+
		"<option value='team'>team</option>"+
		"<option value='eliteTeam'>eliteTeam</option>"+
	"</select>";

var newQuestData = 
	"quest name			= <input type='text' value='qname'></input><br />"+
	"quest min faction	= <input type='text' value='qMinFaction'></input><br />"+
	"quest finan rew	= <input type='text' value='qRewMoney'></input><br />"+
	"quest giver 		= <input type='text' value='qGiver'></input><br />"+
	"quest item rew		= <input type='text' value='qRewItem'></input><br />"+
	"<input type='button' value='save quest' onclick='saveQ()'></input>";