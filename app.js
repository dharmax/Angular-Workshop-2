

angular.module('components', [])
  .directive( 'user', function() {
    return {
      restrict:'ECA',
      scope:false,
      transclude: true,
      template:"<div class='info'> <div class='orange circle' ng-transclude> </div>{{marked.name}}</div>",
      link: function(scope, element, attrs,controller) {
          element.bind("click", function() {
            alert(scope.marked.occupation);
          });

      }
    };
  });

var app = angular.module('angularjs-starter', ['components']);

app.factory( 'Db', function() {

  var db = {};
  var items = [ 
    { name: "Mr. Smith", gender: "male", occupation: "secret agent", imageUrl:""},
    { name: "Mrs. Smith", gender: "female", occupation: "secret agent"},
    { name: "Harry Seldon", gender: "male", occupation: "fortune teller"},
    { name: "Barak Obamba", gender: "male", occupation: "trouble maker"},
    { name: "Zina", gender: "female", occupation: "warrior princess"}
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
  
});

