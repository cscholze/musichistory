app.controller("AddMusicCtrl", function($firebaseArray) {
	var ref = new Firebase("https://jcs-musichistory.firebaseio.com/library");
  this.songs = $firebaseArray(ref);

  this.newSong = { artist: "", album: "", title: ""};
  console.log("this.songs",this.songs);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  this.addSong = function() {
  	console.log("addingSong",this.newSong);
    this.songs.$add({
      artist: this.newSong.artist,
      title: this.newSong.title,
      album: this.newSong.album
    });
    this.newSong = {
    	artist: "",
    	album: "",
    	title: ""
    }
  };
});