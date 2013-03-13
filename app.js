angular.module('components', [])
  .directive( 'user', function() {
    return {
      restrict:'ECA',
      scope:false,
      transclude: true,
      template:"<div class='info'> <div class='orange circle' ng-transclude> </div> <img src='{{marked.imageUrl}}'/>{{marked.name}}</div>",
      link: function(scope, element, attrs,controller) {
          element.bind("click", function() {
            alert(scope.marked.occupation);
          });

      }
    };
  })
    .directive("tooltip", function() {
      return {
        restrict: 'A',
        transclude: true,
        scope: {
          title:"@title",
        },
        template:"<div>"+
          "<div ng-show='showTooltip' class='info tooltip {{animation}}'>"+
            "{{title}}"+
          "</div>"+
          "<div ng-transclude></div>"+
        "</div>",
        link: function(scope,element,attrs,controller) {
          scope.showTooltip = false;
          element.bind("mouseover", function() {
            scope.$apply( "showTooltip=true");
            scope.$apply("animation='fade-in'");
          });
          element.bind("mouseleave", function() {
            scope.$apply( "showTooltip=false");
          });
        }



      }
    });

var app = angular.module('angularjs-starter', ['components']);

app.factory( 'Db', function() {

  var db = {};
  var items = [ 
    { name: "Mr. Smith", gender: "male", occupation: "secret agent", imageUrl:"http://t3.gstatic.com/images?q=tbn:ANd9GcTFs9fRwPmz9ByS5aWk08IPJXATqKvR-J0dT1qFcD2HCefie6g6"},
    { name: "Mrs. Smith", gender: "female", occupation: "secret agent", imageUrl:"http://t3.gstatic.com/images?q=tbn:ANd9GcTFs9fRwPmz9ByS5aWk08IPJXATqKvR-J0dT1qFcD2HCefie6g6"},
    { name: "Harry Seldon", gender: "male", occupation: "fortune teller", imageUrl:"http://t3.gstatic.com/images?q=tbn:ANd9GcTFs9fRwPmz9ByS5aWk08IPJXATqKvR-J0dT1qFcD2HCefie6g6"},
    { name: "Barak Obamba", gender: "male", occupation: "trouble maker", imageUrl:"http://t3.gstatic.com/images?q=tbn:ANd9GcTFs9fRwPmz9ByS5aWk08IPJXATqKvR-J0dT1qFcD2HCefie6g6"}
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
