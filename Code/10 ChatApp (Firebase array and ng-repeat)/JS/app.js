angular.module('PureChat',['ngRoute','firebase'])

.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider.when('/signup', {
		templateUrl: 'Views/signup.html',
		controller: 'SignupCtrl'
	})
	.when('/signin', {
		templateUrl: 'Views/signin.html',
		controller: 'SignInCtrl'
	})
	.when('/dash', {
		templateUrl: 'Views/dash.html',
		controller: 'dashCtrl'
	})
	.otherwise({ redirectTo: '/' })	
	$locationProvider.html5Mode(true);
}])

