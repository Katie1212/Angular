// JavaScript Document
"use strict";

var countryApp = angular.module('countryApp', []);

countryApp.controller('CountryCtrl', function ($scope, $http) {
	$http.get('js/favs.json').success(function(data) {
	$scope.countries = data;
 });

$scope.orderProp = 'population'; 

});










//Week3 Lecture:  Tutorial / 4 - Two-way Data Binding