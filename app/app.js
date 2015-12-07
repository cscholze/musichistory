(function() {
	var app = angular.module("MusicHistoryApp", ['firebase','']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      otherwise('/playlist');
  }]);


})();