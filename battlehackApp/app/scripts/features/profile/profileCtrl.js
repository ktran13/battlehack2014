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

    profileCtrl.donation = {};

    profileCtrl.donate = function(donationForm) {
      if(donationForm.$valid) {
        var merchantId = 123;
        var amount = profileCtrl.donation.donationAmount;
        var merchant = 'fund name';
        paypalService.setupPayment(merchant, merchantId, amount).then(function(data) {
          $log.debug('successfully donated');
          $log.debug(data);
          profileCtrl.showDonateButton = false;
          profileCtrl.showApproveButton = true;
        });
      } else {
        donationForm.donationAmount.$dirty = true;
        donationForm.donationAmount.$invalid = true;
      }
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
