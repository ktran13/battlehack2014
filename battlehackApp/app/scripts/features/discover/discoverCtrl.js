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
  var discoverCtrl = function ($log, $scope, paypalService, sharethisService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $log.debug(paypalService.test());
    $log.debug(sharethisService.test());

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    'paypalService',
    'sharethisService',
    discoverCtrl
  ]);

})();
