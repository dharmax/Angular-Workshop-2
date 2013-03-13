'use strict';

/* Directives */

angular.module('myApp.directives', [])

.directive('medialocator', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl:"partials/components/medialocator.html"
	};

})
.directive('playlist', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: "partials/components/playlist.html"
	};
});

