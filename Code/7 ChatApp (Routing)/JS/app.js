angular.module('PureChat',['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider.when('/signup', {
		templateUrl: 'Views/signup.html',
		controller: 'SignupCtrl'
	}).otherwise({ redirectTo: '/' })	
	$locationProvider.html5Mode(true);
}])

