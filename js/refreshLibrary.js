function refreshLibrary(libraryRef) {
	// Get snapshot of firebase/library on "value" event
libraryRef.on("value", function(library) {
  var songs = library.val();
  // reset songlist on initial load
  $(".song-list").html("");
  for (song in songs) {
        var song = songs[song];
        var songName = song.name;
        var songArtist = song.artist;
        var songAlbum = song.album;
        var songGenre = song.genre;
        $(".song-list").append("<li>"+songName+" by "+songArtist+" on "+songAlbum+"</li>"); 
    }
  }, function (errorObject) {console.log("The read failed: " + errorObject.code);
});
}