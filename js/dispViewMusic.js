// BEGIN viewMusicTab
function dispViewMusic(event) {
  $(".view-music-tab").removeClass("hidden");
  $(".view-music-tab-btn").addClass("active-tab");
  $(".add-music-tab").removeClass("hidden");
    $(".add-music-tab-btn").removeClass("active-tab");
  $(".profile-tab").addClass("hidden");
    $(".profile-tab-btn").removeClass("active-tab");
}
// END viewMusicTab