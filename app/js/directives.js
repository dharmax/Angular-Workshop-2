'use strict';

/* Directives */

angular.module('myApp.directives', [])
.directive('videothumb', function(){
	// Runs during compile. See the commented out options for an overview
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
		// link: function($scope, iElm, iAttrs, controller) {
		// }
	};
})
.directive('draggable', function() {
	return {
		restrict:'A',
		replace: false,
		transclude: false,
		link: function(scope, element, attrs, controller) {
		  	var options = scope.$eval(attrs.draggable); //allow options to be passed in
      		$(element).draggable(options);
      		var object = {
      			associatedObject: scope.$eval(attrs.passableObject),
      			objectType: attrs.objectType
      		};
      		$(element).prop("dndInfo", object);
      		
		}
	}
}).
directive('droppable', function() {
	// "feature" directive
	return {
		restrict:'A',
		replace: false,
		transclude: false,
		scope: {
			objectType: "@",
			handleDrop:"=dropCb"
		},
		link: function(scope, element, attrs, controller) {
		  	var options = scope.$eval(attrs.draggable); //allow options to be passed in
      		$(element).droppable({
      			drop: function( event, ui) {
      				var dndInfo = ui.draggable.prop('dndInfo');
      				if ( dndInfo.objectType === attrs.acceptingObjects) {
      					scope.handleDrop(dndInfo);
      				}
      			}
      		});
		},
	}
})
.directive('medialocator', function() {
	// a directive which is merely a template
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl:"partials/components/medialocator.html",

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
		templateUrl: "partials/components/playlist.html",
		controller: function( $scope) {
			$scope.handleDrop = function( dndInfo) {
				$scope.$parent.moveToList(dndInfo.associatedObject);
			};
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
			+"<div class='zippy_toggle zippy_{{closed}}' ng-click='toggle()'>{{title}}</div>"
			+"<div ng-hide='closed' ng-transclude></div>"
			+"</div>",
		controller: function($scope) {
			$scope.closed = true;
			$scope.toggle = function() {
				$scope.closed = !$scope.closed;
			}
		}
	};
})
;

