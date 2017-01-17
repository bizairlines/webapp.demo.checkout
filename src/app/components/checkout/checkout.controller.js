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
      ctrl.showSuccessMessage = false;

      function checkout() {
        checkoutService.cc(ctrl.cc).then(function (cc) {
          checkoutService.checkout(prepareData(cc)).then(function (checkout) {
            if(ctrl.search.flight_type != 'shuttle') {
              ctrl.showSuccessMessage = true;
            } else {
              checkoutService.booking(checkout.data.data).then(function (pnr, i) {
                angular.forEach(pnr.data.data, function (p, i) {
                  checkoutService.book(ctrl.passengersArr[i], checkout.data.data.biz_locator, p.id).then(function (_r) {
                    console.log('::: SUCCESS :::');
                  });
                });
              })
            }
          })
        })
      }

      function prepareData(cc) {
        var data = {
          credit_card: cc.data.data.id,
          flight : [ctrl.flight.id],
        };
        if(ctrl.search.flight_type=='shuttle') {
          angular.extend(data, {
            flight : [ctrl.flight.id],
            seats : ctrl.search.seats
          })
        } else if (ctrl.search.flight_type=='empty-leg') {
          angular.extend(data, {
            flight : [ctrl.flight.id],
            departure_at : ctrl.departure_at
          })
        } else if (ctrl.search.flight_type == 'full-charter') {
          angular.extend(data, {
            departure_at : ctrl.departure_at,
            aircraft: ctrl.flight.id,
            from: ctrl.search.from.iata_code,
            to: ctrl.search.to.iata_code
          })
        }

        return data;
      }

      angular.forEach(ctrl.passengersArr, function (p) {
        p = {};
      })
    }
})();
