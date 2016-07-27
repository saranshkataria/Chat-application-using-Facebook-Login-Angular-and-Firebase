
angular.module('PureChat')
.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}])
.controller('SignupCtrl', ['$scope', function ($scope) {
	
}])
.controller('dashCtrl', ['$scope','$firebaseArray','$firebaseAuth', function ($scope, $firebaseArray,$firebaseAuth) {
	var ref = new Firebase("https://purechatapp.firebaseio.com/data");
    
     var auth = $firebaseAuth(ref);
  // login with Facebook
  $scope.addMessage = function () {

  		auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData);
    alert(authData.facebook.displayName);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
  }
  
   
	
}])/*

 $scope.addMessage = function() {
    $scope.messages.$add({
      text: "helloo"
    });
  };
  */