(function() {
'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battlehackApp
 */
  var controllerId = 'MainCtrl';
  var mainCtrl = function ($log, $scope, dataService, paypalService, sharethisService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $log.debug(paypalService.getAuthToken());

    paypalService.getAuthToken();

    $log.debug(sharethisService.test());

    $log.debug(dataService.test());

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    'dataService',
    'paypalService',
    'sharethisService',
    mainCtrl
  ]);

})();
