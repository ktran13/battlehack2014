'use strict';

/**
 * @ngdoc overview
 * @name battlehackApp
 * @description
 * # battlehackApp
 *
 * Main module of the application.
 */
angular
  .module('battlehackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.bootstrap',
    'angular-local-storage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as mainCtrl'
      })
      .when('/search', {
        templateUrl: 'views/discover.html',
        controller: 'DiscoverCtrl as discoverCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl as contactCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl as profileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('bh');
  }])
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://fundmatch.org:8080/FundMatchAPI/v1/');
  });

