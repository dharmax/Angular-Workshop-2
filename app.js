var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.fontSize = '5em';
});