angular
    .module('switcher')
    .component('bizSwitcher', {
        controller: 'SwitcherController',
        templateUrl: 'components/switcher/switcher.tpl.html',
        bindings: {
            model: '='
        }
    });
