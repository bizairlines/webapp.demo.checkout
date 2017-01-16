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
  $templateCache.put('components/checkout/checkout.tpl.html',
    '<div class="checkout">\n' +
    '  <div class="checkout-forms">\n' +
    '\n' +
    '    <div class="credit-card-form">\n' +
    '      <!--: $exp_month-->\n' +
    '      <!--: $exp_year-->\n' +
    '      <!--cvc: $cvv-->\n' +
    '\n' +
    '      <biz-form-field\n' +
    '        title="Card number" for="number"\n' +
    '        no-validation="true"\n' +
    '        small="true">\n' +
    '        <input type="text" ng-model="$ctrl.cc.number" ui-mask="9999 9999 9999 9999">\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '        title="Expiration month" for="expiration_month"\n' +
    '        no-validation="true"\n' +
    '        small="true">\n' +
    '        <select ng-model="$ctrl.cc.expiration_month">\n' +
    '          <option value="{{$index+1}}" ng-repeat="m in $ctrl.months">{{m}}</option>\n' +
    '        </select>\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '        title="Expiration year" for="expiration_year"\n' +
    '        no-validation="true"\n' +
    '        small="true">\n' +
    '        <input type="text" ng-model="$ctrl.cc.expiration_year" maxlength="">\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '        title="CVV" for="cvc"\n' +
    '        no-validation="true"\n' +
    '        small="true">\n' +
    '        <input type="text" ng-model="$ctrl.cc.cvc" maxlength="4">\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="_form" ng-repeat="f in $ctrl.passengersArr track by $index">\n' +
    '      <h3>Passenger #{{$index+1}}</h3>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '      title="Name" for="name"\n' +
    '      no-validation="true"\n' +
    '      small="true">\n' +
    '        <input type="text" ng-model="$ctrl.passengersArr[$index].name">\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '      title="Birthdate" for="birthdate"\n' +
    '      small="true">\n' +
    '        <biz-datetime model="$ctrl.passengersArr[$index].birthdate" type="date" format="YYYY-MM-DD"></biz-datetime>\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '      title="Gender" for="gender"\n' +
    '      small="true">\n' +
    '        <select name="gender" id="gender" ng-model="$ctrl.passengersArr[$index].gender">\n' +
    '          <option value="null">Select...</option>\n' +
    '          <option value="M">Male</option>\n' +
    '          <option value="F">Female</option>\n' +
    '        </select>\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '        title="Email" for="email"\n' +
    '        no-validation="true"\n' +
    '        small="true">\n' +
    '        <input type="email" ng-model="$ctrl.passengersArr[$index].email">\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '        title="Passport" for="passport"\n' +
    '        no-validation="true"\n' +
    '        small="true">\n' +
    '        <input type="text" ng-model="$ctrl.passengersArr[$index].passport">\n' +
    '      </biz-form-field>\n' +
    '\n' +
    '      <biz-autocomplete title="Passport country" type="countries" model="$ctrl.passengersArr[$index].passport_country"></biz-autocomplete>\n' +
    '\n' +
    '      <biz-form-field\n' +
    '        title="Passport expiration" for="passport_expiration"\n' +
    '        small="true">\n' +
    '        <biz-datetime model="$ctrl.passengersArr[$index].passport_expiration" type="date" format="YYYY-MM-DD"></biz-datetime>\n' +
    '      </biz-form-field>\n' +
    '    </div>\n' +
    '\n' +
    '    <button ng-click="$ctrl.checkout()">Purchase</button>\n' +
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
  $templateCache.put('components/dropdown-select/dropdown-select.tpl.html',
    '<div class="dropdown-select-container" ng-click="$ctrl.trigger()">\n' +
    '    <div class="form-group" ng-class="{\'small\': $ctrl.small}">\n' +
    '\n' +
    '        <label>{{$ctrl.selected}}</label>\n' +
    '\n' +
    '        <div class="form-control">\n' +
    '            <ul class="dropdown-select" ng-show="$ctrl.show">\n' +
    '                <li ng-repeat="item in $ctrl.list" ng-click="$ctrl.select(item)">\n' +
    '                    {{item.title}}\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <span class="_caret">\n' +
    '            <i class="fa fa-caret-down" aria-hidden="true"></i>\n' +
    '        </span>\n' +
    '    </div>\n' +
    '    <div class="_backdrop" ng-if="$ctrl.show"></div>\n' +
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
  $templateCache.put('components/form-field/form-field.tpl.html',
    '<ng-form name="$ctrl.formFieldForm" novalidate>\n' +
    '    <div class="form-group" ng-class="{\'small\': $ctrl.small,\'has-error\': ($ctrl.formFieldForm.$$parentForm.$submitted || $ctrl.formFieldForm[$ctrl.for].$dirty) && $ctrl.formFieldForm[$ctrl.for].$invalid}">\n' +
    '        <label for="{{$ctrl.for}}" ng-show="$ctrl.title">{{$ctrl.title}}</label>\n' +
    '\n' +
    '        <div class="form-control" ng-transclude>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="tip" ng-show="$ctrl.tip">\n' +
    '            {{$ctrl.tip}}\n' +
    '        </div>\n' +
    '        <div class="units" ng-show="$ctrl.units">\n' +
    '            {{$ctrl.units}}\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="error-messages" ng-if="!$ctrl.noValidation">\n' +
    '        <div ng-messages="$ctrl.formFieldForm[$ctrl.for].$error" role="alert" ng-show="($ctrl.formFieldForm.$$parentForm.$submitted || $ctrl.formFieldForm[$ctrl.for].$dirty) && $ctrl.formFieldForm[$ctrl.for].$invalid">\n' +
    '            <div ng-message="pattern">Has to be valid year. Min year is 1990.</div>\n' +
    '            <div ng-message="required">This is a required field</div>\n' +
    '            <div ng-message="max">Cannot be more than amount of available seats</div>\n' +
    '            <div ng-message="is_equal">Password is not the same</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</ng-form>');
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
    '                  format="YYYY-MM-DD"\n' +
    '                  placeholder="Date..."\n' +
    '                  min="{{$ctrl.minDate}}">\n' +
    '    </biz-datetime>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="flight-type">\n' +
    '    <biz-dropdown-select\n' +
    '      model="$ctrl.data.flight_type"\n' +
    '      list = \'$ctrl.types\' value="$ctrl.data.type">\n' +
    '\n' +
    '    </biz-dropdown-select>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="seats-counter" ng-if="$ctrl.data.flight_type == \'shuttle\'">\n' +
    '    <a ng-click="$ctrl.count(false)">-</a>\n' +
    '    <input type="number" ng-model="$ctrl.data.seats">\n' +
    '    <a ng-click="$ctrl.count(true)">+</a>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="find-button" ui-sref="results({data : $ctrl.data})">\n' +
    '    <a>Search</a>\n' +
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
    '\n' +
    '      <div class="flex-block-row align-center-v-h">\n' +
    '        <a class="btn btn-primary _thin" ng-click="$ctrl.select(item)">Select</a>\n' +
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
