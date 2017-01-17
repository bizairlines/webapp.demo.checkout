;(function() {
  'use strict';

  checkoutService.$inject = ["$http", "$rootScope", "API"];
  angular
    .module('checkout')
    .factory('checkoutService', checkoutService);

  /* ngInject */
  function checkoutService($http, $rootScope, API) {

    return {
      cc: cc,
      checkout: checkout,
      booking: booking,
      book : book
    };


    function cc(data) {
      return $http.post(API + '/credit-cards', data);
    }

    function checkout(data) {
      return $http.post(API + '/checkout', data);
    }

    function booking(data) {
      return $http.get(API + '/bookings/' + data.biz_locator + '/pnr');
    }

    function book(data, biz_locator, pnrId) {
      var d = {
          name: data.name,
          birthdate: data.birthdate,
          gender:data.gender,
          email: data.email,
          passport : data.passport,
          passport_expiration : data.passport_expiration,
          passport_country: data.passport_country.iso_code_2,
          is_disabled_person : data.is_disabled_person
      };

      return $http.put(API + '/bookings/' + biz_locator + '/pnr/' + pnrId, d);
    }

  }
})();
