'use strict';

angular.module('sbjsApp')
  .controller('SphereCtrl', function ($scope) {
    $scope.prepareCanvas = function(){
    	// set the scene size
    	var WIDTH = 800,
    	  HEIGHT = 500;

    	// set some camera attributes
    	var VIEW_ANGLE = 45,
    	  ASPECT = WIDTH / HEIGHT,
    	  NEAR = 0.1,
    	  FAR = 10000;

    	// get the DOM element to attach to
    	// - assume we've got jQuery to hand
    	var $container = $('#container');

    	// create a WebGL renderer, camera
    	// and a scene
    	var renderer = new THREE.WebGLRenderer();
    	var camera =
    	  new THREE.PerspectiveCamera(
    	    VIEW_ANGLE,
    	    ASPECT,
    	    NEAR,
    	    FAR);

    	var scene = new THREE.Scene();

    	// add the camera to the scene
    	scene.add(camera);

    	// the camera starts at 0,0,0
    	// so pull it back
    	camera.position.z = 300;

    	// start the renderer
    	renderer.setSize(WIDTH, HEIGHT);

    	// attach the render-supplied DOM element
    	$container.append(renderer.domElement);

    	// set up the sphere vars
    	var radius = 50,
    	    segments = 32,
    	    rings = 32;

    	// create the sphere's material
    	var sphereMaterial =
    	  new THREE.MeshLambertMaterial(
    	    {
    	      color: 0xFFFF00
    	    });

    	// create a new mesh with
    	// sphere geometry - we will cover
    	// the sphereMaterial next!
    	var sunSphere = new THREE.Mesh(

    	  new THREE.SphereGeometry(
    	    radius,
    	    segments,
    	    rings),

    	  sphereMaterial);

    	// add the sphere to the scene
    	scene.add(sunSphere);

    	// create a point light
    	var pointLight =
    	  new THREE.PointLight(0xFFFFFF);

    	// set its position
    	pointLight.position.x = 10;
    	pointLight.position.y = 50;
    	pointLight.position.z = 190;

    	// add to the scene
    	scene.add(pointLight);

    	// set the geometry to dynamic
    	// so that it allow updates
    	sunSphere.geometry.dynamic = true;
    	// changes to the vertices
    	sunSphere.geometry.verticesNeedUpdate = true;
    	// changes to the normals
    	sunSphere.geometry.normalsNeedUpdate = true;


    	// create the sphere's material
    	var earthMaterial =
    	  new THREE.MeshLambertMaterial(
    	    {
    	      color: 0x00EEFF
    	    });

    	var earth = new THREE.Mesh(new THREE.SphereGeometry(
    		3, // radius
    		16, // segments
    		16 //segments
    	), earthMaterial);
    	earth.geometry.dynamic = true;
    	earth.geometry.verticesNeedUpdate = true;
    	earth.geometry.normalsNeedUpdate = true;

    	earth.position.x = 0;
    	earth.position.z = 100;

    	scene.add(earth);

    	var step = 1;
    	setInterval(function(){
    		// optionally rotate the sun on each interval
    		// sunSphere.rotation.x = (sunSphere.rotation.x + 1) % 360;

    		// earth spins around sun
    		var newX = earth.position.x + step;

    		if (newX === 100){
    			step = -1;
    		} else if (newX === -100) {
    			step = 1;
    		}
    		var x_squared = Math.pow(newX, 2);
    		var z_squared = 10000 - x_squared;
    		var newZ = Math.sqrt(z_squared) * step;
    		earth.position.x = newX;
    		earth.position.z = newZ;

    		// draw!
    		renderer.render(scene, camera);
    	}, 33);




    	debugger

    };

    $scope.prepareCanvas();
  });
