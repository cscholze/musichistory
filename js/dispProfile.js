// BEGIN viewProfileTab
function dispProfile(event) {
  $(".view-music-tab").addClass("hidden");
  $(".view-music-tab-btn").removeClass("active-tab");
  $(".add-music-tab").addClass("hidden");
  $(".add-music-tab-btn").removeClass("active-tab");
  $(".profile-tab").removeClass("hidden");
  $(".profile-tab-btn").addClass("active-tab");
}
// END viewMusicTab