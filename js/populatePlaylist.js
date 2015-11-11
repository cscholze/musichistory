define(["jquery","firebase"], function($,Firebase) {
	return function(libarySnapshot) {
		// Pass snapshot object to HBS plugin to populate DOM
		require( ['hbs!../templates/playlist'], function(playlistTemplate) {
			$(".playlist").html(playlistTemplate(librarySnapshot));
		});
	};
});