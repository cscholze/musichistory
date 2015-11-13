define(["jquery","songLibrary"], function($,songLibrary) {
	return function(event) {
		console.log("songFilter called");
		// var artistsInputElement = $("[list=\"artists\"]");
		// var artistsInput = artistsInputElement.val();
		// var titlesInputElement = $("[list=\"titles\"]");
		// var titlesInput = titlesInputElement.val();
		// var albumsInputElement = $("[list=\"albums\"]");
		// var albumsInput = albumsInputElement.val();
		var filteredSongs = {};
		var searchInput = $(".search").val();
		console.log("searchInput",searchInput);
		
		// Perform operations on updated snapshot from songLibrary.js
		$.when( songLibrary.getSnapshot() ).then(function(firebaseSnapshot) {
			var data = firebaseSnapshot;
			for (var key in data) {
				if (searchInput === "") {
					filteredSongs[key] = data[key];
				}
				else if ( data[key].artist === (searchInput) ) {
					filteredSongs[key] = data[key];
				}
				else if ( data[key].album === (searchInput) ){
					filteredSongs[key] = data[key];
				}
				else if ( data[key].name === (searchInput) ) {
					filteredSongs[key] = data[key];
				}
			}
		});
		// Pass object to HBS plugin to populate DOM
		require( ['hbs!../templates/playlist'], function(playlistTemplate) {
			var finalOutput = playlistTemplate(filteredSongs);
			$(".playlist").html(playlistTemplate(filteredSongs));
		});
	};
});

