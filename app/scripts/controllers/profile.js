'use strict';

function ProfileController($scope, profile) {
	$scope.profile = profile;
};

ProfileController.resolve = {
	profile : function(auth, $q) {
		return auth.fetchUserProfile();
	}
}
