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
  var mainCtrl = function ($log, $scope, $location, $window, dataService, paypalService, sharethisService) {

    //var mainCtrl = this;

    $log.debug(sharethisService.test());

    $log.debug(dataService.test());

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    '$location',
    '$window',
    'dataService',
    'paypalService',
    'sharethisService',
    mainCtrl
  ]);

})();
