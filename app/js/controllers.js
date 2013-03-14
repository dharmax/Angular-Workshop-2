'use strict';

/* Controllers */


function MyController($scope, YouTubeService) {
	$scope.queryString = "";
	$scope.playlistItems = [];
	$scope.queryResults = [];
	$scope.$watch('queryString', function(queryString) {
		$scope.queryResults = YouTubeService.search($scope.queryString);
	});

	$scope.play = function(url) {
		alert("will play " + url);
	}

}
