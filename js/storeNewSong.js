/***********************************/
/* storeNewSong accepts arguments being firebase reference, followed
by four strings identifying the song attributes of title, artist, album, and genre
*/

// BEGIN: storeNewSong
function storeNewSong(library,songName, artistName, albumName, songGenre) {
  // Get song-list element to add songs to
  if (songName !== "" && artistName !== "" && albumName !== "" && songGenre !== "default") {
              // Create JSON object for song info
              var newSong = {
              name: songName,
              artist: artistName,
              album: albumName,
              genre: songGenre
              }

            // Push JSON song object to firebase
            library.push(newSong);
      }
  else {alert("Please complete all fields");}
} // END storeNewSong