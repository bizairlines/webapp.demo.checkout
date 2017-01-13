;(function() {
    'use strict';

    MainController.$inject = ["$scope", "$state"];
    angular
        .module('main')
        .controller('MainController', MainController);

    /* ngInject */
    function MainController($scope, $state) {
      var ctrl = this;
    }
})();
