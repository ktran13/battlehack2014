(function() {
	'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:DiscoverCtrl
 * @description
 * # AboutCtrl
 * Controller of the battlehackApp
 */
  var controllerId = 'DiscoverCtrl';
  var discoverCtrl = function ($log, $scope, dataService, paypalService, sharethisService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var discoverCtrl = this;

    discoverCtrl.friends = [{name:'John', phone:'555-1276'},
                         {name:'Mary', phone:'800-BIG-MARY'},
                         {name:'Mike', phone:'555-4321'},
                         {name:'Adam', phone:'555-5678'},
                         {name:'Julie', phone:'555-8765'},
                         {name:'Juliette', phone:'555-5678'}];

    $log.debug(paypalService.test());
    $log.debug(sharethisService.test());

    dataService.getDatabase().then(function() {
      $log.debug('success!');
    }, function(error) {
      $log.debug('error!');
      $log.debug(error);
    });


  };

  angular.module('battlehackApp').controller(controllerId, [
    '$log',
    '$scope',
    'dataService',
    'paypalService',
    'sharethisService',
    discoverCtrl
  ]);

})();
