
angular.module('PureChat')
.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}])
.service('basicService', [function () {
	this.serviceVar = "This is service variable";
	this.getServiceVar = function(){
		return this.serviceVar;
	};
}])
.factory('basicFactory', [function () {
	
	var fac ={};
	fac.facVar = "This is factory Variable";
	fac.getfacVar = function () {
		return fac.facVar;
	}
	return fac;
}])
.controller('serviceCtrl', ['$scope','basicService', function ($scope,basicService) {
	$scope.value = basicService.getServiceVar();
	
}])
.controller('factoryCtrl', ['$scope','basicFactory', function ($scope,basicFactory) {
	$scope.value = basicFactory.getfacVar();
	
}]);