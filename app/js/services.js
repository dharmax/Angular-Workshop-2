'use strict';

/* Services */



angular.module('myApp.services', {
	setup: function() {
		// setup for module name 
	},
	teardown: function() {
		//teardown for module name
	}
}).factory('YouTubeService', function($http, $q) {

	var dummyData = [{
		title: "item1",
		url: "bla1",
		thumb: "bli"
	}, {
		title: "item2",
		url: "bla2",
		thumb: "bli"
	}, {
		title: "item3",
		url: "bla3",
		thumb: "bli"
	}, {
		title: "item4",
		url: "bla4",
		thumb: "bli"
	}];

	var service = {
		search: function(query) {
			var deffered = $q.defer();
			var url = 'http://gdata.youtube.com/feeds/videos?vq=' + query + 
				'&max-results=8&alt=json-in-script' +
				'&orderby=relevance' +'&sortorder=descending&format=5&fmt=18'+
				'&callback=JSON_CALLBACK';

			//var url = "https://gdata.youtube.com/feeds/api/videos?q="+query+"&orderby=published&start-index=11&max-results=10&v=2callback=JSON_CALLBACK";
			$http.jsonp(url).success(function(data) {

				var results = [];
				var feed = data.feed;
				var entries = feed.entry || [];
				for (var i = 0; i < entries.length; i++) {
					var entry = entries[i];
					results.push( {
						title:entry.title.$t,
						thumb:	entry.media$group.media$thumbnail[0].url,
						url: entry.media$group.media$player[0].url,

					});
				}


				console.log("----results: " + data);
				deffered.resolve(results);
			});

			return deffered.promise;
		}
	};
	return service;
})

;