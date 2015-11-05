"use strict";

var airportApp = angular.module('airportApp', []);

airportApp.controller('AirportCtrl', ['$scope', '$http',
	function ($scope, $http) {
	 $http.get('https://publicdata-airports.firebaseio.com/MIA.json').success(function(response){
        $scope.firstData = response; 
    });
$http.get('https://publicdata-airports.firebaseio.com/SFO.json').success(function(response1){
        $scope.secondData = response1;
    });
	$http.get('https://publicdata-airports.firebaseio.com/JFK.json').success(function(response1){
        $scope.thirdData = response1;
    });
$scope.orderProp = 'MIA'; 

}]);




