define(["jquery","songLibrary"], function($,songLibrary) {
	return function(event) {
		var artistsInputElement = $("[list=\"artists\"]");
		var artistsInput = artistsInputElement.val();
		var titlesInputElement = $("[list=\"titles\"]");
		var titlesInput = titlesInputElement.val();
		var albumsInputElement = $("[list=\"albums\"]");
		var albumsInput = albumsInputElement.val();
		var filteredSongs = {};
		
		// Perform operations on updated snapshot from songLibrary.js
		$.when( songLibrary.getSnapshot() ).then(function(firebaseSnapshot) {
			var data = firebaseSnapshot;
			for (var key in data) {
				
				console.log(artistsInput);
				if ( data[key].artist === artistsInput) {
					if ( data[key].album === albumsInput ) {
						if ( data[key].name === titlesInput ) {
							filteredSongs[key] = data[key];
						}
					}
				}
			}
		});
		console.log("filteredSongs",filteredSongs);

		// Pass object to HBS plugin to populate DOM
		require( ['hbs!../templates/playlist'], function(playlistTemplate) {
			var finalOutput = playlistTemplate(filteredSongs);
			console.log("finalOutput",finalOutput);
			$(".playlist").html(finalOutput);
		});
	};
});

