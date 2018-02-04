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
    	window.addEventListener("orientationchange", resizeCanvas);
    	resizeCanvas();
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
    	document.addEventListener("pause", this.onPause, false);
    	document.addEventListener("resume", this.onResume, false);
    	beginDrawing(defaultSphere);
    },
    // pause Event Handler
    onPause: function() {
    	stopDrawing();
    },
    // resume Event Handler
    onResume: function() {
    	beginDrawing(defaultSphere);
    }
};
app.initialize();

// Resizes the canvas to fit to the window.
function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	if(currentSphere!=null) {
		currentSphere.walls.width = canvas.width;
		currentSphere.walls.height = canvas.height;
	}
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

// Starts the drawing process. It requires a sphere to draw.
function beginDrawing(sphere) {
	currentSphere = sphere;
	canvas = document.getElementById("simulationArea");
	lastDraw = Date.now();
	requestID = window.requestAnimationFrame(drawFrame, canvas);
}

// Stops the current drawing.
function stopDrawing() {
	window.cancelAnimationFrame(requestID);
	requestID = undefined;
}

// Draws the sphere on a frame.
function drawFrame() {
	var deltaT = lastDraw-Date.now();
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
	context.strokeStyle = currentSphere.color;
	context.lineWidth = 1;
	context.lineJoin = 'round';
	context.fill();
	window.requestAnimationFrame(drawFrame, canvas);
}

/*
 * Profiles section: defines the sphere class and built-in spheres.
 * 
 */
// Time interval for retrieving the acceleration values.
var deltaTa = 0.05;
// Time for vibration in milliseconds when the sphere hits the wall.
var deltaTvib = 100;
// Contains the current acceleration of the sphere in meter per second squared.
var acceleration = {ax:0, ay:0};

// Constructor for spheres.
// cor: coefficient of restitution.
function Sphere(mass, color, cor) {
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
	// Color of the sphere.
	this.color = color,
	// Updates the position.
	this.updatePosition = function(deltaT) {
		this.velocity.vx += deltaT*acceleration.ax;
		this.velocity.vy += deltaT*acceleration.ay;
		var nextX = this.boundingBox.x+0.5*deltaT*this.velocity.vx;
		var nextY = this.boundingBox.y+0.5*deltaT*this.velocity.vy;
		var invertX = function() {
			this.velocity.vx = this.cor*(0-this.velocity.vx);
			navigator.vibrate(deltaTvib);
		}
		var invertY = function() {
			this.velocity.vy = this.cor*(0-this.velocity.vy);
			navigator.vibrate(deltaTvib);
		}
		if(nextX <= this.walls.x) {
			invertX();
			nextX = this.walls.x;
		} else if(nextX+2*this.boundingBox.radius >= this.walls.x+this.walls.width) {
			invertX();
			nextX = this.walls.x+this.walls.width;
		}
		if(nextY <= this.walls.y) {
			invertY();
			nextY = this.walls.y;
		} else if(nextY+2*this.boundingBox.radius >= this.walls.y+this.walls.height) {
			invertY();
			nextY = this.walls.y+this.walls.height;
		}
		this.boundingBox.x = nextX;
		this.boundingBox.y = nextY;
	}
}

// Default sphere.
var defaultSphere = new Sphere(1, '#000000');