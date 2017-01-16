 angular
        .module('dropdown-select')
        .controller('DropdownSelectController', DropdownSelectController);

    /* ngInject */
    function DropdownSelectController() {

        var ctrl = this;

        ctrl.show = false;

        ctrl.trigger = trigger;
        ctrl.select = select;

        ctrl.selected = getSelected();


        function getSelected() {
            var title = 'Select...';
            angular.forEach(ctrl.list, function (item) {
                if(item.value == ctrl.value) title = item.title;
            });

            return title;
        }

        function trigger() {
            ctrl.show = !ctrl.show;
        }

        function select(item) {
            ctrl.model = item.value;
            ctrl.selected = item.title;
        }
    }
