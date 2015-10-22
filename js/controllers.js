// JavaScript Document

var phonecatApp = angular.module('angularclass', []);

phonecatApp.controller('PhoneListCtrl', phoneListFn);



phonecatApp.controller('HeadingListCtrl', function($scope) {
 $scope.heading ='my second view';
});


phonecatApp.controller('HeadingListCtrl', headingListFn);


function headingListFn($scope) {
  $scope.heading ='my second view';
}

function phoneListFn($scope, $rootScope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
   
  ];
  
  $scope.title='my phones'; 
  
  $scope.numbersList=[0, 1, 2, 3, 4, 5, 6, 7];
  
  //$scope.myOtherList = [$scope.numbersList];
  $rootScope.globalheader = 'yo';
}

