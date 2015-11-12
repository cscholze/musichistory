define(["jquery","firebase","dispViewMusic","dispProfile","addSong","removeSong","songFilter"], function($,Firebase,dispViewMusic,dispProfile,addSong,removeSong,songFilter) {
	
		// var libraryRef= new Firebase("https://jcs-musichistory.firebaseio.com/library");
  //   		var librarySnapshot = createSnapshot(libraryRef);
  //   		console.log("librarySnapshot",librarySnapshot);
	
	// NAVIGATION
		var viewMusicTabBtn = document.getElementsByClassName("view-music-tab-btn")[0];
		var profileTabBtn = document.getElementsByClassName("profile-tab-btn")[0];

		profileTabBtn.addEventListener("click",dispProfile);
		viewMusicTabBtn.addEventListener("click",dispViewMusic);


	// PLAYLIST FUNCTIONALITY
		// Handler to add song
		$(".btn-add-song").click(function(event) {addSong(event);});
		
		// Handler to remove song
		$("body").on("click", ".glyphicon-remove", function(event) {
			removeSong(event);
		});

		// Handler to filter song
		$(".btn-filter").click(function(event) {songFilter(event);});
	}
);