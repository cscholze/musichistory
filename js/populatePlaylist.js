define(["jquery"], function($) {
	return function(snapshot) {
		// Pass snapshot object to HBS plugin to populate DOM
		require( ['hbs!../templates/playlist'], function(playlistTemplate) {
			$(".playlist").html(playlistTemplate(snapshot));
		});
	};
});