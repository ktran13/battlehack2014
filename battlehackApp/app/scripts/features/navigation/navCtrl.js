(function() {
'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:navCtrl
 * @description
 * # navCtrl
 * Controller of the battlehackApp
 */
  var controllerId = 'NavCtrl';
  var navCtrl = function ($log, $rootScope, $location, paypalService) {
    var navCtrl = this;

    navCtrl.showNav = true;

    paypalService.getAuthToken();

    navCtrl.donate = function() {
      var merchantId = 'fm';
      $location.url('/profile?id='+merchantId);
    };

    $rootScope.$on('$routeChangeSuccess', function() {
      var location = $location.$$path;
      if(location === '/') {
        navCtrl.showBackground = true;
      } else {
        navCtrl.showBackground = false;
      }
    });

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$rootScope',
    '$location',
    'paypalService',
    navCtrl
  ]);

})();
