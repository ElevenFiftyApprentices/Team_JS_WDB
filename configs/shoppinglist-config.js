var app = angular.module('myApp', ['ngRoute'])

//config portion for angular - this is the first thing that is executed
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		}).otherwise({
			redirectTo: '/home'
		})
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: "HomeController"
		})
		.when('/shopping-list', {
			templateUrl: 'views/shopping-list.html',
			controller: "ShoppingListController",
			controllerAs: 'shoplist'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);