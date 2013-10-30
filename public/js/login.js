function LoginCtrl($scope) {  
  $scope.currentLogin = null; //user in deployd
  $scope.user = {}; //form data
  
  $scope.doLogin = function(){
    //logout first, and then login
    dpd.users.logout(function(result, error){      
      dpd.users.login(
	$scope.user,
	function(result, error){
	  console.log("error: "+error); 
	  console.log("result: "+result);
	  $scope.getCurrentLogin();   
      });
      $scope.user={};
    });   
  }
  
  $scope.doLogout = function(){   
    dpd.users.logout(function(result, error){     
      $scope.getCurrentLogin();
    });
  }
  
  $scope.getCurrentLogin = function(){
    dpd.users.me(function(result, error){
	if(result) {
	  $scope.currentLogin = result;      
	}else{
	  $scope.currentLogin = null;      
	}
	$scope.$apply();
    });
  }  
  $scope.getCurrentLogin();
  
}


