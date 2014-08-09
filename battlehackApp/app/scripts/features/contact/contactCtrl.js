(function() {
'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:contactCtrl
 * @description
 * # contactCtrl
 * Controller of the battlehackApp
 */
  var controllerId = 'contactCtrl';
  var contactCtrl = function ($log, $scope, dataService, paypalService, sharethisService) {

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
    contactCtrl
  ]);

})();
