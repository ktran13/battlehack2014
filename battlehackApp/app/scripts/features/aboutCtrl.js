'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the battlehackApp
 */
angular.module('battlehackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
