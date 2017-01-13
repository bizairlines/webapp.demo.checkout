angular.module('app').config(config);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}
