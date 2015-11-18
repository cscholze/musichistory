define(["songLibrary","firebase","jquery"], function(songLibrary,Firebase,$) {
	var Library;
	var FilteredLibrary;

	return function(event) {
	console.log("event",event.target.value);

	$.when( songLibrary.getSnapshot() ).then(function(firebaseSnapshot) {
		Library = firebaseSnapshot;
		for (var song in Library) {
			console.log("song",song);
			
		}
	});

	}; // end return
}); // end define/callback