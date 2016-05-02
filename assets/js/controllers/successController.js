app.controller('successCtrl', ['$scope', '$http', 'loginSrv', function($scope, $http, loginSrv){
	$scope.checkAll = function(){
		loginSrv.getAccs().then(function (res){
			console.log(res);
		})
	}
}])