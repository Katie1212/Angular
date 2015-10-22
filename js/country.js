// JavaScript Document
"use strict";

var countryApp = angular.module('countryApp', []);

countryApp.controller('CountryCtrl', function ($scope) {
	$scope.countries = [
	{'name': 'Punta Cana', 'place': 'Dominican Republic'},
	{'name': 'Santorini', 'place': 'Greece'},
    {'name': 'Abu Dhabi', 'place': 'United Arab Emirates'},
    {'name': 'Florida', 'place': 'United State'},
    {'name': 'Lauterbrunnen',  'place': 'Switzerland'}
	];
});

