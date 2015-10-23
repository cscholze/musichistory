$(document).ready(function() {

/***************************************************************************************************************/
// Get reference to library in firebase
var libraryRef= new Firebase("https://jcs-musichistory.firebaseio.com/library");

/* Displays initial Library and refreshes the displayed content from database */
refreshLibrary(libraryRef);

/* Navigation */
$(".view-music-tab-btn").click(dispViewMusic);
$(".add-music-tab-btn").click(dispAddMusic);
$(".profile-tab-btn").click(dispProfile);


/***************************************************************************************************************/
/* VIEW MUSIC page */
//var addNewSongBtn = document.getElementsByClassName("add-new-song-btn")[0];
$(".add-new-song-btn").click(dispAddMusic);

/***************************************************************************************************************/
/* ADD-MUSIC page */
/* ADVANCED FEATURE Enable/disable addSong button if all fields are completed
if (songName !== "" && artistName !== "" && albumName !== "" && songGenre !== "default") {
  addSongBtn.disabled="false";
}
*/


//BEGIN addSong: define click handler function to add song info to DOM
$(".add-song-btn").click(addSongBtnHandler);

function addSongBtnHandler(event) {
  // Grab user values from input fields
  var songName = document.querySelector("input[name='song-title']").value;
  var artistName = document.querySelector("input[name='artist']").value;
  var albumName = document.querySelector("input[name='album']").value;
  var songGenre = document.querySelector("select[name='genre']").value;
  storeNewSong(libraryRef,songName, artistName, albumName, songGenre);
  resetSongInput();
  dispViewMusic();
}



/*************************************************************************************************/
/* PROFILE page */


}); // END JQuery