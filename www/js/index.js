/*
 * ###################################################
 * #####    Phyimulation - Apache License 2.0     ####
 * ###################################################
 *
 * Copyright 2018 Martin Armbruster
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * App functions section: All functions regarding the app functionality in general is found here.
 * 
 */
var app = {
    // Application Constructor
    initialize: function() {
    	canvas = document.getElementById("simulationArea");
    	window.addEventListener("resize", resizeCanvas);
    	resizeCanvas();
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
    	document.addEventListener("pause", this.onPause, false);
    	document.addEventListener("resume", this.onResume, false);
    	window.addEventListener("deviceorientation", updateNormalForce, true);
    	window.plugins.insomnia.keepAwake();
    	beginDrawing(defaultSphere);
    },
    // pause Event Handler
    onPause: function() {
    	stopDrawing();
    	window.plugins.insomnia.allowSleepAgain();
    },
    // resume Event Handler
    onResume: function() {
    	window.plugins.insomnia.keepAwake();
    	beginDrawing(defaultSphere);
    }
};
app.initialize();

// Resizes the canvas to fit to the window.
function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

/*
 * Drawing section: all functions and properties regarding drawing a sphere goes here.
 * 
 */
// The canvas on which the sphere is drawn.
var canvas = null;
// The currently drawn sphere.
var currentSphere = null;
// Time of the last draw.
var lastDraw = null;
// ID of the next requested frame draw. It is used to cancel the animation.
var requestID = null;
// Watch ID of the accelerometer.
var watchID = null;

// Starts the drawing process. It requires a sphere to draw.
function beginDrawing(sphere) {
	currentSphere = sphere;
	watchID = navigator.accelerometer.watchAcceleration(updateAcceleration, onAccelerometerError, {frequency:deltaTa});
	canvas = document.getElementById("simulationArea");
	currentSphere.walls.width = canvas.width;
	currentSphere.walls.height = canvas.height;
	lastDraw = Date.now();
	requestID = window.requestAnimationFrame(drawFrame, canvas);
}

// Stops the current drawing.
function stopDrawing() {
	window.cancelAnimationFrame(requestID);
	requestID = undefined;
	navigator.accelerometer.clearWatch(watchID);
}

// Draws the sphere on a frame.
function drawFrame() {
	var deltaT = (Date.now()-lastDraw)/1000;
	lastDraw = Date.now();
	currentSphere.updatePosition(deltaT);
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	var midX = currentSphere.boundingBox.x+currentSphere.boundingBox.radius;
	var midY = currentSphere.boundingBox.y+currentSphere.boundingBox.radius;
	context.moveTo(midX, midY);
	context.arc(midX, midY, currentSphere.boundingBox.radius, 0, Math.PI*2, true);
	context.closePath();
	context.fillStyle = currentSphere.color;
	context.lineWidth = 0;
	context.fill();
	window.requestAnimationFrame(drawFrame, canvas);
}

// Updates the acceleration with a current acceleration value retrieved by the accelerometer.
function updateAcceleration(acceleration) {
	accelerationValues.ax = -acceleration.x;
	accelerationValues.ay = acceleration.y;
}

// Called when there is an error on retrieving the acceleration. Currently, not implemented.
function onAccelerometerError() {
}

// Updates the normal force acting on the current sphere based upon the current device orientation.
function updateNormalForce(event) {
	normalForce.fnx = -Math.abs(Math.cos(event.beta*Math.PI/180)*currentSphere.mass*g);
	normalForce.fny = -Math.abs(Math.cos(event.gamma*Math.PI/180)*currentSphere.mass*g);
}

/*
 * Profiles section: defines the sphere class and built-in spheres.
 * 
 */
// Time interval for retrieving the acceleration values.
var deltaTa = 0.05;
// Time for vibration in milliseconds when the sphere hits the wall.
var deltaTvib = 100;
// Constant for the gravitational acceleration of the earth in meter per second squared.
var g = 9.81;
// Contains the current acceleration of the sphere in meter per second squared.
var accelerationValues = {ax:0, ay:0};
// Stores the current normal force acting on the sphere.
var normalForce = {fnx:0, fny:0};

