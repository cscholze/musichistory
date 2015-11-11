define(["jquery","firebase"], function($,Firebase) {
	return function(event,songs) {
		console.log("songFilter called for: ",songs);
		
		// Filter by title
		var titleInput = $("[list=\"titles\"]").val();
		console.log("titleInput",titleInput);
	};
});

