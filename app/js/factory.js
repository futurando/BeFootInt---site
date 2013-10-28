'use strict';

var factories = {};

factories.playerFactory = function() {
	var factory = {};
	var players = [ {
		name : 'Eden Hazard',
		team : 'Chelsea',
		score : '9,6'
	}, {
		name : 'Thibault Courtois',
		team : 'Atletico Madrid',
		score : '6,4'
	}, {
		name : 'Moussa Dembele',
		team : 'Tottenham',
		score : '7,4'
	} ];
	factory.getPlayers = function() {
		//ajax call here
		return players;
	};
	return factory;
};


beFootInt.factory(factories);