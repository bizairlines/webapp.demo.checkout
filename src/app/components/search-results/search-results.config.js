;(function() {
  'use strict';

  angular
    .module('main')
    .config(config);

  /* ngInject */
  function config($stateProvider) {
    $stateProvider.state('results', {
      url: '/results',
      views: {
        content: {
          controller: 'SearchResultController as $ctrl',
          templateUrl: 'components/search-results/search-results.tpl.html'
        }
      }
    });
  }
})();
