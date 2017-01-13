;(function() {
        DatetimeController.$inject = ["$scope", "$timeout", "$element", "$window", "$document", "$compile", "$controller", "$templateRequest"];
    angular
        .module('datetime')
        .controller('DatetimeController', DatetimeController);

        /* ngInject */
        function DatetimeController($scope, $timeout, $element, $window, $document, $compile, $controller, $templateRequest) {
            var ctrl = this;

            ctrl.date = '';
            ctrl.instance = false;

            ctrl.select = select;
            ctrl.apply = apply;
            ctrl.open = open;

            $scope.$watch('$ctrl.model', watchModel);

            function select(date, closeAfter) {
                ctrl.date = moment(date).format(ctrl.format);
                ctrl.model = moment(date).format(ctrl.format);
                if (closeAfter) {
                    remove();
                }
            }

            function apply(range) {
                ctrl.model = range;
                remove();
            }

            function open() {
                var element = angular.element($element).find('input');
                if (!ctrl.instance) {
                    ctrl.boundingRect = element[0].getBoundingClientRect();
                    $templateRequest('components/datetime/datetime-view/datetime-view.tpl.html')
                        .then(function(html) {
                            inject(html);
                            $timeout(function() {
                                angular.element($document).on('click', close);
                                console.log('$element.innerHeight :::', $element);

                            });
                        });
                }
            }

            function watchModel() {
                if (ctrl.model && ctrl.model != ctrl.date) {
                    ctrl.date = ctrl.model ? moment.parseZone(ctrl.model).format(ctrl.format) : '';
                }
            }

            function close(event) {
                if (ctrl.instance && !ctrl.instance[0].contains(event.target)) {
                    remove();
                }
            }

            function remove() {
                angular.element($document).off('click', close);
                if (ctrl.instance) {
                    ctrl.instance.remove();
                    ctrl.instance = false;
                }
            }

            function inject(html) {
                var localScope = $scope.$new(),
                    template = angular.element(html),
                    body = $document.find('body').eq(0),
                    top, left,
                    locals = {
                        onSelect: select,
                        onApply : apply,
                        settings: {
                            date: ctrl.date,
                            format: ctrl.format || 'YYYY-MM-DD',
                            type: ctrl.type || 'datetime',
                            min: ctrl.min ? moment(ctrl.min) : moment().subtract(10, 'years'),
                            max: ctrl.max ? moment(ctrl.max) : moment().add(10, 'years')
                        }
                    };

                left = ctrl.boundingRect.left;
                top = ctrl.boundingRect.top + ctrl.boundingRect.height;

                //TODO: DatePicker height should not be hardcoded here...
                if ($window.innerHeight < top + 232) {
                    top = $window.innerHeight - 232;
                }

                template.css({
                    left: left + 'px',
                    top: top + 'px'
                });

                ctrl.instance = template;

                body.append(template);
                $compile(template)(localScope);
                $controller('DatetimeViewController as $ctrl', locals ? angular.extend({$scope: localScope}, locals) : {$scope: localScope});
            }
        }
})();
