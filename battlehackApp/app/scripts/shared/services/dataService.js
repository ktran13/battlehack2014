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
  .service('dataService', function ($log, $http, Restangular) {

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

    var getDatabase = function() {
      $log.debug('got database call');
      return Restangular.one('QueryServlet').get();
    };

  	return {
  		test: test,
      getDatabase: getDatabase
  	};

  });




})();

