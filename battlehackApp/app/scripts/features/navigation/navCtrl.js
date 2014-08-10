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
  var navCtrl = function ($log, $location, paypalService) {
    var navCtrl = this;

    navCtrl.showNav = true;

    paypalService.getAuthToken();

    navCtrl.donate = function() {
      var merchantId = 'fm';
      $location.url('/profile?id='+merchantId);
    };

    // $rootScope.$on('$routeChangeSuccess', function() {
    //   var location = $location.$$path;
    //   if(location === '/') {
    //     navCtrl.showNav = false;
    //   } else {
    //     navCtrl.showNav = true;
    //   }
    // });

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$location',
    'paypalService',
    'sharethisService',
    navCtrl
  ]);

})();
