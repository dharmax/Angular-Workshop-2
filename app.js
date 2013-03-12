var app = angular.module('angularjs-starter', []);

app.factory( 'Db', function() {

  var db = {};
  var items = [ 
    { name: "Mr. Smith", gender: "male", occupation: "secret agent"},
    { name: "Mrs. Smith", gender: "female", occupation: "secret agent"},
    { name: "Harry Seldon", gender: "male", occupation: "fortune teller"},
    { name: "Barak Obamba", gender: "male", occupation: "trouble maker"}
    ];
  db.getItems = function() { return items; };
  db.add = function(item){ 
    items.push(item);
  };
  
  return db;
});

app.controller('MainCtrl', function($scope, Db) {
  $scope.items = Db.getItems;
  $scope.addEntry = function() {
    Db.add( {name: $scope.name, gender:$scope.gender, occupation:$scope.occupation});
  };
  $scope.updateInfo = function(item) {
    $scope.marked= item;
  };
  $scope.occupations=[ 
    {id: "secret-agent"},
    {id: "assasin"},
    {id: "zombie-hunter"}
  ];
});