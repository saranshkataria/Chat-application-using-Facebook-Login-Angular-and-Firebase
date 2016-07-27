
angular.module('PureChat')
.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}])
.controller('SignupCtrl', ['$scope', function ($scope) {
	
}])
.controller('dashCtrl', ['$scope','$firebaseArray','$firebaseAuth', function ($scope, $firebaseArray,$firebaseAuth) {
	var ref = new Firebase("https://purechatapp.firebaseio.com/");
    
     var auth = $firebaseAuth(ref);
  // login with Facebook
  $scope.addMessage = function () {
  		ref.createUser({
  email: "abc@xyz.com",
  password: "qwerty12345"
}, function(error, userData) {
  if (error) {
    switch (error.code) {
      case "EMAIL_TAKEN":
        console.log("The new user account cannot be created because the email is already in use.");
        break;
      case "INVALID_EMAIL":
        console.log("The specified email is not a valid email.");
        break;
      default:
        console.log("Error creating user:", error);
    }
  } else {
    console.log("Successfully created user account with uid:", userData);
  }
});
  	
  }
  
   
	
}])/*

 $scope.addMessage = function() {
    $scope.messages.$add({
      text: "helloo"
    });
  };
  */