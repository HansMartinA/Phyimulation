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
 * Drawing and sensor section: all functions and properties regarding drawing a sphere goes here inclusive all functions 
 * for retrieving and updating sensor values in order to simulate the sphere.
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
// Time interval for retrieving the acceleration values.
var deltaTa = 0.05;
// Watch ID of the accelerometer.
var watchID = null;

// Starts the drawing process. It requires a sphere to draw.
function beginDrawing(sphere) {
	currentSphere = sphere;
	window.plugins.insomnia.keepAwake();
	watchID = navigator.accelerometer.watchAcceleration(updateAcceleration, onAccelerometerError, {frequency:deltaTa});
	window.addEventListener("deviceorientation", updateNormalForce, true);
	canvas = document.getElementById("simulationArea");
	currentSphere.walls.width = canvas.width;
	currentSphere.walls.height = canvas.height;
	lastDraw = Date.now();
	requestID = window.requestAnimationFrame(drawFrame, canvas);
}

// Stops the current drawing.
function stopDrawing() {
	window.plugins.insomnia.allowSleepAgain();
	window.cancelAnimationFrame(requestID);
	requestID = undefined;
	navigator.accelerometer.clearWatch(watchID);
}

// Draws the sphere on a frame.
function drawFrame() {
	var deltaT = (Date.now()-lastDraw)/1000;
	lastDraw = Date.now();
	currentSphere.updatePosition(deltaT);
	var context = canvas.getContext("2d");
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
	currentSphere.acceleration.ax = -acceleration.x;
	currentSphere.acceleration.ay = acceleration.y;
}

// Called when there is an error on retrieving the acceleration. Currently, not implemented.
function onAccelerometerError() {
}

// Updates the normal force acting on the current sphere based upon the current device orientation.
function updateNormalForce(event) {
	currentSphere.normalForce.fnx = -Math.abs(Math.cos(event.beta*Math.PI/180)*currentSphere.mass*g);
	currentSphere.normalForce.fny = -Math.abs(Math.cos(event.gamma*Math.PI/180)*currentSphere.mass*g);
}