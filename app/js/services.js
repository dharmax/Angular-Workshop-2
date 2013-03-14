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
		{ title: "item1", url:"bla1", thumb:"bli"},
		{ title: "item2", url:"bla2", thumb:"bli"},
		{ title: "item3", url:"bla3", thumb:"bli"},
		{ title: "item4", url:"bla4", thumb:"bli"},
	]
	var service = {
		search: function(query) {
			// mock
			return dummyData;
		}
	};
	return service;
});
