define(["jquery"],
	function($) {
		return function() {
			$(".view-music-tab").addClass("hidden");
			$(".view-music-tab-btn").removeClass("active");
			$(".profile-tab").removeClass("hidden");
			$(".profile-tab-btn").addClass("active");
		};
	}
);