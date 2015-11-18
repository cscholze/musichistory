define(["jquery"],
	function($) {
		return function(event) {
			console.log("dispAddMusic called");
			$(".view-music-tab").addClass("hidden");
			$(".view-music-tab-btn").removeClass("active");
			$(".profile-tab").addClass("hidden");
			$(".profile-tab-btn").removeClass("active");
			// $(".add-music-tab").removeClass("hidden");
			// $(".add-music-tab-btn").addClass("active");
		};
	}
);