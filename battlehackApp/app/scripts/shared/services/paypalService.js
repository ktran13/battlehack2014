(function() {
	'use strict';


// Restangular service that uses paypal as the base url and the associated configs
angular.module('battlehackApp').factory('paypalRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('http://www.paypal.com');
  });
});

/**
 * @ngdoc function
 * @name battlehackApp.service:paypalService
 * @description
 * # paypalService
 * Service of the battlehackApp
 */
angular.module('battlehackApp')
  .service('paypalService', function (paypalRestangular) {

  	var test = function() {
  		return 'paypal';
  	};

  	return {
  		test: test
  	};

  });




})();
