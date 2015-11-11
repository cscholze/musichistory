/***********************************/
/* storeNewSong accepts arguments being firebase reference, followed
by four strings identifying the song attributes of title, artist, album, and genre
*/
/* ADVANCED FEATURE Enable/disable addSong button if all fields are completed
if (songName !== "" && artistName !== "" && albumName !== "" && songGenre !== "default") {
  addSongBtn.disabled="false";
}
*/

define(["jquery","songLibrary","populatePlaylist"], function($,songLibrary,populatePlaylist) {
	return function() {
		var libraryRef= new Firebase("https://jcs-musichistory.firebaseio.com/library");
		var songName = $("input[name=song-title]").val();
		var artistName = $("input[name=artist").val();
		var albumName = $("input[name=album]").val();
		var songGenre = $("select[name=genre]").val();

		// Get song-list element to add songs to
		if (songName !== "" && artistName !== "" && albumName !== "" && songGenre !== "default") {
		// Create JSON object for song info
		var newSong = {
		"name": songName,
		"artist": artistName,
		"album": albumName,
		"genre": songGenre
		};
		
		// Push JSON song object to firebase
		libraryRef.push(newSong);
		$(".modal").modal("hide");
		}
		else {
			alert("Please complete all fields");
		}

		// Reset form input

		// Refresh library
		$.when( songLibrary.getSnapshot() ).then(function(firebaseSnapshot) {
		populatePlaylist(firebaseSnapshot);
		});
	};
});