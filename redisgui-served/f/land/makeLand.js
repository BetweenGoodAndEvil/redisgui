function makenewLand()
	{
		document.getElementById('dataGridL').innerHTML = 
			'<div id="populate">		populate the selection: 						<input type="button" id="populate" onclick="populate()" value="populate"></input></div>'+
			'<div id="landName">		set the name of the new land: 					<input type="text" id="landNameInput" value="someLandName"></input></div>'+
			'<div id="neighBourTop">	set the neighbour top of the new land: 			<select id="neighBourTop"></select></div>'+
			'<div id="neighBourBot">	set the neighbour bot of the new land: 			<select id="neighBourBot"></select></div>'+
			'<div id="neighBourLeft">	set the neighbour left  of the new land: 		<select id="neighBourLeft"></select></div>'+
			'<div id="neighBourRight">	set the neighbour right  of the new land: 		<select id="neighBourRight"></select></div>'+
			'<div id="owners">			set the owners of the new land: 				<select id="landOwners"></select></div>'+
			'<div id="backgroundMusic">	set the backgroundMusic of the new land: 		<select id="backgroundMusic"></select></div>'+
			'<div id="map">				set the map of the new land: 					<select id="mapSelector"></select></div>'+
			'<div id="model">			set the model of the new land: 					<select id="modelSelector"></select></div>'+
			'<div id="continent">		set the continent of the new land: 				<select id="contienentSelector"><option value=\'shom\'>shom</option></select></div>'+
			'<div id="description">		set the description of the new land: 			<input type="text" id="descriptionCreator"></input></div>'+
			'<div id="lvl">				set the  level of the new land: 				<input type="text" id="setLvl"></input></div>'+
			'<div id="amountOfChests">	set the  amount of chests in the new land: 		<input type="text" id="setAmountOfChests"></input></div>'+
			'<div id="amountOfOres">	set the  amount of ores in the new land: 		<input type="text" id="setAmountOfHerbs"></input></div>'+
			'<div id="amountOfHerbs">	set the  amount of herbs in the new land: 		<input type="text" id="setAmountOfOrbs"></input></div>'+
			'<br />'+
			'<input type="button" value="create this land" onclick="createLand()"></input>';
	}
