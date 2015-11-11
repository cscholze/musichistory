define(["jquery","firebase"], function($,Firebase) {

	return {
		 createSnapshot: function(libraryRef, callback) {
			libraryRef.on("value", function(libraryRef) {
				var librarySnapshot = libraryRef.val();
				
				// Add UID as key/value in item
				for (var song in librarySnapshot) {
					librarySnapshot[song].UID = song;
				}

				// Return snapshot on database change
				callback(librarySnapshot);
				console.log("librarySnapshot",librarySnapshot);
				// return librarySnapshot;
			 },
			function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			}); 
		}
	};
});