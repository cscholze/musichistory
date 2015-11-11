define(["jquery","firebase","dispViewMusic","dispProfile","addSong","removeSong","songFilter","loadSnapshot"], function($,Firebase,dispViewMusic,dispProfile,addSong,removeSong,songFilter,loadSnapshot) {
	
		var libraryRef= new Firebase("https://jcs-musichistory.firebaseio.com/library");
    		var librarySnapshot = createSnapshot(libraryRef);
    		console.log("librarySnapshot",librarySnapshot);
	
	// NAVIGATION

		var viewMusicTabBtn = document.getElementsByClassName("view-music-tab-btn")[0];
		var profileTabBtn = document.getElementsByClassName("profile-tab-btn")[0];

		profileTabBtn.addEventListener("click",dispProfile);
		viewMusicTabBtn.addEventListener("click",dispViewMusic);


	// PLAYLIST FUNCTIONALITY
		// Handler to add song
		document.getElementsByClassName("btn-add-song")[0].addEventListener("click",addSong);
		
		// Handler to remove song
		$("body").click(function(event) {removeSong(event);});

		// Handler to filter song
		$(".btn-filter").click(function(event) {songFilter(event,songs);});
	}
);