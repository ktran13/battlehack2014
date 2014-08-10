(function() {
'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:confirmCtrl
 * @description
 * # confirmCtrl
 * Controller of the battlehackApp
 */
  var controllerId = 'ConfirmCtrl';
  var confirmCtrl = function ($log, $scope, $window, $location, $routeParams, dataService, paypalService) {

    var confirmCtrl = this;

    paypalService.getAuthToken();

    $log.debug($routeParams);
    var confirmed = $routeParams.confirm;
    confirmCtrl.payerId = $routeParams.PayerID;
    confirmCtrl.amount = $routeParams.amount;
    $log.debug(confirmCtrl.payerId);

    if(confirmed) {
      confirmCtrl.showExecuteButton = true;
      confirmCtrl.donationName = dataService.getDonationName();
    }

    confirmCtrl.execute = function(payerId) {
      paypalService.executePayment(payerId).then(function(data) {
        $log.debug('success in payment');
        $log.debug(data);
        confirmCtrl.purchasingdata = data;
        confirmCtrl.showExecuteButton = false;
        confirmCtrl.showThankyouView = true;
      }, function(error) {
        $log.debug(error);
        $log.debug('error executing payment');
      });
    };

    confirmCtrl.discover = function() {
      $location.path('/search');
    };

    confirmCtrl.viewPast = function() {
      $window.location.href = 'https://www.sandbox.paypal.com/us/cgi-bin/webscr?cmd=_history';
    };

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    '$window',
    '$location',
    '$routeParams',
    'dataService',
    'paypalService',
    confirmCtrl
  ]);

})();
