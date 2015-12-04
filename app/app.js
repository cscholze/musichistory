	var app = angular.module("MusicHistoryApp", ['ngRoute','firebase']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/songs-list', {
	        templateUrl: 'partials/song-list.html',
	        controller: 'SongsCtrl'
	      })
	      .when('/profile', {
	      	templateUrl: 'partials/profile.html',
	      	controller: ""
	      })
	      .otherwise({
	      	redirectTo: '/navigation'
	      });
	  }]);

