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
  var profileCtrl = function ($log, $scope, $window, $routeParams, dataService, paypalService, sharethisService, localStorageService) {
    var profileCtrl = this;
    
    $log.debug(sharethisService.test());
    $log.debug(dataService.test());

    var donateYes = $routeParams.donate;
    if(donateYes) {
      profileCtrl.showApproveButton = true;
    } else {
      profileCtrl.showDonateButton = true;
    }

    profileCtrl.approve = function() {
      var approveUrl = localStorageService.get('approve');
      $window.location.href = approveUrl;
    };

    profileCtrl.donate = function(merchantId, amount) {
      paypalService.setupPayment(merchantId, amount).then(function(data) {
        $log.debug('successfully donated');
        $log.debug(data);
        profileCtrl.showDonateButton = false;
        profileCtrl.showApproveButton = true;
      });
    };

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    '$window',
    '$routeParams',
    'dataService',
    'paypalService',
    'sharethisService',
    'localStorageService',
    profileCtrl
  ]);

})();
