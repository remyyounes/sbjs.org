'use strict';

function MembersController($scope, members) {
	$scope.members = members;
}

MembersController.resolve = {
	members: function(auth, $q){
		return auth.fetchMembers();
	}
};