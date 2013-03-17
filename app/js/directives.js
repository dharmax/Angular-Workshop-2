'use strict';

/* Directives */

angular.module('myApp.directives', [])
.directive('videothumb', function(){
	// Runs during compile. See the commented out options
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			data:"=data"
		}, // {} = isolate, true = child, false/undefined = no change
		// cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'partials/components/videothumb.html',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			iElm.bind('mousedown', )
		}
	};
})
.directive('medialocator', function() {
	// a directive which is merely a template
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl:"partials/components/medialocator.html"
	};

})
.directive('playlist', function() {
	// a directive with databinding 
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			// we bind the entries to the attribute
			entries: "=data"
		},
		templateUrl: "partials/components/playlist.html"
	};
})
;

