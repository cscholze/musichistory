/*
	Use JavaScript arrays, loops, and innerHTML to show the music you love.

	Students must use JavaScript to create a list of songs in the index.html 
	file for their Music History project. Have them download the songs.js file, 
	which contains an array of strings with song information.

	Each student must add one song to the beginning and the end of the array.
	Loop over the array and remove any words or characters that obviously don't belong.
	Students must find and replace the > character in each item with a - character.
	Must add each string to the DOM in index.html in the main content area.

	{Song name} by {Artist} on the album {Album}

*/

var songs = [];

songs[songs.length] = "Legs > by Z*Z Top on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
console.log(songs);


// Add song to beginning of 'songs' array
// {Song name} by {Artist} on the album {Album}
songs.unshift("Faith > by Limp Bizkit on the album Three Dolla Bill Y'all");
console.log(songs);

// Add song to end of array 'songs'
// {Song name} by {Artist} on the album {Album}
songs.push("Don't Take The Girl > by Tim McGraw on the album Not A Moment Too Soon");
console.log(songs);

// Remove unneeded characters and replace '>' with '-'
console.log("removing special characters and replacing '>'")
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/[\/\\#,+()$~%.'":*?@<{}]/g,'');
	songs[i] = songs[i].replace(/>/g, "-");
	console.log(songs[i]);

	// Populate playlist with song
	var songElement = "<p>"+songs[i]+"</p>";
	console.log("song element",songElement);
	document.getElementById("playlist").innerHTML += songElement;
}


/* Get elements Method 
function getElementsByClassName(node,classname) {
  if (node.getElementsByClassName) { // use native implementation if available
    return node.getElementsByClassName(classname);
  } else {
    return (function getElementsByClass(searchClass,node) {
        if ( node == null )
          node = document;
        var classElements = [],
            els = node.getElementsByTagName("*"),
            elsLen = els.length,
            pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

        for (i = 0, j = 0; i < elsLen; i++) {
          if ( pattern.test(els[i].className) ) {
              classElements[j] = els[i];
              j++;
          }
        }
        return classElements;
    })(classname, node);
  }
}
*/
