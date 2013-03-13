'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: MyCtrl1});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
