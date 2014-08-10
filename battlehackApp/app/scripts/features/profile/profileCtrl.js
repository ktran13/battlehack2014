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
  var profileCtrl = function ($log, $scope, $window, $routeParams, dataService, paypalService, sharethisService) {
    var profileCtrl = this;
    
    $log.debug(sharethisService.test());
    $log.debug(dataService.test());

    var donateYes = $routeParams.donate;
    if(donateYes) {
      profileCtrl.showApproveButton = true;
    } else {
      profileCtrl.showDonateButton = true;
    }

    var merchant = $routeParams.id;
    $log.debug(merchant);
    if(merchant) {
      dataService.getNonprofit(merchant).then(function(data) {
        profileCtrl.nonprofit = data.results[0];
      });
    }

    var nineNinty = $routeParams.nineNinty;
    $log.debug(nineNinty);
    if(nineNinty) {
      profileCtrl.showApproveButton = false;
      profileCtrl.showDonateButton = false;
      dataService.getNineNinty(nineNinty).then(function(data) {
        profileCtrl.nonprofit = data.nine90results[0];
      });
      profileCtrl.showConfirmEditView = true;
      profileCtrl.showConfirm = true;
    }

    profileCtrl.approve = function() {
      var approveUrl = paypalService.getApprovedUrl();
      $window.location.href = approveUrl;
    };

    profileCtrl.donation = {};

    profileCtrl.donate = function(donationForm) {
      if(donationForm.$valid) {
        var merchantId = 123;
        var amount = profileCtrl.donation.donationAmount;
        var merchant = profileCtrl.nonprofit.name;
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

    profileCtrl.confirmedInfo = function() {
      profileCtrl.showConfirm = false;
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
    profileCtrl
  ]);

})();
