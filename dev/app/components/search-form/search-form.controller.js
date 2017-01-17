;(function() {
    'use strict';

    SearchFormController.$inject = ["$stateParams", "TYPES"];
    angular
        .module('search-form')
        .controller('SearchFormController', SearchFormController);

    /* ngInject */
    function SearchFormController($stateParams, TYPES) {
        var ctrl = this;
        ctrl.minDate = moment().format("YYYY-MM-DD");

        ctrl.types = TYPES;

        ctrl.data = $stateParams.data || {};

        if($stateParams.data) {
          ctrl.data.seats = $stateParams.data.seats || 1;
        } else {ctrl.data.seats = 1;}

        ctrl.count = count;

        function count(a) {
          if(a) ctrl.data.seats++;
          if(!a && ctrl.data.seats > 1) ctrl.data.seats--;
        }
    }
})();
