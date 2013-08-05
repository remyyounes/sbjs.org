'use strict';

var COLORS = '#f0f8ff,#faebd7,#ffefdb,#eedfcc,#cdc0b0,#8b8378,#7fffd4,#76eec6,#458b74,#f0ffff,#e0eeee,#c1cdcd,#838b8b,#f5f5dc,#ffe4c4,#eed5b7,#cdb79e,#8b7d6b,#000000,#ffebcd,#0000ff,#0000ee,#00008b,#8a2be2,#a52a2a,#ff4040,#ee3b3b,#cd3333,#8b2323,#deb887,#ffd39b,#eec591,#cdaa7d,#8b7355,#5f9ea0,#98f5ff,#8ee5ee,#7ac5cd,#53868b,#7fff00,#76ee00,#66cd00,#458b00,#d2691e,#ff7f24,#ee7621,#cd661d,#ff7f50,#ff7256,#ee6a50,#cd5b45,#8b3e2f,#6495ed,#fff8dc,#eee8cd,#cdc8b1,#8b8878,#00ffff,#00eeee,#00cdcd,#008b8b,#b8860b,#ffb90f,#eead0e,#cd950c,#8b6508,#006400,#bdb76b,#556b2f,#caff70,#bcee68,#a2cd5a,#6e8b3d,#ff8c00,#ff7f00,#ee7600,#cd6600,#8b4500,#9932cc,#bf3eff,#b23aee,#9a32cd,#68228b,#e9967a,#8fbc8f,#c1ffc1,#b4eeb4,#9bcd9b,#698b69,#483d8b,#2f4f4f,#97ffff,#8deeee,#79cdcd,#528b8b,#00ced1,#9400d3,#ff1493,#ee1289,#cd1076,#8b0a50,#00bfff,#00b2ee,#009acd,#00688b,#696969,#1e90ff,#1c86ee,#1874cd,#104e8b,#b22222,#ff3030,#ee2c2c,#cd2626,#8b1a1a,#fffaf0,#228b22,#dcdcdc,#f8f8ff,#ffd700,#eec900,#cdad00,#8b7500,#daa520,#ffc125,#eeb422,#cd9b1d,#8b6914,#bebebe,#030303,#1a1a1a,#1c1c1c,#1f1f1f,#212121,#242424,#262626,#292929,#2b2b2b,#2e2e2e,#303030,#050505,#333333,#363636,#383838,#3b3b3b,#3d3d3d,#404040,#424242,#454545,#474747,#4a4a4a,#080808,#4d4d4d,#4f4f4f,#525252,#545454,#575757,#595959,#5c5c5c,#5e5e5e,#616161,#636363,#0a0a0a,#666666,#696969,#6b6b6b,#6e6e6e,#707070,#737373,#757575,#787878,#7a7a7a,#7d7d7d,#0d0d0d,#7f7f7f,#828282,#858585,#878787,#8a8a8a,#8c8c8c,#8f8f8f,#919191,#949494,#969696,#0f0f0f,#999999,#9c9c9c,#9e9e9e,#a1a1a1,#a3a3a3,#a6a6a6,#a8a8a8,#ababab,#adadad,#b0b0b0,#121212,#b3b3b3,#b5b5b5,#b8b8b8,#bababa,#bdbdbd,#bfbfbf,#c2c2c2,#c4c4c4,#c7c7c7,#c9c9c9,#141414,#cccccc,#cfcfcf,#d1d1d1,#d4d4d4,#d6d6d6,#d9d9d9,#dbdbdb,#dedede,#e0e0e0,#e3e3e3,#171717,#e5e5e5,#e8e8e8,#ebebeb,#ededed,#f0f0f0,#f2f2f2,#f7f7f7,#fafafa,#fcfcfc,#00ff00,#00ee00,#00cd00,#008b00,#adff2f,#f0fff0,#e0eee0,#c1cdc1,#838b83,#ff69b4,#ff6eb4,#ee6aa7,#cd6090,#8b3a62,#cd5c5c,#ff6a6a,#ee6363,#cd5555,#8b3a3a,#fffff0,#eeeee0,#cdcdc1,#8b8b83,#f0e68c,#fff68f,#eee685,#cdc673,#8b864e,#e6e6fa,#fff0f5,#eee0e5,#cdc1c5,#8b8386,#7cfc00,#fffacd,#eee9bf,#cdc9a5,#8b8970,#eedd82,#add8e6,#bfefff,#b2dfee,#9ac0cd,#68838b,#f08080,#e0ffff,#d1eeee,#b4cdcd,#7a8b8b,#ffec8b,#eedc82,#cdbe70,#8b814c,#fafad2,#d3d3d3,#ffb6c1,#ffaeb9,#eea2ad,#cd8c95,#8b5f65,#ffa07a,#ee9572,#cd8162,#8b5742,#20b2aa,#87cefa,#b0e2ff,#a4d3ee,#8db6cd,#607b8b,#8470ff,#778899,#b0c4de,#cae1ff,#bcd2ee,#a2b5cd,#6e7b8b,#ffffe0,#eeeed1,#cdcdb4,#8b8b7a,#32cd32,#faf0e6,#ff00ff,#ee00ee,#cd00cd,#8b008b,#b03060,#ff34b3,#ee30a7,#cd2990,#8b1c62,#66cdaa,#66cdaa,#0000cd,#ba55d3,#e066ff,#d15fee,#b452cd,#7a378b,#9370db,#ab82ff,#9f79ee,#8968cd,#5d478b,#3cb371,#7b68ee,#00fa9a,#48d1cc,#c71585,#191970,#f5fffa,#ffe4e1,#eed5d2,#cdb7b5,#8b7d7b,#ffe4b5,#ffdead,#eecfa1,#cdb38b,#8b795e,#000080,#fdf5e6,#6b8e23,#c0ff3e,#b3ee3a,#698b22,#ffa500,#ee9a00,#cd8500,#8b5a00,#ff4500,#ee4000,#cd3700,#8b2500,#da70d6,#ff83fa,#ee7ae9,#cd69c9,#8b4789,#db7093,#eee8aa,#98fb98,#9aff9a,#90ee90,#7ccd7c,#548b54,#afeeee,#bbffff,#aeeeee,#96cdcd,#668b8b,#db7093,#ff82ab,#ee799f,#cd6889,#8b475d,#ffefd5,#ffdab9,#eecbad,#cdaf95,#8b7765,#ffc0cb,#ffb5c5,#eea9b8,#cd919e,#8b636c,#dda0dd,#ffbbff,#eeaeee,#cd96cd,#8b668b,#b0e0e6,#a020f0,#9b30ff,#912cee,#7d26cd,#551a8b,#ff0000,#ee0000,#cd0000,#8b0000,#bc8f8f,#ffc1c1,#eeb4b4,#cd9b9b,#8b6969,#4169e1,#4876ff,#436eee,#3a5fcd,#27408b,#8b4513,#fa8072,#ff8c69,#ee8262,#cd7054,#8b4c39,#f4a460,#54ff9f,#4eee94,#43cd80,#2e8b57,#fff5ee,#eee5de,#cdc5bf,#8b8682,#a0522d,#ff8247,#ee7942,#cd6839,#8b4726,#87ceeb,#87ceff,#7ec0ee,#6ca6cd,#4a708b,#6a5acd,#836fff,#7a67ee,#6959cd,#473c8b,#708090,#c6e2ff,#b9d3ee,#9fb6cd,#6c7b8b,#fffafa,#eee9e9,#cdc9c9,#8b8989,#00ff7f,#00ee76,#00cd66,#008b45,#4682b4,#63b8ff,#5cacee,#4f94cd,#36648b,#d2b48c,#ffa54f,#ee9a49,#cd853f,#8b5a2b,#d8bfd8,#ffe1ff,#eed2ee,#cdb5cd,#8b7b8b,#ff6347,#ee5c42,#cd4f39,#8b3626,#40e0d0,#00f5ff,#00e5ee,#00c5cd,#00868b,#ee82ee,#d02090,#ff3e96,#ee3a8c,#cd3278,#8b2252,#f5deb3,#ffe7ba,#eed8ae,#cdba96,#8b7e66,#ffffff,#f5f5f5,#ffff00,#eeee00,#cdcd00,#8b8b00,#9acd32'.split(',');

