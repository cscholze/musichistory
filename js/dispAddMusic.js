// BEGIN viewMusicTab
function dispAddMusic(event) {
  $(".view-music-tab").addClass("hidden");
  $(".view-music-tab-btn").removeClass("active-tab");
  $(".add-music-tab").removeClass("hidden");
  $(".add-music-tab-btn").addClass("active-tab");
  $(".profile-tab").addClass("hidden");
  $(".profile-tab-btn").removeClass("active-tab");
}
// END viewMusicTab