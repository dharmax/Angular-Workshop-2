'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [ 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: MyController});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller:null});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
