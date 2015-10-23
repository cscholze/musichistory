// Reset DOM input fields and return to home screen
function resetSongInput() {
  document.querySelector("input[name='song-title']").value = "";
  document.querySelector("input[name='artist']").value = "";
  document.querySelector("input[name='album']").value = "";
  document.querySelector("select[name='genre']").selectedIndex = "0";
}