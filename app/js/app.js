'use strict';

beFootInt.config(function($routeProvider) {
		$routeProvider
		.when('/',
			{
				templateUrl: 'partials/home',
				controller: 'HomeController'
			})
		.when('/tweets',
			{
				templateUrl: 'partials/twitter/timeline',
				controller: 'TweetController'
			})
		.when('/stats',
			{
				templateUrl: 'partials/stats',
				controller: 'StatsController'
			})
		.when('/unknown',
			{
                templateUrl: 'partials/tests/angular_carousel',
				controller: 'TestController'
			})
		.when('/stats/:playerId',
			{
				templateUrl: 'partials/player-detail',
				controller: 'StatsController'
			})
		.when('/contact/publicity',
			{
				templateUrl: 'partials/contact/publicity',
				controller: 'ContactPublicityController'
			})
		.otherwise({redirectTo: '/'});
	});


// Declare app level module which depends on filters, and services
//angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
//  config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//    $routeProvider.otherwise({redirectTo: '/view1'});
//  }]);
