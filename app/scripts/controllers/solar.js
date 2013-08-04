'use strict';

angular.module('sbjsApp')
  .controller('SolarCtrl', function ($scope) {

    $scope.startCanvas = function() {
    	var canvas = $("canvas").get(0);
    	var context = canvas.getContext("2d");

    	var updateBall = function() {
    		radians = angle * Math.PI / 180;
    		xunits = Math.cos(radians) * speed;
    		yunits = Math.sin(radians) * speed;
    	};

    	var drawScreen = function() {
    		context.fillStyle = "#EEE";
    		context.fillRect(0,0,canvas.width, canvas.height);
    		context.strokeStyle = "#000";
    		context.strokeRect(1,1,canvas.width-2, canvas.height-2);
    		ball.x += xunits;
    		ball.y += yunits;

    		context.fillStyle = "#000";
    		context.beginPath();
    		context.arc(ball.x,ball.y,15,0,Math.PI*2,true);
    		context.closePath();
    		context.fill();

    		if (ball.x > canvas.width || ball.x < 0){
    			angle = 180 - angle;
    			updateBall();
    		} else if (ball.y > canvas.height || ball.y < 0) {
    			angle = 360 - angle;
    			updateBall();
    		}
    	};

    	var speed = 5;
    	var first_position = {
    		x : 20,
    		y : 20
    	};
    	var angle = 35;
    	var radians = 0;
    	var xunits = 0;
    	var yunits = 0;
    	var ball = {
    		x : first_position.x,
    		y : first_position.y
    	};
    	updateBall();

    	setInterval(drawScreen, 33);
		};

    $scope.startCanvas();

  });
