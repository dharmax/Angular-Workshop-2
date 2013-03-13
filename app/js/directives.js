'use strict';

/* Directives */


angular.module('myApp.directives', [])
  
.directive('medialocator', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template:"<div>media locator</div>"
	}

})
.directive('playlist', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template: "<div>playlist</div>"
	}
});
