'use strict';

/* Directives */

angular.module('myApp.directives', [])
	.directive('videothumb', function() {
	// Runs during compile. See the commented out options for an overview
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			data: "=data"
		}, // {} = isolate, true = child, false/undefined = no change
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'partials/components/videothumb.html',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		controller: function($scope, $element, $rootScope) {
			$scope.play = function(url) {
				$rootScope.$broadcast("playVideo", url);
			};
			$element.bind('dragstart', function(ev) {
				$rootScope.draggedVideo = $scope.data;
			});
		},
	};
})

	.directive('medialocator', function() {
	// a directive which is merely a template
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: "partials/components/medialocator.html",

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
			entries: "=data",
			droptarget: "@"
		},
		templateUrl: "partials/components/playlist.html",
		link: function($scope, element, attr) {
			if (attr.droptarget) {
				element.bind("dragover", function(event) {
					element.addClass("drag-over");
					event.preventDefault();
					//event.dataTransfer.dropEffect="move";
				});
				element.bind("dragleave", function(event) {
					element.removeClass("drag-over");
				});

			}

		},
		controller: function( $scope, $element, $rootScope) {
				$element.bind("drop", function(event) {
					event.preventDefault();
					$scope.$parent.moveToList($rootScope.draggedVideo);
					$scope.$digest();
				});

		}
	};
})
	.directive('zippy', function() {
	return {
		restrict: 'AC',
		replace: false,
		transclude: true,
		scope: {
			title: '@'
		},
		template: "<div>" + "<div class='zippy_toggle zippy_{{closed}}' ng-click='toggle()'>{{title}}</div>" + "<div ng-hide='closed' ng-transclude></div>" + "</div>",
		controller: function($scope) {
			$scope.closed = false;
			$scope.toggle = function() {
				$scope.closed = !$scope.closed;
			};
		}
	};
});
