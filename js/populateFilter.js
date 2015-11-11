define([""], function() {
	return function(libraryRef) {
			 // Pass snapshot object to HBS plugin to populate DOM
			 // Populate titles data-list
			 require( ['hbs!../templates/songSelect'], function(songSelectTemplate) {
			 	$("#titles").html(songSelectTemplate(libraryRef.val()));
			 	});

			 // Populate artist data-list
			require( ['hbs!../templates/artistSelect'], function(artistSelectTemplate) {
			 	$("#artists").html(artistSelectTemplate(libraryRef.val()));
			 	});
			 
			 // Populate album list
			 require( ['hbs!../templates/albumSelect'], function(albumSelectTemplate) {
			 	$("#albums").html(albumSelectTemplate(libraryRef.val()));
			 	});

			 // Populate genre list
			 require( ['hbs!../templates/genreSelect'], function(genreSelectTemplate) {
			 	$("#genres").html(genreSelectTemplate(libraryRef.val()));
			 	});
	};
});