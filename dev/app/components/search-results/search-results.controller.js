;(function() {
    'use strict';

    SearchResultController.$inject = ["FLIGHTS"];
    angular
        .module('search-results')
        .controller('SearchResultController', SearchResultController);

    /* ngInject */
    function SearchResultController(FLIGHTS) {
        var ctrl = this;

        ctrl.flights = FLIGHTS.data;
    }
})();
