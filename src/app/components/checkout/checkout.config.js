;(function() {
  'use strict';

  angular
    .module('checkout')
    .config(config);

  /* ngInject */
  function config($stateProvider) {
    $stateProvider.state('checkout', {
      url: '/checkout',
      params : {
        data : undefined,
        search : undefined
      },
      views: {
        content: {
          controller: 'CheckoutController as $ctrl',
          templateUrl: 'components/checkout/checkout.tpl.html'
        }
      }
    });
  }
})();
