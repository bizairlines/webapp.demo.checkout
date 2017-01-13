;(function() {
    'use strict';

    angular
        .module('autocomplete')
        .controller('AutocompleteController', AutocompleteController);

    /* ngInject */
    function AutocompleteController($scope, $timeout, autocompleteService, AUTOCOMPLETE) {
        var ctrl = this,
            initializing = true,
            lastKey;

        ctrl.list = [];
        ctrl.settings = {
            visible: false
        };
        angular.extend(ctrl.settings, AUTOCOMPLETE[ctrl.type]);

        ctrl.searchText = angular.isObject(ctrl.model) ? ctrl.settings.show(ctrl.model) : '';

        ctrl.focus = focus;
        ctrl.blur = blur;
        ctrl.search = search;
        ctrl.select = select;

        initialLoadList();

        $scope.$watch('$ctrl.model', updateText, true);
        if (ctrl.settings.dependence) {
            $scope.$watch('$ctrl.key', updateDependence, true);
        }

        function focus() {
            if (ctrl.settings.static && !ctrl.settings.dependence) {
                ctrl.settings.visible = true;
            }
        }

        function blur() {
            $timeout(function() {
                ctrl.settings.visible = false;
            }, 500);
        }

        function search() {
            if (!ctrl.searchText) {
                ctrl.model = '';
            }
            if (!ctrl.settings.static) {
                autocompleteService.get(ctrl.settings.endPoint, ctrl.searchText)
                    .then(function(response) {
                        ctrl.list.length = 0;
                        if (ctrl.searchText) {
                            ctrl.settings.visible = true;
                            angular.extend(ctrl.list, response.data.data);
                        }
                    });
            }
        }

        function select(item) {
            ctrl.model = angular.copy(item);
            ctrl.settings.visible = false;
        }

        function initialLoadList() {
            if (ctrl.settings.static && !ctrl.settings.dependence) {
                autocompleteService.loadList(ctrl.settings.endPoint)
                    .then(function(response) {
                        angular.extend(ctrl.list, response.data.data);
                    });
            }
        }

        function updateDependence() {
            if (ctrl.key && ctrl.settings.getKey(ctrl.key) && lastKey != ctrl.settings.getKey(ctrl.key)) {
                lastKey = ctrl.settings.getKey(ctrl.key);
                autocompleteService.loadList(ctrl.settings.endPoint.replace('$key', ctrl.settings.getKey(ctrl.key)))
                    .then(function(response) {
                        if (initializing) {
                            initializing = false;
                        } else {
                            ctrl.model = {};
                            ctrl.settings.visible = true;
                        }
                        ctrl.list.length = 0;
                        angular.extend(ctrl.list, response.data.data);
                    });
            }
        }

        function updateText() {
            ctrl.searchText = angular.isObject(ctrl.model) ? ctrl.settings.show(ctrl.model) : '';
        }
    }
})();