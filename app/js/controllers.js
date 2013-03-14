'use strict';

/* Controllers */


function MyController($scope, YouTubeService) {
	$scope.queryYouTube = function() {
		var result = YouTubeService.search($scope.queryString);
		return result;
	};
	$scope.queryString = "";
	$scope.play = function(url) {
		alert("will play " + url);
	}

}
