angular.module('myApp')

//home controller - we will also use the data from shoppinglistitems service
.controller('HomeController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems) {
	var home = $scope;
	home.items = ShoppingListItems.getList();
}]);