define(["jquery"],
	function($) {
		return function(event) {
			$(".view-music-tab").removeClass("hidden");
			$(".view-music-tab-btn").addClass("active");
			$(".profile-tab").addClass("hidden");
			$(".profile-tab-btn").removeClass("active");
		};
	}
);