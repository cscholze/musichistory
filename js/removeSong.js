define(["jquery","songLibrary","populatePlaylist"], function($,songLibrary,populatePlaylist) {
	return function(event) {
		if(event.target.className === "glyphicon glyphicon-remove") {
			// **FIND SHORTER WAY TO ACCESS UID ELEMENT**
			console.log(event.target.parentElement.parentElement.lastElementChild.innerHTML);
		UIDtoRemove = event.target.parentElement.parentElement.lastElementChild.innerHTML;
		var songToRemoveRef = new Firebase("https://jcs-musichistory.firebaseio.com/library/"+UIDtoRemove);
		var removeSong = confirm("Are you sure you want to delete this song?");
			if (removeSong === true) {
				songToRemoveRef.remove();
			}
		}
		// Refresh DOM playlist
		$.when( songLibrary.getSnapshot() ).then(function(firebaseSnapshot) {
		populatePlaylist(firebaseSnapshot);
		});	
	};
});