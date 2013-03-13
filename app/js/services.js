'use strict';

/* Services */



angular.module('myApp.services', {
  setup: function() {
    // setup for module name 
  },
  teardown: function() {
    //teardown for module name
  }
}).factory('YouTubeService', function() {

	var dummyData= [
		{ title: "item1", url:"bla1"},
		{ title: "item2", url:"bla2"},
		{ title: "item3", url:"bla3"},
		{ title: "item4", url:"bla4"},
	]
	var service = {
		search: function(query) {
			// mock
			return dummyData;
		}
	};
	return service;
});
