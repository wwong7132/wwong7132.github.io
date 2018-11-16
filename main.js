var data;

//Call function on startup
saveData(function( json ){
	data = json;
	
	//Initialize landing page
	switchPage( data, 0 );
})

//Saves json file as global variable
function saveData( callback) {
    $.getJSON( "data.json", function (data) {
      callback(data);
    });
}

/*
Main functionality of website
Takes json and ID number as inputs. The code only works for json files similar to the one in the repo
Input: data is a json object converted to string. id is the number corresponding to the json file
*/
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
		
		//Check if json specifies pictures
		if(data.pages[id].content[i].picture)
		{
			var img = document.createElement( 'img' );
			img.setAttribute( "src", data.pages[id].content[i].picture);
			img.setAttribute( "id" , "pic" );
			content.appendChild(img);
		}
		
		//Create mid frame
		var mframe = document.createElement( 'div' );
		mframe.setAttribute( "id" , "content-mid-frame" );
		mframe.innerHTML = " ";
		content.appendChild( mframe );
		//Populate page with content under title
		var p = document.createElement( 'p' );
		p.innerHTML = data.pages[id].content[i].description;
		p.setAttribute( "id", "content-mid" );
		mframe.appendChild( p );
		
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
				
				//Check for icon images before appending
				if (data.pages[id].content[i].links[j].icon)
				{	
					//Set icon attributes to pictures if found
					var img = document.createElement( 'img' );
					img.setAttribute( "id" , "icon" );
					img.setAttribute( "src", data.pages[id].content[i].links[j].icon);
					a.appendChild(img);
				}
				
				//Finally append links to bottom frame
				d.appendChild( a );
			}
		}
	}
}

//Clear page function. Deletes text with the content HTML ID
function clearPage(){
	document.getElementById( "content" ).innerHTML = '';
}