;(function() {
    'use strict';

    angular
        .module('checkout')
        .controller('CheckoutController', CheckoutController);

    /* ngInject */
    function CheckoutController(checkoutService, $state, $stateParams) {
      var ctrl = this;

      if(!$stateParams.search || !$stateParams.data) $state.go('main');

      ctrl.search = $stateParams.search;
      ctrl.flight = $stateParams.data;

      ctrl.months = Array.apply(0, Array(12)).map(function(_,i){return moment().month(i).format('MMM')});
      ctrl.passengersArr = new Array(ctrl.search.seats || 1);

      ctrl.checkout = checkout;


      function checkout() {
        checkoutService.cc(ctrl.cc).then(function (cc) {
          checkoutService.checkout({
            credit_card: cc.data.data.id,
            flight : [ctrl.flight.id],
            seats : ctrl.search.seats
          }).then(function (checkout) {
            console.log('checkout', checkout);
            checkoutService.booking(checkout.data.data).then(function (pnr, i) {
              angular.forEach(pnr.data.data, function (p, i) {
                checkoutService.book(ctrl.passengersArr[i], checkout.data.data.biz_locator, p.id).then(function (_r) {
                  debugger;
                });
              });
            })
          })
        })
      }

      angular.forEach(ctrl.passengersArr, function (p) {
        p = {};
      })
    }
})();
