'use strict';

/* Controllers */


function MyController($scope, YouTubeService) {
	$scope.queryString = "";
	$scope.playlistItems = [];
	$scope.queryResults = [];
	$scope.$watch('queryString', function(queryString) {
		$scope.queryResults = YouTubeService.search($scope.queryString);
	});
	$scope.moveToList = function(video) {
		$scope.playlistItems.push(video);
		angular.copy($scope.queryResults, $scope.queryResults);
		// var qr= $scope.queryResults;
		// for (var i=0; i < $scope.queryResults.length(); i++) {
		// 	if ( $scope.queryResults[i] === video) {
		// 		$scope.queryResults.splice(i,1);
		// 		break;
		// 	}
		// }

	};
	$scope.play = function(url) {
		alert("will play " + url);
	}

}
