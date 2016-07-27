
angular.module('PureChat')
.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}])
.controller('SignupCtrl', ['$scope', function ($scope) {
	
}])
.controller('dashCtrl', ['$scope','$firebaseObject', function ($scope, $firebaseObject) {
	var ref = new Firebase("https://purechatapp.firebaseio.com/data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
	
}])
