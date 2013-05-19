/* Services */



angular.module('myApp.services', {
	// note this optional methods
	setup: function() {
		// setup for module name 
	},
	teardown: function() {
		//teardown for module name
	}
}).factory('YouTubeService', function($http, $q) {

	var service = {
		search: function(query) {
			var deffered = $q.defer();
			// note the JSON_CALLBACK at the end: angular's $http populates it. Mind the uppercase.
			var url = 'http://gdata.youtube.com/feeds/videos?vq=' + query + 
				'&max-results=8&alt=json-in-script' +
				'&orderby=relevance' +'&sortorder=descending&format=5&fmt=18'+
				'&callback=JSON_CALLBACK';

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
