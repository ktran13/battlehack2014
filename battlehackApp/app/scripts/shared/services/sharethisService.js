(function() {
	'use strict';


// Restangular service that uses sharethis as the base url and the associated configs
angular.module('battlehackApp').factory('sharethisRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('http://www.sharethis.com');
  });
});

/**
 * @ngdoc function
 * @name battlehackApp.service:sharethisService
 * @description
 * # sharethisService
 * Service of the battlehackApp
 */
angular.module('battlehackApp')
  .service('sharethisService', function (Restangular) {

  	var test = function() {
  		return 'share this';
  	};

  	return {
  		test: test
  	};

  });

})();
