'use strict';

/* Controllers */


function MyController($scope, YouTubeService) {
	//MyCtrl1.$inject = [];
	$scope.queryYouTube = function() {
		YouTubeService.query($scope.queryString);
	};
	$scope.queryString = "";
}
