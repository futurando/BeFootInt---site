'use strict';

var twitterServices = angular.module('twitterServices', []);

/*var bearerToken = function(){

 var consumerKey = encodeURIComponent('EUMLNowykzLRAQsAhGmClg');
 var consumerSecret = encodeURIComponent('lNMq0PUciXdeX6seZwTLoKHeQwiuCXumC7hhRarqE');
 var tokenCredentials = btoa(consumerKey + ':' + consumerSecret);

 return tokenCredentials;
 }*/



/*twitterServices.config(function($httpProvider){
 delete $httpProvider.defaults.headers.common['X-Requested-With'];
 $httpProvider.defaults.headers.post['Authorization'] = 'Basic ' + bearerToken();
 $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 $httpProvider.defaults.headers.post['grant_type'] = 'client_credentials';
 });*/

/*twitterServices.factory('InitTimeline', ['$resource', 'Connect',
 function($resource){
 $scope.accessToken = Connect.accessToken();


 }]);



 //unused due to headers ignored..
 twitterServices.factory('Connect',['$resource',
 function($resource){
 console.log("allo allo");
 return $resource('https://api.twitter.com/oauth2/token',{}, {
 accessToken: {
 method: 'POST', isArray:true, headers:{
 'Authorization':'Basic ' + bearerToken(),
 'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
 'grant_type':"client_credentials"
 }//headers are ignored in this version of angular
 }
 });
 }]);*/

/*var services = {};*/
twitterServices.factory('twitterFactory', function ($http) {
    var factory = {};
    /*var baseUrl = 'https://api.twitter.com/';*/
    var baseUrl = 'http://localhost:8080/api/tweets/';

    var mapTweets = function (data) {
        var tweets = [];

        for (var i = 0; i < data.length; i++) {
            tweets[i] = {};
            tweets[i].id = data[i].id;
            tweets[i].text = data[i].text;
            tweets[i].fromUser = data[i].fromUser;
            tweets[i].profileImageUrl = data[i].profileImageUrl;
            console.log(tweets[i].text);
        }
        console.log(data[0]);

        return tweets;
    }


    var bearerToken = function () {
        var consumerKey = encodeURIComponent('****');
        var consumerSecret = encodeURIComponent('****');
        var tokenCredentials = btoa(consumerKey + ':' + consumerSecret);

        return tokenCredentials;
    };

    factory.fetchAccessToken = function (scope) {
        var url = baseUrl + "oauth2/token";
        var headers = {
            'Authorization': 'Basic ' + bearerToken(),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        };
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        $http({method: 'POST', url: oAuthurl, headers: headers, data: 'grant_type=client_credentials'}).
            success(function (data, status) {
                scope.status = status;
                scope.data = data;
            }).
            error(function (data, status) {
                scope.status = status;
                scope.data = data || "Request failed";
            });
    };

    factory.fetchTimeLine = function () {
        var url = baseUrl + "tweets";
        var tweets = [];
        delete $http.defaults.headers.common['X-Requested-With'];

        return $http({method: 'GET', url: url});
            /*success(function (data, status) {
                return data;
                *//*tweets = mapTweets(data);*//*
            }).
            error(function (data, status) {
                //TODO
                return data;
            });*/
    };
    return factory;
});


// Demonstrate how to register services
// In this case it is a simple value service.

// angular.module('myApp.services', []).
//   value('version', '0.1');


/*beFootInt.service(services);*/
