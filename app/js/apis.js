/**
 * Created by cazamundo on 16-10-13.
 */
'use strict';

var apis = angular.module('apis', ['ngResource']);

apis.factory('twitter', function($resource,$http){
    var consumerKey = encodeURIComponent('EUMLNowykzLRAQsAhGmClg')
    var consumerSecret = encodeURIComponent('lNMq0PUciXdeX6seZwTLoKHeQwiuCXumC7hhRarqE')
    var credentials = Base64.encode(consumerKey + ':' + consumerSecret)
    // Twitters OAuth service endpoint
    var twitterOauthEndpoint = $http.post(
        'https://api.twitter.com/oauth2/token'
        , "grant_type=client_credentials"
        , {headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
    )
    twitterOauthEndpoint.success(function (response) {
        // a successful response will return
        // the "bearer" token which is registered
        // to the $httpProvider
        serviceModule.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
    }).error(function (response) {
            // error handling to some meaningful extent
        })

    var r = $resource('https://api.twitter.com/1.1/search/:action',
        {action: 'tweets.json',
            count: 10,
        },
        {
        <span style="line-height: 1.5;">                    paginate: {method: 'GET'}</span>
        })

    return r;
    })
