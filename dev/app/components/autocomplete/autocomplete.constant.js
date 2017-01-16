angular
    .module('autocomplete')
    .constant('AUTOCOMPLETE', {
        countries: {
            endPoint: '/countries',
            static: true,
            show: function(item) {
                return item.name;
            }
        },
        manufacturer: {
            endPoint: '/aircraft/manufacturers',
            static: true,
            show: function(item) {
                return item.name;
            }
        },
        model: {
            endPoint: '/aircraft/manufacturers/$key/models',
            dependence: true,
            getKey: function(key) {
                return key.id;
            },
            static: true,
            show: function(item) {
                return item.name;
            }
        },
        airport: {
            endPoint: '/airports/autocomplete',
            static: false,
            show: function(item) {
                return item.name + ' (' + item.iata_code + ')';
            }
        }
    });