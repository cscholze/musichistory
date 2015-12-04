app.controller("SongsCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://jcs-musichistory.firebaseio.com/library");
  $scope.songs = $firebaseArray(ref);
  console.log("$scope.songs",$scope.songs);
});