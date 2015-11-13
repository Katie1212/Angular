function() {
var airTravelApp = angular.module('airTravelApp', ['ngRoute']);

myLocalApp.config(routerConfig);
  
  function routerConfig ($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'airportCtrl'
      }).
      when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
}();
