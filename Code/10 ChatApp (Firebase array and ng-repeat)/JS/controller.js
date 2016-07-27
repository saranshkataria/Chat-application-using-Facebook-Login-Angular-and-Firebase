
angular.module('PureChat')
.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}])
.controller('SignupCtrl', ['$scope', function ($scope) {
	
}])
.controller('dashCtrl', ['$scope','$firebaseArray', function ($scope, $firebaseArray) {
	var ref = new Firebase("https://purechatapp.firebaseio.com/data");
    $scope.messages = $firebaseArray(ref);
    $scope.addMessage = function() {
    $scope.messages.$add({
      name: "pulkit",
      mail : "pulkitkkr@gmail.com"
    });
  };
   
	
}])/*

 $scope.addMessage = function() {
    $scope.messages.$add({
      text: "helloo"
    });
  };
  */