// Constructor for spheres.
// mass: mass of the sphere in kilogramme. Has to be a positive value.
// cor: coefficient of restitution. Must be between 0 and 1.
// staticCOF: coefficient of the static friction. Must be between 0 and 1.
// slidingCOF: coefficient of the sliding friction. Must be between 0 and 1.
// color: color of the sphere. Has to be a valid html color.
function Sphere(mass, cor, staticCOF, slidingCOF, color) {
	// The bounding box defines the position of the sphere.
	this.boundingBox = {x:0, y:0, radius:12.5},
	// The wall defines the area in which the sphere moves.
	this.walls = {x:0, y:0, width:0, height:0};
	// Mass of the sphere in kilogramme.
	this.mass = mass,
	// Velocity of the sphere in meter per second.
	this.velocity = {vx:0, vy:0},
	// The coefficient of restitution as value between 0 and 1.
	this.cor = cor;
	// The coefficient of the static friction as value between 0 and 1.
	this.staticCOF = staticCOF,
	// The coefficient of the sliding friction as value between 0 and 1.
	this.slidingCOF = slidingCOF,
	// Color of the sphere.
	this.color = color,
	// Updates the position based on the current acceleration.
	// deltaT: time difference since the last calculation in seconds.
	this.updatePosition = function(deltaT) {
		var actualAccelerationX;
		if(this.velocity.vx==0&&Math.abs(accelerationValues.ax)*this.mass<=Math.abs(normalForce.fnx)*this.staticCOF) { 
			actualAccelerationX = 0;
		} else {
			var frictionForce = this.slidingCOF*normalForce.fnx/this.mass;
			if(accelerationValues.ax<0) {
				actualAccelerationX = accelerationValues.ax-frictionForce;
			} else {
				actualAccelerationX = accelerationValues.ax+frictionForce;
			}
		}
		var nextVelocityX = this.velocity.vx+deltaT*actualAccelerationX;
		if(nextVelocityX<0&&this.velocity.vx>0||nextVelocityX>0&&this.velocity.vx<0) {
			nextVelocityX = 0;
		}
		var actualAccelerationY;
		if(this.velocity.vy==0&&Math.abs(accelerationValues.ay)*this.mass<=Math.abs(normalForce.fny)*this.staticCOF) { 
			actualAccelerationY = 0;
		} else {
			var frictionForce = this.slidingCOF*normalForce.fny/this.mass;
			if(accelerationValues.ay<0) {
				actualAccelerationY = accelerationValues.ay-frictionForce;
			} else {
				actualAccelerationY = accelerationValues.ay+frictionForce;
			}
		}
		var nextVelocityY = this.velocity.vy+deltaT*actualAccelerationY;
		if(nextVelocityY<0&&this.velocity.vy>0||nextVelocityY>0&&this.velocity.vy<0) {
			nextVelocityY = 0;
		}
		this.velocity.vx = nextVelocityX;
		this.velocity.vy = nextVelocityY;
		var nextX = this.boundingBox.x+0.5*deltaT*this.velocity.vx;
		var nextY = this.boundingBox.y+0.5*deltaT*this.velocity.vy;
		if(nextX < this.walls.x) {
			this.velocity.vx = this.cor*-this.velocity.vx;
			navigator.vibrate(deltaTvib);
			nextX = this.walls.x;
		} else if(nextX+2*this.boundingBox.radius >= this.walls.x+this.walls.width) {
			this.velocity.vx = this.cor*-this.velocity.vx;
			navigator.vibrate(deltaTvib);
			nextX = this.walls.x+this.walls.width-2*this.boundingBox.radius;
		}
		if(nextY < this.walls.y) {
			this.velocity.vy = this.cor*(0-this.velocity.vy);
			navigator.vibrate(deltaTvib);
			nextY = this.walls.y;
		} else if(nextY+2*this.boundingBox.radius >= this.walls.y+this.walls.height) {
			this.velocity.vy = this.cor*(0-this.velocity.vy);
			navigator.vibrate(deltaTvib);
			nextY = this.walls.y+this.walls.height-2*this.boundingBox.radius;
		}
		this.boundingBox.x = nextX;
		this.boundingBox.y = nextY;
	}
}

// Default sphere.
var defaultSphere = new Sphere(1, 0.25, 0.2, 0.15, '#000000');