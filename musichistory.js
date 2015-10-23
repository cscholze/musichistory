console.log("linking 'musicthistory.js' ... SUCCESS");
//REFACTOR FOR JQUERY
$(document).ready(function() {

/***************************************************************************************************************/
// Get reference to library in firebase
var libraryRef= new Firebase("https://jcs-musichistory.firebaseio.com/library");

// Get snapshot of songlist on load "value" event
libraryRef.on("value", function(library) {
  console.log("library(key,value) = ",library.key()+" --> "+library.val());
  var songs = library.val();
  console.log("songs = ",songs);
  // reset songlist on initial load
  $(".song-list").html("");
  for (song in songs) {
      console.log("song = ",song);
        console.log(songs[song]);
        var song = songs[song];
        var songName = song.name;
        var songArtist = song.artist;
        var songAlbum = song.album;
        var songGenre = song.genre;
        $(".song-list").append("<li>"+songName+" by "+songArtist+" on "+songAlbum+"</li>"); 
    }
  }, function (errorObject) {console.log("The read failed: " + errorObject.code);
});



// Get elements from Firebase object
// for (var UID in libraryRef.val()) {
//   console.log("UID: ",UID);

//     // if (libraryRef.val().hasOwnProperty(song)) {
//     //   console.log(song.key());
//     // }
// }


//   // Check if data loaded
// var count = 0;

// library.on("child_added", function(snap) {
//   count++;
//   console.log("added", snap.key());
// });

// // length will always equal count, since snap.val() will include every child_added event
// // triggered before this point

/* Navigation */
// Get navigation button and tab elements
var viewMusicTabBtn = document.getElementById("view-music-tab-btn");
var viewMusicTab = document.getElementsByClassName("view-music-tab")[0];
var addMusicTabBtn = document.getElementById("add-music-tab-btn");
var addMusicTab = document.getElementsByClassName("add-music-tab")[0];
var profileTabBtn = document.getElementById("profile-tab-btn");
var profileTab = document.getElementsByClassName("profile-tab")[0];

// BEGIN viewMusicTab
viewMusicTabBtn.addEventListener("click",dispViewMusic);
function dispViewMusic(event) {
  viewMusicTab.classList.remove("hidden");
  addMusicTab.classList.add("hidden");
  profileTab.classList.add("hidden");
}
// END viewMusicTab

// BEGIN viewMusicTab
addMusicTabBtn.addEventListener("click",dispAddMusic);
function dispAddMusic(event) {
  viewMusicTab.classList.add("hidden");
  addMusicTab.classList.remove("hidden");
  profileTab.classList.add("hidden");
}
// END viewMusicTab

// BEGIN viewProfileTab
profileTabBtn.addEventListener("click",dispProfile);
function dispProfile(event) {
  viewMusicTab.classList.add("hidden");
  addMusicTab.classList.add("hidden");
  profileTab.classList.remove("hidden");
}
// END viewMusicTab

/***************************************************************************************************************/
/* VIEW MUSIC page */
var addNewSongBtn = document.getElementsByClassName("add-new-song-btn")[0];
addNewSongBtn.addEventListener("click",dispAddMusic);


/***************************************************************************************************************/
/* ADD-MUSIC page */
/* ADVANCED FEATURE Enable/disable addSong button if all fields are completed
if (songName !== "" && artistName !== "" && albumName !== "" && songGenre !== "default") {
  addSongBtn.disabled="false";
}
*/

// Add new song to DOM when user clicks "add-song" button element
// Grab add-song Button
var addSongBtn = document.getElementsByClassName("add-song-btn")[0];

//assign click event listener
addSongBtn.addEventListener("click",addSong);


//BEGIN addSong: define click handler function to add song info to DOM
function addSong(event) {

  // Grab user values from input fields
  var songName = document.querySelector("input[name='song-title']").value;
    if (songName ==="") {alert("Please enter a song name!");}
  var artistName = document.querySelector("input[name='artist']").value;
    if (artistName ==="") {alert("Please enter an artist name!");}
  var albumName = document.querySelector("input[name='album']").value;
    if (albumName ==="") {alert("Please enter the album name!");}
  var songGenre = document.querySelector("select[name='genre']").value;
    if (songGenre ==="default") {alert("Please select a genre!");}


  // Get song-list element to add songs to
  if (songName !== "" && artistName !== "" && albumName !== "" && songGenre !== "default") {

    // Create JSON song entry
    var newSong = {
      name: songName,
      artist: artistName,
      album: albumName,
      genre: songGenre,
    }
    console.log("newSong: ",newSong);

    // Push song JSON object to firebase
    libraryRef.push(newSong);


    // Reset input fields
    document.querySelector("input[name='song-title']").value = "";
    document.querySelector("input[name='artist']").value = "";
    document.querySelector("input[name='album']").value = "";
    document.querySelector("select[name='genre']").selectedIndex = "0";

    //Go back to song list
    dispViewMusic();
  }
} // END addSong


/***************************************************************************************************************/
/* PROFILE page */
}); // END JQuery