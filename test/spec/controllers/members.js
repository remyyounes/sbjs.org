'use strict';

describe('Controller: MembersCtrl', function () {

  // load the controller's module
  beforeEach(module('sbjsApp'));

  var MembersCtrl, getSpy,
    scope, http, cookies;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $cookies) {
    scope = $rootScope.$new();

    MembersCtrl = $controller('MembersCtrl', {
      $scope: scope
    });

  }));

});
