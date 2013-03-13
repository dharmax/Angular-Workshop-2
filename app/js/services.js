'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');


angular.module('myApp.services', {
  setup: function() {
    // setup for module name 
  },
  teardown: function() {
    //teardown for module name
  }
}).factory('YouTubeService', function() {

	return {
		search: function(query) {
			return ["asdasd"];
		}
	};

});
