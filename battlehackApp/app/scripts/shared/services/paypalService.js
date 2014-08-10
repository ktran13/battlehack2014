(function() {
	'use strict';


// Restangular service that uses paypal as the base url and the associated configs
angular.module('battlehackApp').factory('paypalRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('https://api.sandbox.paypal.com/v1/payments/');
  });
});

angular.module('battlehackApp').factory('authPaypalRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('https://api.sandbox.paypal.com/v1/oauth2/');
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
  .service('paypalService', function ($log, paypalRestangular, authPaypalRestangular) {

    var authToken = {};

  	var getAuthToken = function() {
  		authPaypalRestangular.one('token').customPOST('grant_type=client_credentials',
        '', {}, {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Accept-language': 'en_US',
        'Authorization': 'Basic QVRXVURoRGQzTUNkY3FHNUtUU3o5YWJHVzNpbzZDMDFJZWJ3aWlrbTR4N0FwR1FGbkJQSHk4dWRVbWRwOkVMdW9meEE1Sk9wbVdCeHUzNmw1MXE4NGpuVGlqMXN1QlE4S1cwSzRDRnhlSFkwMjZIRkpvN2N1WndOTg=='
      }).then(function(data) {
        $log.debug('success');
        $log.debug(data);
        authToken.value = data.access_token;
      }, function(error) {
        $log.debug(error);
        $log.debug('error');
      });
  	};

    var setupPayment = function(merchantId, amount) {
      var id = merchantId;
      var request = {
        'intent': 'sale',
        'redirect_urls': {
          'return_url': 'http://localhost:9000/profile?id='+id+'&confirm=true',
          'cancel_url': 'http://localhost:9000/profile?id='+id+'&confirm=false'
        },
        'payer': {
          'payment_method': 'paypal'
        },
        'transactions': [
          {
            'amount': {
              'total': amount.toString(),
              'currency': 'USD'
            }
          }
        ]
      };

      return paypalRestangular.one('payment').customPOST(request, '', {}, {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken.value;
      }).then(function(data) {
        $log.debug('successfully submitted');

      }, function(error) {
        $log.debug(error);
        $log.debug('error');
      });
    };

    var processPayment = function() {

    };


  	return {
      getAuthToken: getAuthToken
  	};

  });




})();
