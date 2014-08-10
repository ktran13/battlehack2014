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
  var mainCtrl = function ($log, $scope, $window, dataService, paypalService, sharethisService, localStorageService) {

    var mainCtrl = this;

    paypalService.getAuthToken();

    mainCtrl.donate = function(merchantId, amount) {
      paypalService.setupPayment(merchantId, amount).then(function(data) {
        $log.debug('successfully submitted');
        $log.debug(data);
        var confirmUrl = _.find(data.links, {'rel':'approval_url'}).href;
        var executeUrl = _.find(data.links, {'rel':'execute'}).href;
        localStorageService.add('approve', confirmUrl);
        localStorageService.add('execute', executeUrl);
        $log.debug(localStorageService.get('approve'));
        $log.debug(localStorageService.get('execute'));

        mainCtrl.showApproveButton = true;
        mainCtrl.approve = function() {
          $window.location.href = confirmUrl;
        };

      }, function(error) {
        $log.debug(error);
        $log.debug('error');
      });
    };

    $log.debug(sharethisService.test());

    $log.debug(dataService.test());

  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    '$window',
    'dataService',
    'paypalService',
    'sharethisService',
    'localStorageService',
    mainCtrl
  ]);

})();
