;(function() {
    'use strict';

    angular
        .module('autocomplete')
        .factory('autocompleteService', autocompleteService);

    /* ngInject */
    function autocompleteService($http, API) {
        return {
            get: get,
            loadList: loadList
        };

        function get(endPoint, search) {
            return $http.get(API + endPoint, {params: {s: search}});
        }

        function loadList(endPoint) {
            return $http.get(API + endPoint);
        }
    }
})();