var Ball = function(x, y, angle, speed, color){
	this.x = x;
	this.y = y;
	this.angle = angle || 35;
	this.speed = 5; // speed || 5;
	this.velocityX = 0;
	this.velocityY = 0;
	this.radians = 0;
	this.radius = 15;
	this.color = color;
	this.mass = this.radius;
};

// update next coordinates, for collision detection
Ball.prototype.prepareToMove = function() {
	this.nextX = this.x + this.velocityX;
	this.nextY = this.y + this.velocityY;
};

Ball.prototype.move = function(context) {
	this.x = this.nextX;
	this.y = this.nextY;

	context.fillStyle = this.color;
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	context.closePath();
	context.fill();
};

Ball.prototype.update = function(){
	this.radians = this.angle * Math.PI / 180;
	this.velocityX = Math.cos(this.radians) * this.speed;
	this.velocityY = Math.sin(this.radians) * this.speed;
};

// check for collision between balls, based on their next position
Ball.prototype.hasCollidedWith = function(otherBall) {
	if ( _.isEqual(this, otherBall) ){
		 return false;
	}
	var dx = this.nextX - otherBall.nextX;
	var dy = this.nextY - otherBall.nextY;
	var distance = (dx * dx + dy * dy);
	var collisionDistance = (this.radius + otherBall.radius) * (this.radius + otherBall.radius);
	return distance <= collisionDistance;
};

