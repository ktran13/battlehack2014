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
  .service('paypalService', function ($log, $q, paypalRestangular, authPaypalRestangular, localStorageService) {

    var tokenLs = localStorageService.get('authToken');
    var authToken = (tokenLs) ? {'value': tokenLs} : getAuthToken();

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
        localStorageService.add('authToken', authToken.value);
        $log.debug(localStorageService.get('authToken'));
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
          'return_url': 'http://localhost:9000/#/confirm?id='+id+'&confirm=true',
          'cancel_url': 'http://localhost:9000/#/?id='+id+'&confirm=false'
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
        'Authorization': 'Bearer ' + authToken.value
      });
    };

    var executePayment = function(payerId) {
      var request = {'payer_id': payerId.toString()};
      var executeUrl = localStorageService.get('execute');
      var url = (executeUrl) ? executeUrl.substring(43) : null;
      $log.debug(url);
      if(!authToken) {
        getAuthToken();
      }
      if(!url) {
        return $q.reject('no execute url to be found');
      }
      return paypalRestangular.one(url).customPOST(request, '', {}, {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken.value
      });
    };

  	return {
      getAuthToken: getAuthToken,
      setupPayment: setupPayment,
      executePayment: executePayment
  	};

  });




})();
