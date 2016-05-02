angular.module("myApp").service('loginSrv', ['$http', '$q', function ($http, $q) {
	
	this.error = '';

	this.createAcc = function(username, email, password, firstName, lastName, phoneNumber, companyName, address, postalCode, cvrNumber){
		$http({
			method: "post",
			url: "/createAcc",
			data: {
				username : username,
				email :email,
				password :password,
				firstName : firstName,
				lastName : lastName,
				phoneNumber : phoneNumber,
				companyName : companyName,
				address : address,
				postalCode : postalCode,
				cvrNumber : cvrNumber
			}
		}).then(function (res){
			console.log(res);
		})
	},

	this.getAccs = function(){
		var call = $q.defer();
		$http.get('/getAccs').then(function onSucces(suc){
			call.resolve(suc.data)
		}, function onError(err){
			call.reject(err);
			console.log(err);
		})
		return call.promise;
	}

}])