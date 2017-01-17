;(function() {
    'use strict';

    angular
        .module('aircraft-item')
        .factory('aircraftItemService', aircraftItemService);

    /* ngInject */
    function aircraftItemService($http, userService, EnvConstants) {
        return {
            changeActivation: changeActivation,
            remove: remove
        };

        function changeActivation(aircraftId, active) {
            return $http.post(EnvConstants.apiUrl + '/companies/' + userService.getCompanyId() + '/aircraft/' + aircraftId + '/' + (active ? 'activate' : 'deactivate'));
        }

        function remove(aircraftId) {
            return $http.delete(EnvConstants.apiUrl + '/companies/' + userService.getCompanyId() + '/aircraft/' + aircraftId);
        }
    }
})();