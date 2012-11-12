function createItem()
	{
		alert("0"+selected0+ " - "+selected2);
		var name			=	document.getElementById("itemname").value;
		var value			=	document.getElementById("itemvalue").value;
		var salvegeables	=	document.getElementById("itemsalvegeables").value;
		var description		=	document.getElementById("itemdesciption").value;
		var options			=	document.getElementById("itemoptions").value;
		var size			=	document.getElementById("items_size").value;
		var stats			=	document.getElementById("itemsStats").value;
		var enchantments	=	document.getElementById("itemEnchant").value;
		var baseSwing		=	document.getElementById("itembaseSwing").value;
		var sound			=	document.getElementById("itemsound").value;
		var quest			=	document.getElementById("itemquest").value;
		var image			=	document.getElementById("itemimage").value;
		var model			=	document.getElementById("itemmodel").value;
		var animations		=	document.getElementById("itemsanimations").value;
		var baseDmg			=	document.getElementById("itembaseAttack").value;
		var baseDef			=	document.getElementById("itembaseDef").value;
		socket.emit("mak",[selected0,selected2,name,value,salvegeables,description,size,options,enchantments,baseSwing,stats,sound,quest,image,model,animations,baseDmg,baseDef])
	}