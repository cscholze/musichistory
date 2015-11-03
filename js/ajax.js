// Get JSON element from host and populate DOM
  $(document).ready(function() {

    $.ajax({url: "library/library.json"}).done(function(library) {
      // When you tell jQuery to read a file via the ajax method
      // it reads the contents, and then executes whatever function
      // that you specify here in the done() method, and passes in
      // the contents of the file as the first argument.
        console.log("the contents of songs.json");
        console.log(library);

      var songs = library.songs;
      for (var songIndex in songs) {
        var song = songs[songIndex];
        console.log(song);
        var songName = song.title;
        var songArtist = song.artist;
        var songAlbum = song.album;
        var songGenre = song.genre;
        $(".song-list").append("<li>"+songName+" by "+songArtist+" on "+songAlbum+"</li>"); 
        }
      }); 
  });