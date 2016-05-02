app.controller('loginCtrl', ['$scope', '$http', 'loginSrv', '$location', function($scope, $http, loginSrv, $location){

	$scope.ifChecked = false;
	$scope.errBool = false;
	$scope.numErr = false;
	$scope.repeatedEmail = '';
	$scope.emailMessage = 'We will send you an activation link to this email';
	$scope.phoneMessage = 'We could call you in case something goes wrong';
	$scope.data = ['username', 'email', 'password', 'firstName', 'lastName', 'phoneNumber', 'companyName', 'address', 'postalCode', 'cvrNumber']
	
	$scope.addNewAcc = function(){
		console.log('clicked');
		$http({
			method: "post",
			url: "/createAcc",
			data: {
				username : $scope.username,
				email : $scope.email,
				password : $scope.password,
				firstName : $scope.firstName,
				lastName : $scope.lastName,
				phoneNumber : $scope.phoneNumber,
				companyName : $scope.companyName,
				address : $scope.address,
				postalCode : $scope.postalCode,
				cvrNumber : $scope.cvrNumber
			}
		}).then(function (res){
			console.log('in rhen');
			if (res.data.invalidAttributes) {
				angular.forEach(res.data.invalidAttributes[$scope.data[0]], function(err){
					// if (err.rule === "required") $scope.userErr = $scope.data[0] + "is missing. Min lenght - 5 symbols";
					if (err.rule === "minLength") $scope.userErr = "Username min lenght - 5 symbols";
				})
				if (res.data.invalidAttributes[$scope.data[1]]){
					if (res.data.invalidAttributes[$scope.data[1]][0].rule === "email") {
						$scope.emailErr = "Email is invalid format or doesn`t exist"
						$scope.emailMessage = null;
						}
				}
				angular.forEach(res.data.invalidAttributes[$scope.data[2]], function(err){
					// if (err.rule === "required") $scope.userErr = $scope.data[0] + "is missing. Min lenght - 5 symbols";
					if (err.rule === "minLength") $scope.passErr = "Password min lenght - 5 symbols";
				})
				if (res.data.invalidAttributes[$scope.data[3]]){
					if (res.data.invalidAttributes[$scope.data[3]][0].rule === "required") $scope.firstErr = "First name is required"
				}
				if (res.data.invalidAttributes[$scope.data[4]]){
					if (res.data.invalidAttributes[$scope.data[4]][0].rule === "required") $scope.lastErr = "Last name is required"
				}
				if (res.data.invalidAttributes[$scope.data[5]]){
					if (res.data.invalidAttributes[$scope.data[5]][0].rule === "required"){
							$scope.phoneErr = "Phone number is required"
							$scope.phoneMessage = null;
						}
				}
				if (res.data.invalidAttributes[$scope.data[7]]){
					if (res.data.invalidAttributes[$scope.data[7]][0].rule === "required") $scope.addrErr = "Address is required"
				}
				if (res.data.invalidAttributes[$scope.data[8]]){
					if (res.data.invalidAttributes[$scope.data[8]][0].rule === "required") $scope.codeErr = "Postal code is need to be in format 12345 AB"
				}
				if (res.data.invalidAttributes[$scope.data[9]]){
					if (res.data.invalidAttributes[$scope.data[9]][0].rule === "required") $scope.cvrErr = "Cvr number is required"
				}
			} else {
				console.log('YeP!')
				$location.url('/success');
			}
		})
	}

	$scope.createAcc = function(){
		if ($scope.email !== $scope.repeatedEmail || $scope.repeatedEmail === ''){
			$scope.errBool = true;
			$scope.errMessage = "Invalid repeated email"
		} else
			$scope.errBool = false;
			$scope.addNewAcc();
	}
}]);