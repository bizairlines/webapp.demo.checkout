;(function() {
    'use strict';

    angular
        .module('search-form')
        .controller('SearchFormController', SearchFormController);

    /* ngInject */
    function SearchFormController() {
        var ctrl = this;
        ctrl.minDate = moment().format("YYYY-MM-DD");
    }
})();
