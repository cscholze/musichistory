define(["jquery","firebase"], function($,Firebase) {
	return {
		getSnapshot: function() {
			var def = $.Deferred();
			var libraryRef = new Firebase("https://jcs-musichistory.firebaseio.com/library/");
			libraryRef.once("value", function(snapshot) {
				def.resolve(snapshot.val());
			});
			return def.promise();
		}
	};
}); // END songLibrary MODULE
