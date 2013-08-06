'use strict';

angular.module('sbjsApp')
  .controller('SphereCtrl', function ($scope) {
    $scope.prepareCanvas = function(){
    	var canvas = $("canvas").get(0);
    };

    $scope.prepareCanvas();
  });
