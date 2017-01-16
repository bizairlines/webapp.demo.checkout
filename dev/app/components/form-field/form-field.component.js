angular
    .module('form-field')
    .component('bizFormField', {
        templateUrl: 'components/form-field/form-field.tpl.html',
        transclude: true,
        bindings: {
            title: '@',
            for: '@',
            tip: '@',
            units: '@',
            noValidation: '<',
            small: '<'
        }
    });