// collide this ball with another ball
Ball.prototype.collideWith = function(otherBall) {
	var ball = this;
	var dx = ball.nextX - otherBall.nextX;
	var dy = ball.nextY - otherBall.nextY;

	var collisionAngle = Math.atan2(dy, dx);

	var speed1 = Math.sqrt( ball.velocityX * ball.velocityX + ball.velocityY * ball.velocityY );
	var speed2 = Math.sqrt( otherBall.velocityX * otherBall.velocityX + otherBall.velocityY * otherBall.velocityY );

	var direction1 = Math.atan2(ball.velocityY, ball.velocityX);
	var direction2 = Math.atan2(otherBall.velocityY, otherBall.velocityX);

	var velocityX_1 = speed1 * Math.cos(direction1 - collisionAngle);
	var velocityY_1 = speed1 * Math.sin(direction1 - collisionAngle);
	var velocityX_2 = speed2 * Math.cos(direction2 - collisionAngle);
	var velocityY_2 = speed2 * Math.sin(direction2 - collisionAngle);

	var finalVelocityX_1 = ( (ball.mass - otherBall.mass) * velocityX_1 + (otherBall.mass + otherBall.mass) * velocityX_2 ) / (ball.mass + otherBall.mass);
	var finalVelocityX_2 = ( (ball.mass + ball.mass) * velocityX_1 + (otherBall.mass - ball.mass) * velocityX_2 ) / (ball.mass + otherBall.mass);

	var finalVelocityY_1 = velocityY_1;
	var finalVelocityY_2 = velocityY_2;

	ball.velocityX = Math.cos(collisionAngle) * finalVelocityX_1 + Math.cos(collisionAngle + Math.PI/2) * finalVelocityY_1;
	ball.velocityY = Math.sin(collisionAngle) * finalVelocityX_1 + Math.sin(collisionAngle + Math.PI/2) * finalVelocityY_1;
	otherBall.velocityX = Math.cos(collisionAngle) * finalVelocityX_2 + Math.cos(collisionAngle + Math.PI/2) * finalVelocityY_2;
	otherBall.velocityY = Math.sin(collisionAngle) * finalVelocityX_2 + Math.sin(collisionAngle + Math.PI/2) * finalVelocityY_2;

	ball.nextX = ball.nextX + ball.velocityX;
	ball.nextY = ball.nextY + ball.velocityY;
	otherBall.nextX = otherBall.nextX + otherBall.velocityX;
	otherBall.nextY = otherBall.nextY + otherBall.velocityY;

};

// ball factory
Ball.generate = function(containerWidth, containerHeight){
	var x = Math.floor(Math.random()*containerWidth-1);
	var y = Math.floor(Math.random()*containerHeight-1);
	var angle = Math.floor(Math.random()*361);
	var speed = Math.floor(Math.random()*31) + 5;
	var colorIndex = Math.floor(Math.random()*COLORS.length-1);
	var color = COLORS[colorIndex];
	return new Ball(x, y, angle, speed, color);
};

Ball.prototype.checkWallCollision = function(canvas) {

	if (this.nextX + this.radius > canvas.width){
		this.velocityX = this.velocityX*-1;
		this.nextX = canvas.width - this.radius;
	} else if (this.nextX-this.radius < 0) {
		this.velocityX = this.velocityX*-1;
		this.nextX = this.radius;
	} else if (this.nextY+this.radius > canvas.height) {
		this.velocityY = this.velocityY*-1;
		this.nextY = canvas.height - this.radius;
	} else if (this.nextY - this.radius < 0) {
		this.velocityY = this.velocityY*-1;
		this.nextY = this.radius;
	}
};

angular.module('sbjsApp')
  .controller('SolarController', function ($scope) {

  	$scope.ballCount = {
  		count: 10
  	};

  	$scope.bounceDemBalls = function(){
  		var context = $scope.context;
  		var canvas = $scope.canvas;
  		var balls = $scope.balls;

  		context.fillStyle = '#EEE';
  		context.fillRect(0,0,canvas.width, canvas.height);
  		context.strokeStyle = '#333';
  		context.strokeRect(1,1,canvas.width-2, canvas.height-2);

  		_.each(balls, function(ball){
  			ball.prepareToMove(context);

  			_.each(balls, function(collisionBall){
  				console.log("testing collision detection");  				
  				if ( ball.hasCollidedWith(collisionBall) ) {
  					// var ballIndex = balls.indexOf(ball);
  					// console.log(ballIndex);
  					// balls.splice(ballIndex, 1);
  					ball.collideWith(collisionBall);
  				}
  			});

  			ball.checkWallCollision(canvas);

  			ball.move(context);
  		});
  	};

    $scope.startCanvas = function() {
    	var canvas = $('canvas').get(0);
    	var context = canvas.getContext('2d');
    	var balls = [];

    	while ($scope.ballCount.count--) {
    		var ball = Ball.generate(canvas.width, canvas.width);
    		balls.push(ball);
    	}

    	// kick this shit off
    	_.each(balls, function(ball){
    		ball.update();
    	});

    	$scope.canvas = canvas;
    	$scope.context = context;
    	$scope.balls = balls;

    	$scope.startStopBalls();
		};

		$scope.startStopBalls = function(){
			if ($scope.interval) {
				// stop
				clearInterval($scope.interval);
				$scope.interval = undefined;
				$('#toggle-action').val('Resume');
			} else {
				// start
				$scope.interval = setInterval($scope.bounceDemBalls, 33);
				$('#toggle-action').val('Pause');
			}
		}

    $scope.startCanvas();

  });
