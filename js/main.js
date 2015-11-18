define(["eventHandlers","songLibrary","populatePlaylist","populateFilter"], function(eventHandlers,songLibrary,populatePlaylist,populateFilter) {
	$.when( songLibrary.getSnapshot() ).then(function(firebaseSnapshot) {
		populatePlaylist(firebaseSnapshot);
		// populateFilter(firebaseSnapshot);
	});



}); // END MAIN MODULE