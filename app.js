var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
  $scope.fontSize="2em";
  $scope.items = [ 
    { name: "Mr. Smith", gender: "male", occupation: "secret agent"},
    { name: "Mrs. Smith", gender: "female", occupation: "secret agent"},
    { name: "Harry Seldon", gender: "male", occupation: "fortune teller"},
    { name: "Barak Obamba", gender: "male", occupation: "trouble maker"}
    ];
    
  
});