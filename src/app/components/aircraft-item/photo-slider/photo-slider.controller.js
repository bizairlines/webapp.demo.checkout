;(function() {
    'use strict';

    angular
        .module('photo-slider')
        .controller('PhotoSliderController', PhotoSliderController);

    /* ngInject */
    function PhotoSliderController() {
        var ctrl = this;

        ctrl.current = 0;

        ctrl.left = left;
        ctrl.right = right;

        function left() {
            ctrl.current = ctrl.current != 0 ? ctrl.current - 1 : 0;
        }

        function right() {
            ctrl.current = ctrl.current != (ctrl.photos.length - 1) ? ctrl.current + 1 : (ctrl.photos.length - 1);
        }
    }
})();