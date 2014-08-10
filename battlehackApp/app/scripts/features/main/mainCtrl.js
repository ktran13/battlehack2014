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

    var mainCtrl = this;

    paypalService.getAuthToken();

    mainCtrl.donate = function(merchantId, amount) {
      paypalService.setupPayment(merchantId, amount).then(function() {
        $log.debug('donating!');
        //localStorageService.add('donate', )
        $location.url('/profile?donate=true');
      });
    };

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
