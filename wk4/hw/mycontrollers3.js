var airportdelayApp = angular.module('airaportApp', []);

airportdelayApp.controlller('AirportDelayCtrl', airportDelayCtrlDef);

function airportDelayCtrlDef( $scope. $http) {
	
	$scope.initialSelectedCity = 'MIA';
	$scope.cities[{name: 'Miami', value: 'MIA'}]
	
	var airportDateUrlFormat = "https://publicdata­airports.firebaseio.com/";
	
	function loadData(airportUrl) {
		$http.get(airportDataUrl).success(onDelayDataLoadedSuccess);
	}
	function buildAirportDelayUrl(city){
		return airportDataUrl.replace('_AIRPORTCODE_',city);
	}
		
		function onDelayDataLoadedSuccess (delayCityAirportData){
			$scope
	};

	loadData($scope.selectedCity);

}

