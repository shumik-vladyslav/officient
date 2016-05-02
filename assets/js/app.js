var app = angular.module('myApp', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/home',
		{
			templateUrl: '/js/pages/home.html',
			controller: 'loginCtrl'
		}).
		when('/success',
		{
			templateUrl: '/js/pages/success.html',
			controller: 'successCtrl'
		})
}])