;(function() {
    'use strict';

    angular
      .module('search-results')
      .factory('searchResultsService', searchResultsService);

    /* ngInject */
    function searchResultsService($http, API) {
      var list = [];

      return {
        get: get,
        sync: sync
      };

      function get() {
        return list;
      }

      function sync(p) {

        return $http.get(API + '/search/', {params : p})
          .then(function (resp) {
          angular.extend(list, resp.data.data);
        });
      }
    }
  }
)();
