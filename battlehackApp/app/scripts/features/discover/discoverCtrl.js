(function() {
	'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:DiscoverCtrl
 * @description
 * # AboutCtrl
 * Controller of the battlehackApp
 */
  var controllerId = 'DiscoverCtrl';
  var discoverCtrl = function ($log, $scope, dataService, paypalService, sharethisService) {

    var discoverCtrl = this;
    discoverCtrl.isCollapsed = false;
    $log.debug(paypalService.test());
    $log.debug(sharethisService.test());

    dataService.getDatabase().then(function(data) {
      discoverCtrl.nonprofits = data.results;
      $log.debug(data.results[0]);
      $log.debug('success!');

    }, function(error) {
      $log.debug('error!');
      $log.debug(error);
    });


  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    'dataService',
    'paypalService',
    'sharethisService',
    discoverCtrl
  ]);

})();
