app.directive("navigation", function() {
	return {
		restrict: "E",
		templateUrl: "./partials/Navigation.html",
		transclude: true,
		controller: function() {
			this.tab = 1;

			this.isSet = function(checkTab) {
				return this.tab === checkTab;
			};

			this.setTab = function(activeTab) {
				this.tab = activeTab;
			};
		},
		controllerAs: "navCtrl"
	};
});