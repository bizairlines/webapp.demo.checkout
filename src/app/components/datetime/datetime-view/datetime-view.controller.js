;(function() {
    angular
        .module('datetime-view')
        .controller('DatetimeViewController', DatetimeViewController);

        /* ngInject */
        function DatetimeViewController(onSelect, settings, onApply, datetimeViewService) {
            var ctrl = this;

            ctrl.type = settings.type;
            ctrl.min = settings.min;
            ctrl.max = settings.max;
            ctrl.format = settings.format;

            ctrl.dateRange = settings.dateRange || {};
            ctrl.rangeField = 'from';

            ctrl.today = moment();
            ctrl.selected = settings.date ? moment(settings.date, settings.format) : ctrl.today.clone();
            ctrl.view = moment(ctrl.selected).startOf('month');
            ctrl.calendar = datetimeViewService.get(ctrl.view.format('YYYY-MM'));

            ctrl.hours = ctrl.selected.format('HH');
            ctrl.minutes = ctrl.selected.format('mm');

            ctrl.getTitle = getTitle;
            ctrl.showTime = showTime;

            ctrl.updateMonth = updateMonth;

            ctrl.select = select;
            ctrl.updateTime = updateTime;
            ctrl.isInactive = isInactive;

            ctrl.setRangeField = setRangeField;

            ctrl.inRange = inRange;
            ctrl.apply = apply;

            ctrl.preselectMonth = preselectMonth;
            ctrl.preselectWeek = preselectWeek;

            function inRange () {

                if(ctrl.dateRange.from && ctrl.dateRange.to) {
                    for(var i = 0;i < ctrl.calendar.days.length;i++) {
                        var start = moment(ctrl.dateRange.from),
                            end = new Date(ctrl.dateRange.to),
                            date = ctrl.calendar.days[i].date,
                            range = ctrl.calendar.days[i].date.range(start, end);
                        ctrl.calendar.days[i].inRange =  range.contains(date) ||
                            moment(date).isSame(moment(start));
                    }
                }
            }

            function preselectMonth(period) {
                var from, to, direction;
                if(period == 'this') {
                    from = moment().startOf('month').format(ctrl.format);
                    to = moment().endOf('month').format(ctrl.format);

                    ctrl.view = moment();
                    update();

                } else if((period == 'last') || period == 'next') {
                    direction = period == 'last' ? -1 : 1;
                    from = moment().add(direction, 'months').startOf('month').format(ctrl.format);
                    to = moment().add(direction, 'months').endOf('month').format(ctrl.format);

                    ctrl.view = moment().add(direction, 'months');
                    update();
                }

                ctrl.dateRange = {
                    from : from,
                    to : to
                };

                inRange();
            }

            function preselectWeek(period) {
                var from, to, direction;

                if(period == 'this') {
                    from = moment().startOf('week').format(ctrl.format);
                    to = moment().endOf('week').format(ctrl.format);
                } else if((period == 'last') || period == 'next') {
                    direction = period == 'last' ? -1 : 1;
                    from = moment().add(direction, 'week').startOf('week').format(ctrl.format);
                    to = moment().add(direction, 'week').endOf('week').format(ctrl.format);
                }

                ctrl.dateRange = {
                    from : from,
                    to : to
                };

                inRange();
                ctrl.view = moment();
                update();
            }

            function getTitle() {
                return moment(ctrl.view).format('MMMM, YYYY');
            }


            function showTime() {
                return ctrl.selected.format('HH:mm');
            }

            function updateMonth(direction) {
                var add = direction == 'prev' || direction == 'last' ? -1 : 1;
                ctrl.view.add(add, 'months');
                update();
            }

            function setRangeField(field) {
                ctrl.rangeField = field;
            }

            function select(event) {

                var date, el;
                event.preventDefault();

                el = angular.element(event.target);

                date = el.attr('date');

                if (!el.hasClass('inactive') && date && ctrl.view.format('YYYY-MM') == moment(date).format('YYYY-MM')) {

                    if(ctrl.type == 'range') {
                        console.log(settings);
                        ctrl.dateRange[ctrl.rangeField] = moment(date).format(settings.format);
                        ctrl.setRangeField('to');

                        ctrl.inRange();
                    } else {
                        ctrl.selected.year(moment(date).year());
                        ctrl.selected.month(moment(date).month());
                        ctrl.selected.date(moment(date).date());
                        ctrl.selected.second(0);
                        onSelect(ctrl.selected, true);
                    }

                }
            }

            function apply() {
                onApply(ctrl.dateRange);
            }

            function updateTime() {
                ctrl.selected.hour(ctrl.hours);
                ctrl.selected.minute(ctrl.minutes);
                ctrl.selected.second(0);
                onSelect(ctrl.selected);
            }

            function isInactive(day) {
                return !day.status ||
                    day.date < ctrl.min ||
                    day.date > ctrl.max;
            }

            function update() {
                angular.extend(ctrl.calendar, datetimeViewService.get(ctrl.view.format('YYYY-MM')));

                ctrl.inRange();
            }
        }
})();