var app = angular.module('angularjs-starter', []);

app.factory( 'Db', function() {

  var db = {};
  var localdb = localStorage.app_db;
  var defaultItems = [ 
    { name: "Mr. Smith", gender: "male", occupation: "secret agent"},
    { name: "Mrs. Smith", gender: "female", occupation: "secret agent"},
    { name: "Harry Seldon", gender: "male", occupation: "fortune teller"},
    { name: "Barak Obamba", gender: "male", occupation: "trouble maker"}
    ];
    
  var items = localdb ? JSON.parse(localdb) : null;
  
  items = items || defaultItems;
  
  db.getItems = function() { return items; };
  db.add = function(item){ 
    items.push(item);
    updateLocalDB();
  };
  
  function updateLocalDB() {
    localStorage["app_db"] = JSON.stringify(items);
  }
  db.clear = function() {
    items = [];
    updateLocalDB();
  };
  return db;
});

app.controller('MainCtrl', function($scope, Db) {
  $scope.items = function() {
    return Db.getItems();
  };
  $scope.addEntry = function() {
    Db.add( {name: $scope.name, gender:$scope.gender, occupation:$scope.occupation});
  };
  $scope.clear = function() {
    Db.clear();
  };
});