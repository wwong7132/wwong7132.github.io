var data;
$.getJSON( "data.json", setData);


function setData(data) {
 	//console.log( "JSON Data: " + data.pages );
	for (i = 0; i < data.pages.length; i++)
	{
/* 		//Stuff
		console.log( "JSON: " + data.pages[i].title );
		
		 */
	}
	//document.getElementById(i).innerHTML = data.name;
	
}