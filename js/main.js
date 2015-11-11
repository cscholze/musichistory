define(["eventHandlers","songLibrary","populatePlaylist"], function(eventHandlers,songLibrary,populatePlaylist) {
	$.when( songLibrary.getSnapshot() ).then(function(firebaseSnapshot) {
		//console.log("firebaseSnapshot",firebaseSnapshot);
		populatePlaylist(firebaseSnapshot);
	});



}); // END MAIN MODULE