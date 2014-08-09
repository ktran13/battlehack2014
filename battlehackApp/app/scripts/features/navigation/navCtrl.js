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
  var navCtrl = function ($log, $scope, $rootScope, $location, dataService, paypalService, sharethisService) {
    var navCtrl = this;

    navCtrl.showNav = true;
    
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
    '$scope',
    '$rootScope',
    '$location',
    'dataService',
    'paypalService',
    'sharethisService',
    navCtrl
  ]);

})();
