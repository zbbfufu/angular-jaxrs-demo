//mon module angular
var accountApp = angular.module('accountApp', ['accountServices']);

//mon modèle au niveau browser
var accounts = [];


//calcule le solde total des comptes
var fnCalcTotalBalance = function() {
	var total = 0;
	for (var i = accounts.length - 1; i >= 0; i--) {
		total += accounts[i].solde;
	};
	return total;
};

//
accountApp.controller('accountCtrl', function($scope, Rest){
	
	//init
	$scope.accounts = Rest.listAccounts();
	$scope.sort = { field: 'libelle', order: true };
	
	//met à jour le total des comptes lorsque le modèle change
	$scope.totalBalance = fnCalcTotalBalance();
	$scope.$watch('accounts', function(){
		$scope.totalBalance = fnCalcTotalBalance();
	}, true);
	
	$scope.refresh = function(){
		$scope.totalBalance = fnCalcTotalBalance();
	};
});

angular.module('accountServices', ['ngResource'])
	.factory('Rest', function($resource) {
		return $resource('rest/account/list', {}, {
			listAccounts : {
				method : 'GET', isArray : true
			}
		});
	}
);

