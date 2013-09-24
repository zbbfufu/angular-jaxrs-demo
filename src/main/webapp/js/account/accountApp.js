//angular module for accounts
var accountApp = angular.module('accountApp', ['ngResource']);

accountApp.controller('accountCtrl', function($scope, Rest){
	//init 
	$scope.accounts = Rest.listAccounts();
	
	//FIXME SUM DO NOT WORK
	$scope.totalBalance = function(accList) {
		console.log("Calc total balance, accList.lenght = "+accList.length);
		var total = 0;
		for(var i=0; i<accList.length; i++) {
			total += accList[i].solde;
		}
		return total;
	};
	
	$scope.sort = { field: 'libelle', order: true };
});

//service to access account REST API
accountApp.factory('Rest', ['$resource', function($resource) {
	return $resource('rest/account/:op',
		{}, //global params
		{
			'listAccounts' : { method : 'GET', params:{ op:'list'}, isArray : true }
			//... other operations
		}
	);
}]);
