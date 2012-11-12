var m1 =	"<input type='button' value='getModels' onclick='getModels()'>"+
	"model</input>";
var m2 = 	
	"<input type='button' value='delete' onclick='deleteModel()'>"+
	"model</input>";
var m3 = 
	'model<form action="/" enctype="multipart/form-data" id="getModels"'+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>';
	
var modelDiv = m1 + m2+m3;

function handleModel(data)
	{
		var datagrid = document.getElementById("dataGridL");
		datagrid.innerHTML = 
		"<div id='modelGrid'><div id='selectedModel'>selected</div><div id='modelName'>model name</div><div id='render'>render</div></div>"+
		"<div id='modelPropGrid'><div id='selectedModel1'></div><div id='modelName1'></div><div id='render1'></div></div>";
		for(var x=0; x<data.length; x++)
			{
				var q = document.getElementById('selectedModel1');
				q.innerHTML = q.innerHTML+'<div id="selectionDiv"><input type="radio"></input></div><br />';
				var z = document.getElementById('modelName1');
				z.innerHTML = z.innerHTML+'<div id="theModelName">'+data+'</div><br />';
				var y = document.getElementById('render1');
				y.innerHTML = y.innerHTML+'<div id="renderItPlz"><input type="button" value="render this model" onclick="renderThisPlz(\''+data+'\')"></input></div><br />';
			}
	}
	
function uploadModel()
	{
		
	}
	
function deleteModel()
	{
		
	}
	
function handleModelRight(data)
	{
		var datagrid = document.getElementById("dataGridL");
		datagrid.innerHTML = 
		"<div id='modelGrid'><div id='selectedModel'>selected</div><div id='modelName'>model name</div><div id='render'>render</div></div>"+
		"<div id='modelPropGrid'><div id='selectedModel1'></div><div id='modelName1'></div><div id='render1'></div></div>";
		for(var x=0; x<data.length; x++)
			{
				var q = document.getElementById('selectedModel1');
				q.innerHTML = q.innerHTML+'<div id="selectionDiv"><input type="radio"></input></div><br />';
				var z = document.getElementById('modelName1');
				z.innerHTML = z.innerHTML+'<div id="theModelName">'+data+'</div><br />';
				var y = document.getElementById('render1');
				y.innerHTML = y.innerHTML+'<div id="renderItPlz"><input type="button" value="render this model" onclick="renderThisPlz(\''+data+'\')"></input></div><br />';
			}
	}