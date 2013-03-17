'use strict';

/* Controllers */


function MyController($scope, YouTubeService) {
	$scope.queryString = "";
	$scope.playlistItems = [];
	$scope.queryResults = [];
	$scope.$watch('queryString', function(queryString) {
		var resultsPromise = YouTubeService.search($scope.queryString);
		resultsPromise.then( function( results) {
			$scope.queryResults = results;
		});
	});
	$scope.moveToList = function(video) {
		$scope.playlistItems.push(video);
		var qr= $scope.queryResults;
		for (var i=0; i < qr.length; i++) {
			if ( qr[i] === video) {
				qr.splice(i,1);
				break;
			}
		}

	};
	$scope.play = function(url) {
		alert("will play " + url);
	}

}
