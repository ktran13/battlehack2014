(function() {
'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:profileCtrl
 * @description
 * # MainCtrl
 * Controller of the battlehackApp
 */
  var controllerId = 'profileCtrl';
  var profileCtrl = function ($log, $scope, dataService, paypalService, sharethisService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $log.debug(paypalService.test());
    $log.debug(sharethisService.test());

    $log.debug(dataService.test());

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    'dataService',
    'paypalService',
    'sharethisService',
    profileCtrl
  ]);

})();
