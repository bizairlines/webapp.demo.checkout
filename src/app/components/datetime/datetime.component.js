angular
    .module('datetime')
    .component('bizDatetime', {
        controller: 'DatetimeController',
        templateUrl: 'components/datetime/datetime.tpl.html',
        transclude : true,
        bindings: {
            title: '@',
            for: '@',
            placeholder: '@',
            model: '=',
            format: '@',
            type: '@',
            min: '@',
            max: '@',
            onElement: '='
        }
    });

