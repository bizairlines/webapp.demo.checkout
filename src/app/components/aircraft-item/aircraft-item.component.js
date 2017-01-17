angular
    .module('aircraft-item')
    .component('bizAircraftItem', {
        controller: 'AircraftItemController',
        templateUrl: 'components/aircraft-item/aircraft-item.tpl.html',
        bindings: {
            aircraft: '=',
            view: '<',
            specialKey: '@',
            selecting: '<',
            onSync: '&',
            onSelect: '&'
        }
    });
