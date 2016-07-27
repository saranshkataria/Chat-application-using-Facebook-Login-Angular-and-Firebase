var myApp = angular.module('PureChat',[]);   

myApp.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}]);
myApp.service('basicService', [function () {
	this.serviceVar = "This is service variable";
	this.getServiceVar = function(){
		return this.serviceVar;
	};
}]);
myApp.factory('basicFactory', [function () {
	
	var fac ={};
	fac.facVar = "This is factory Variable";
	fac.getfacVar = function () {
		return fac.facVar;
	}
	return fac;
}]);
myApp.controller('serviceCtrl', ['$scope','basicService', function ($scope,basicService) {
	$scope.value = basicService.getServiceVar();
	
}]);
myApp.controller('factoryCtrl', ['$scope','basicFactory', function ($scope,basicFactory) {
	$scope.value = basicFactory.getfacVar();
	
}]);
