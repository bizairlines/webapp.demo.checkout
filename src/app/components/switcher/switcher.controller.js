;(function() {
    'use strict';

    angular
        .module('switcher')
        .controller('SwitcherController', SwitcherController);

    /* ngInject */
    function SwitcherController() {
        var ctrl = this;

        ctrl.switchIt = switchIt;

        function switchIt(event) {
            event.preventDefault();
            ctrl.model = !ctrl.model;
        }
    }
})();