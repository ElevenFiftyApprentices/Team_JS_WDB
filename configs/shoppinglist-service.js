angular.module('myApp')

//create a factory service where our data "model" will live
//the model is where the data lives
.factory('ShoppingListItems', function() {
	var items = [];

	function getList() {
		return items;
	}

	return {
		getList: getList
	};
});
