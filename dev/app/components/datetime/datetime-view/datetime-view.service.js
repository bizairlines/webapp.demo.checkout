;(function() {
    angular
        .module('datetime-view')
        .factory('datetimeViewService', datetimeViewService);

        /* ngInject */
        function datetimeViewService() {
            return {
                get: get
            };

            function get(date) {
                return {
                    weekdays: getWeekdays(),
                    days: getDays(date)
                };
            }

            function getWeekdays() {
                return ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
            }

            function getDays(date) {
                var first = moment(date).clone().startOf('month'),
                    last = moment(date).clone().endOf('month'),
                    startDayOfWeek = first.day(),
                    endDayOfWeek = last.day(),
                    start, end,
                    days = [];

                start = first.clone().subtract(startDayOfWeek, 'days');
                end = last.clone().add(6 - endDayOfWeek, 'days');


                while (start < end) {
                    days.push({
                        day: start.format('D'),
                        date: start.clone(),
                        status: start.format('MM') == moment(date).format('MM')
                    });
                    start.add(1, 'days');
                }
                return days;
            }
        }
})();