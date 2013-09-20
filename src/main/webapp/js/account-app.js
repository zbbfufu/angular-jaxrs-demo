/*
 * 
 * 
 */

//angular module for accounts
var accountApp = angular.module('accountApp', ['ngResource']);

accountApp.controller('accountCtrl', function($scope, Rest){
	//init 
	$scope.accounts = Rest.listAccounts();
	$scope.sort = { field: 'libelle', order: true };
});


//service to access account REST API
accountApp.factory('Rest', function($resource) {
		return $resource('rest/account/:op', {}, {
			//get account list
			'listAccounts' : { method : 'GET', params:{ op:'list'}, isArray : true }
			//can add more actions here
		});
	}
);

