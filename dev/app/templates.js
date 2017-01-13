(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/autocomplete/autocomplete.tpl.html',
    '<div class="autocomplete">\n' +
    '    <biz-form-field\n' +
    '            title="{{$ctrl.title}}"\n' +
    '            for="{{$ctrl.for}}">\n' +
    '        <input id="{{$ctrl.for}}" type="text"\n' +
    '               placeholder="{{$ctrl.title}}"\n' +
    '               ng-model="$ctrl.searchText"\n' +
    '               name="{{$ctrl.for}}"\n' +
    '               ng-required="$ctrl.required"\n' +
    '               ng-focus="$ctrl.focus()"\n' +
    '               ng-blur="$ctrl.blur()"\n' +
    '               ng-change="$ctrl.search()"\n' +
    '               ng-model-options="{ debounce: 300 }"/>\n' +
    '    </biz-form-field>\n' +
    '    <div class="autocomplete-results" ng-show="$ctrl.settings.visible && $ctrl.list.length && $ctrl.searchText">\n' +
    '        <div class="results-list" ng-show="!$ctrl.settings.static && $ctrl.list.length">\n' +
    '            <div class="result-item" ng-repeat="item in $ctrl.list" ng-click="$ctrl.select(item)">\n' +
    '                {{$ctrl.settings.show(item)}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="results-list static" ng-show="$ctrl.settings.static && $ctrl.settings.visible && $ctrl.searchText">\n' +
    '            <div class="result-item" ng-repeat="item in $ctrl.list | filter:$ctrl.searchText" ng-click="$ctrl.select(item)">\n' +
    '                {{$ctrl.settings.show(item)}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/datetime/datetime.tpl.html',
    '<div class="_form-field" ng-class="{\'on-element\' : $ctrl.onElement}">\n' +
    '\n' +
    '    <biz-form-field\n' +
    '            title="{{$ctrl.title}}"\n' +
    '            for="{{$ctrl.for}}">\n' +
    '        <input id="{{$ctrl.for}}"\n' +
    '               type="$ctrl.type || \'text\'"\n' +
    '               ng-model="$ctrl.date"\n' +
    '               name="{{$ctrl.for}}"\n' +
    '               placeholder="{{$ctrl.placeholder}}"\n' +
    '               ng-click="$ctrl.open()"\n' +
    '               ng-required="$ctrl.required"/>\n' +
    '    </biz-form-field>\n' +
    '\n' +
    '    <ng-transclude type="$ctrl.type || \'text\'" ng-click="$ctrl.open()"></ng-transclude>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/main/main.tpl.html',
    '<!--<header-cmp></header-cmp>-->\n' +
    '<div class="_main-screen">\n' +
    '  <search-form></search-form>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/search-form/search-form.tpl.html',
    '<div class="search-form">\n' +
    '\n' +
    '  <div class="flights-label">\n' +
    '    <i class="fa fa-plane"></i>\n' +
    '    Flights\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="airports">\n' +
    '    <div class="airport-input">\n' +
    '      <i class="fa fa-map-marker" aria-hidden="true"></i>\n' +
    '      <biz-autocomplete title="From"\n' +
    '                        for="departure_airport"\n' +
    '                        type="airport"\n' +
    '                        required="true"\n' +
    '                        model="$ctrl.data.from">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="swap">\n' +
    '      <a href="#!"><i class="fa fa-exchange" aria-hidden="true"></i></a>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="airport-input">\n' +
    '      <i class="fa fa-map-marker" aria-hidden="true"></i>\n' +
    '      <biz-autocomplete title="To"\n' +
    '                        for="departure_airport"\n' +
    '                        type="airport"\n' +
    '                        required="true"\n' +
    '                        model="$ctrl.data.to">\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="date-selector">\n' +
    '    <i class="fa fa-calendar"></i>\n' +
    '    <biz-datetime title="Date"\n' +
    '                  for="date"\n' +
    '                  model="$ctrl.data.date"\n' +
    '                  type="date"\n' +
    '                  format="DD MMM"\n' +
    '                  placeholder="Date..."\n' +
    '                  min="{{$ctrl.minDate}}">\n' +
    '    </biz-datetime>\n' +
    '    <!--<input type="text" placeholder="Chose date...">-->\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="find-button">\n' +
    '    <a href="#!">Search</a>\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/search-results/search-results.tpl.html',
    '<div class="search-results">\n' +
    '  <search-form></search-form>\n' +
    '\n' +
    '  <div class="flights-list">\n' +
    '    <div class="flight-item" ng-repeat="item in $ctrl.flights">\n' +
    '      <div class="flex-block-row align-space-between">\n' +
    '        <div class="from-to">\n' +
    '\n' +
    '          <div class="flight-number">{{item.flight_number}}</div>\n' +
    '\n' +
    '          <div class="direction">\n' +
    '            {{item.departure_airport.name}} <span class="country-city">({{item.departure_airport.country.name}}, {{item.departure_airport.city}})</span>\n' +
    '          </div>\n' +
    '          <div class="direction">\n' +
    '            {{item.arrive_airport.name}} <span class="country-city">({{item.arrive_airport.country.name}}, {{item.arrive_airport.city}})</span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="airline">\n' +
    '          {{item.airline.name}}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="flex-block-row align-space-between">\n' +
    '        <div class="aircraft-name">\n' +
    '          <i class="fa fa-plane"></i>\n' +
    '          {{item.aircraft.aircraft.name}}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/header/header.tpl.html',
    '<div class="logo">\n' +
    '    <img src="images/logo-r-g-b-full-300-x-129.png" alt="Biz Airlines" />\n' +
    '</div>\n' +
    '<div class="flex"></div>\n' +
    '<div class="top-menu flex-block-row">\n' +
    '    <div class="links">\n' +
    '        <a href="" ui-sref="help" class="help">Help</a>\n' +
    '    </div>\n' +
    '    <div class="menu">\n' +
    '        <a class="btn btn-border-2" ng-click="$ctrl.signIn()">Login</a>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/datetime/datetime-view/datetime-view.tpl.html',
    '<div class="datetime {{$ctrl.type == \'datetime\' ? \'default\' : $ctrl.type }}">\n' +
    '    <div class="row date-range-inputs" ng-if="$ctrl.type == \'range\'">\n' +
    '        <biz-form-field class="col-xs-6"\n' +
    '                title="From"\n' +
    '                for="from"\n' +
    '                ng-click="$ctrl.setRangeField(\'from\')"\n' +
    '        ng-class="{\'wait-to-select\' : $ctrl.rangeField == \'from\'}">\n' +
    '            <input id="from"\n' +
    '                   type="text"\n' +
    '                   ng-model="$ctrl.dateRange.from"\n' +
    '                   name="from"\n' +
    '                   placeholder="Date from..."/>\n' +
    '        </biz-form-field>\n' +
    '\n' +
    '        <biz-form-field\n' +
    '                class="col-xs-6"\n' +
    '                title="To"\n' +
    '                for="to"\n' +
    '                ng-click="$ctrl.setRangeField(\'to\')"\n' +
    '                ng-class="{\'wait-to-select\' : $ctrl.rangeField == \'to\'}">\n' +
    '            <input id="to"\n' +
    '                   type="text"\n' +
    '                   ng-model="$ctrl.dateRange.to"\n' +
    '                   name="to"\n' +
    '                   placeholder="Date to..."/>\n' +
    '        </biz-form-field>\n' +
    '    </div>\n' +
    '    <div class="datetime-date">\n' +
    '        <div class="datetime-navigation">\n' +
    '            <a href="" ng-click="$ctrl.updateMonth(\'prev\')">\n' +
    '                <i class="fa fa-caret-left" aria-hidden="true"></i>\n' +
    '            </a>\n' +
    '            <span>{{$ctrl.getTitle()}}</span>\n' +
    '            <a href="" ng-click="$ctrl.updateMonth(\'next\')">\n' +
    '                <i class="fa fa-caret-right" aria-hidden="true"></i>\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="datetime-weekdays">\n' +
    '            <span class="datetime-weekday" ng-repeat="weekday in $ctrl.calendar.weekdays">{{weekday}}</span>\n' +
    '        </div>\n' +
    '        <div class="datetime-dates" ng-click="$ctrl.select($event)">\n' +
    '            <span class="datetime-day"\n' +
    '                  date="{{day.date.format(\'YYYY-MM-DD\')}}"\n' +
    '                  ng-class="{\n' +
    '                  inactive: $ctrl.isInactive(day),\n' +
    '                  today: day.date.format(\'YYYY-MM-DD\') == $ctrl.today.format(\'YYYY-MM-DD\'),\n' +
    '                  selected: day.date.format(\'YYYY-MM-DD\') == $ctrl.selected.format(\'YYYY-MM-DD\') && day.status,\n' +
    '                  inRange : day.inRange}"\n' +
    '                  ng-repeat="day in $ctrl.calendar.days">{{day.day}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="datetime-time">\n' +
    '        <div class="datetime-show-time">{{$ctrl.showTime()}}</div>\n' +
    '        <div class="datetime-hours"><label>Hours:</label><input type="range" min="0" max="23" ng-model="$ctrl.hours" ng-change="$ctrl.updateTime()"/></div>\n' +
    '        <div class="datetime-minutes"><label>Minutes:</label><input type="range" min="0" max="59" ng-model="$ctrl.minutes" ng-change="$ctrl.updateTime()"/></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="preselected-ranges">\n' +
    '        <div>\n' +
    '            <a href="" ng-click="$ctrl.preselectMonth(\'this\')">This month</a>\n' +
    '            <a href="" ng-click="$ctrl.preselectMonth(\'last\')">Last month</a>\n' +
    '            <a href="" ng-click="$ctrl.preselectMonth(\'next\')">Next month</a>\n' +
    '        </div>\n' +
    '        <div>\n' +
    '            <a href="" ng-click="$ctrl.preselectWeek(\'this\')">This week</a>\n' +
    '            <a href="" ng-click="$ctrl.preselectWeek(\'last\')">Last week</a>\n' +
    '            <a href="" ng-click="$ctrl.preselectWeek(\'next\')">Next week</a>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="_apply">\n' +
    '        <a href="" ng-click="$ctrl.apply()">Apply</a>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
