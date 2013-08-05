'use strict';

describe('Controller: SolarController', function () {

  // load the controller's module
  beforeEach(module('sbjsApp'));

  var SolarController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolarController = $controller('SolarController', {
      $scope: scope
    });
  }));
});
