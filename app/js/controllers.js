'use strict';

/* Controllers */

var controllers = {};

/* functional page controllers */

controllers.AppController = function ($scope, localize) {
    $scope.setEnglishLanguage = function () {
        localize.setLanguage('en-US');
    }

    $scope.setFrenchLanguage = function () {
        localize.setLanguage('fr-XX');
    }

    $scope.setDutchLanguage = function () {
        localize.setLanguage('be-NL');
    }

}

controllers.HomeController = function ($scope) {
    //functions
    $scope.fetchPlayers = function () {
        $http.get($scope.url).then(function (result) {
            $scope.playersList = result.data;
        });
    };
    $scope.setActive = function (idx) {
        $scope.playersList[idx].active = true;
    };

    //init
    $scope.url = 'data/players.json';
    $scope.playersList = [];
    $scope.fetchPlayers();
}

controllers.TweetController = function ($scope, $http, twitterFactory) {
    $scope.tweets = [];
    init();

    function init() {
        twitterFactory.fetchTimeLine().success(function(data){
            $scope.tweets = data;
            console.log($scope.tweets);
        });
    }
}

controllers.StatsController = function ($scope, $routeParams, playerFactory) {
    $scope.playerId = $routeParams.playerId;
    $scope.players = [];
    init();

    function init() {
        $scope.players = playerFactory.getPlayers();
    }

    $scope.addPlayer = function () {
        $scope.players.push(
            { name: $scope.newPlayer.name, team: $scope.newPlayer.team, score: $scope.newPlayer.score});
    };
}

controllers.TestController = function ($scope, $http) {
    $scope.url = 'data/players.json';
    $scope.playersList = [];

    $scope.fetchPlayers = function () {
        $http.get($scope.url).then(function (result) {
            $scope.playersList = result.data;
        });
    };

    $scope.fetchPlayers();


    $scope.slides = [];
    $scope.slides.push({text: 'fellaini', image: 'img/players/fellaini.jpg'});
    $scope.slides.push({text: 'cats!', image: 'http://placekitten.com/301/200'});
    $scope.slides.push({text: 'cats!', image: 'http://placekitten.com/302/200'});
    $scope.slides.push({text: 'kompany', image: 'img/players/kompany.jpg'});
    $scope.slides.push({text: 'lukaku', image: 'img/players/lukaku.jpg'});

    $scope.setActive = function (idx) {
        $scope.slides[idx].active = true;
    }

};

controllers.ContactPublicityController = function ($scope) {

}

/* general controllers */

controllers.HeadController = function ($scope) {
}

controllers.HeaderController = function ($scope) {
    $scope.labels =
    {
        "dutch": "NL",
        "french": "FR",
        "english": "EN"
    };
}

controllers.ContainerController = function ($scope) {
}

controllers.FooterController = function ($scope) {
}

beFootInt.controller(controllers);