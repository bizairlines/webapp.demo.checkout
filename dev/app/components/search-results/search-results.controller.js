;(function() {
    'use strict';

    SearchResultController.$inject = ["$state", "$stateParams", "searchResultsService"];
    angular
        .module('search-results')
        .controller('SearchResultController', SearchResultController);

    /* ngInject */
    function SearchResultController($state, $stateParams, searchResultsService) {
        var ctrl = this;
        ctrl.flights = searchResultsService.get();
        ctrl.select = select;

        function select(item) {
          $state.go('checkout', {data : item, search: $stateParams.data});
        }
    }
})();
