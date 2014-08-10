(function() {
	'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.service:dataService
 * @description
 * # dataService
 * Service of the battlehackApp
 */
angular.module('battlehackApp')
  .service('dataService', function ($log, $http, Restangular, localStorageService) {

    var nonprofits = null;

  	var test = function() {
  		  // var url = '/jsondata/blank.json';
      //   // request the resource file
      //   $http({
      //     method: 'GET',
      //     url: url,
      //     cache: false
      //   }).success(function(data) {
      //   	$log.debug(data);
      //   	$log.debug('got the file');
      //   });

  		return 'data test';
  	};

    var getNonprofit = function(id) {
      return Restangular.one('QueryServlet').get({'id': id});
    };

    var getDonationName = function() {
      return localStorageService.get('donationName');
    };

    var getDatabase = function() {
      $log.debug('got database call');
      return Restangular.one('QueryServlet').get().then(function(data) {
        return data;
      }, function(error) {
        $log.debug('error loading non profit data...');
      });
    };

  	return {
  		test: test,
      getDatabase: getDatabase,
      getNonprofit: getNonprofit,
      getDonationName: getDonationName
  	};

  });




})();
