'use strict';

/* Directives */

angular.module('myApp.directives', [])
.directive('videothumb', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			data:"=data"
		}, // {} = isolate, true = child, false/undefined = no change
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'partials/components/videothumb.html',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		//link: function($scope, iElm, iAttrs, controller) {}
		controller: function($scope, $rootScope) {
			$scope.play = function(url) {
				$rootScope.$broadcast("playVideo", url);
			};
		},
	};
})
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
		scope: {
			entries: "=data"
		},
		templateUrl: "partials/components/playlist.html"
	};
})
;

