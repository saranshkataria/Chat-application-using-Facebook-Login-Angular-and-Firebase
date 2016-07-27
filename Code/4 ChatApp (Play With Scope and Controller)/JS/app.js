var myApp = angular.module('PureChat',[]);   

myApp.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}])
.controller('Ctrl1', ['$scope', function ($scope) {
	$scope.name = "Pulkit 01";
	
}])
.controller('Ctrl2', ['$scope', function ($scope) {
	$scope.name= "Pulkit 02";
}])
.controller('Ctrl3',  function () {
	this.prop = "Ctrl3";
})
.controller('Ctrl4',  function () {
	this.prop = "Ctrl4";
})