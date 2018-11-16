// When the user scrolls the page, execute myFunction
window.onscroll = function() { navStick() };

// Get the navbar
var navbar = document.getElementById( "navbar" );

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

$.getJSON( "data.json", generateNav );

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navStick() {
  if ( window.pageYOffset >= sticky ) {
    navbar.classList.add( "sticky" )
  } else {
    navbar.classList.remove( "sticky" );
  }
} 

//Creates Navigation Bar based on json file
function generateNav( data ) {
	//Gets the amount of pages and sets length
	for ( i = 0; i < data.pages.length; i++ )
	{
		//Creates a tab for each element supplied in the json file
		var header = document.getElementById( "navbar" );
		var a = document.createElement('a');
		a.setAttribute( "href","javascript:void(0)" );
		a.setAttribute( "onclick", "switchPage(data," + i + " )" )
		
		//Changes first tab to green
		if (i == 0)
		{
			a.setAttribute( "class", "active" )
		}
		a.innerHTML = data.pages[i].title;
		header.appendChild(a);
	}
}

//Initialize web page
//switchPage( data, 0 );