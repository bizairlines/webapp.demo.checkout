angular
    .module('dropdown-select')
    .component('bizDropdownSelect', {
        controller: 'DropdownSelectController',
        templateUrl: 'components/dropdown-select/dropdown-select.tpl.html',
        bindings: {
            model: '=',
            list : '=',
            title: '@',
            type : '=',
            value : '='
        }
    });

