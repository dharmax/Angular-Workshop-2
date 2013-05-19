'use strict';

/* Controllers */


function MyController($scope, YouTubeService) {
	$scope.queryString = "";
	$scope.playlistItems = [];
	$scope.queryResults = [];
	$scope.$watch('queryString', function(queryString) {
		$scope.queryResults = YouTubeService.search($scope.queryString);
	});
	$scope.$on('playVideo', function(event, url) {
		var video_id = url.split('v=')[1];
		var ampersandPos = video_id.indexOf('&');
		if (ampersandPos != -1) {
			$scope.videoId = video_id.substring(0, ampersandPos);
			$scope.nowPlaying = true;
		}
	})

}