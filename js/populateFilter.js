define(["jquery"], function($) {
	return function(snapshot) {
		 // Pass snapshot object to HBS plugin to populate DOM
		 // Populate titles data-list
		 require( ['hbs!../templates/songSelect'], function(songSelectTemplate) {
		 	$("#titles").html(songSelectTemplate(snapshot));
		 	});

		 // Populate artist data-list
		require( ['hbs!../templates/artistSelect'], function(artistSelectTemplate) {
		 	$("#artists").html(artistSelectTemplate(snapshot));
		 	});
		 
		 // Populate album list
		 require( ['hbs!../templates/albumSelect'], function(albumSelectTemplate) {
		 	$("#albums").html(albumSelectTemplate(snapshot));
		 	});

		 // Populate genre list
		 require( ['hbs!../templates/genreSelect'], function(genreSelectTemplate) {
		 	$("#genres").html(genreSelectTemplate(snapshot));
		 	});
	};
});