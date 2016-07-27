
angular.module('PureChat')
.controller('SignInCtrl', ['$scope', function ($scope) {
	$scope.text = "Hello";
}])
.controller('SignupCtrl', ['$scope', function ($scope) {
	
}])
.controller('dashCtrl', ['$scope','$firebaseArray','$firebaseAuth', function ($scope, $firebaseArray,$firebaseAuth) {
	var ref = new Firebase("https://purechatapp.firebaseio.com/");
    var auth = $firebaseAuth(ref);
    $scope.addMessage = function(){
    	ref.authWithPassword({
    		"email": "pulkitkkr@live.com",
  			"password": "abcde12345"
    	},function(error,authData){
    			if(error){
    				console.log("Login Failed!", error);
    			}else{
    				console.log("Authenticated successfully with payload:", authData);	
    			}
    	});
    };
   

}]);

