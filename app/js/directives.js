
/* Directives */

angular.module('myApp.directives', [])
	.directive('videothumb', function() {
	return {
		scope: {
			data: "=data"
		}, 
		restrict: 'E', 
		templateUrl: 'partials/components/videothumb.html',
		transclude: true,
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
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			entries: "=data",
			droptarget: "@"
		},
		templateUrl: "partials/components/playlist.html",
		link: function($scope, element, attr) {
			if (attr.droptarget) {
				element.bind("dragover", function(event) {
					element.addClass("drag-over");
					event.preventDefault();
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
				$element.removeClass("drag-over");
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
		template: "<div>" 
			+ "<div class='zippy_toggle zippy_{{closed}}' ng-click='toggle()'>{{title}}</div>" + "<div ng-hide='closed' ng-transclude></div>" 
			+ "</div>",
		controller: function($scope) {
			$scope.closed = false;
			$scope.toggle = function() {
				$scope.closed = !$scope.closed;
			};
		}
	};
});
