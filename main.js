var data;

//$.getJSON( "data.json", saveData);

//Saves json file as global variable
function saveData( callback) {
    $.getJSON( "data.json", function (data) {
      callback(data);
    });
}

//Test function
saveData(function( json ){
	data = json;
	//console.log( "JSON Data: " + data.pages[2] );
});

//Takes json and ID number as inputs. ID corresponds to the number in the json file
function switchPage( data, id ) {
	var p = document.createElement('p');
	
	//Clear page before adding new content
	clearPage();
	
	//Loop to display all content in the page
	for ( i in data.pages[id].content )
	{
		//Creates a tab for each element supplied in the json file
		var content = document.getElementById( "content" );
		var h = document.createElement( 'h2' );
		var temp;
		h.innerHTML = data.pages[id].content[i].title;
		h.setAttribute( "id", "content-top" );
		
		//Append data
		content.appendChild( h );
		
		//Populate page with content under title
		var p = document.createElement( 'p' );
		p.innerHTML = data.pages[id].content[i].description;
		p.setAttribute( "id", "content-mid" );
		content.appendChild( p );
		
		//console.log(data.pages[id].content[i].links[0].title);
		
		//Fill links and other content if applicable
		
		//Check if links exist
		if (data.pages[id].content[i].links){
			//Create frame div for bottom row
			var frame = document.createElement( 'div' );
			frame.setAttribute( "id" , "content-bot-frame" );
			content.appendChild( frame );
			
			//Create div for link placement
			var d = document.createElement( 'div' );
			d.setAttribute( "id" , "content-bot" + i);
			frame.appendChild( d );
			d = document.getElementById( "content-bot" + i );
			
			//Prints each link in json category
			for ( j in data.pages[id].content[i].links )
			{
				var a = document.createElement( 'a' );
				a.innerHTML = data.pages[id].content[i].links[j].title;
				a.setAttribute( "href", data.pages[id].content[i].links[j].url)
				a.setAttribute( "id", "links" + i);
				d.appendChild( a );
			}
		}
	}
}

function clearPage(){
	document.getElementById( "content" ).innerHTML = ''
}