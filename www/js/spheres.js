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
 * Profiles section: defines the sphere class and built-in spheres.
 * 
 */
// Time for vibration in milliseconds when the sphere hits the wall.
var deltaTvib = 100;
// Constant for the gravitational acceleration of the earth in meters per second squared.
var g = 9.81;

// Constructor for spheres.
// mass: mass of the sphere in kilogramme. Has to be a positive value.
// cor: coefficient of restitution. Must be between 0 and 1.
// staticCOF: coefficient of the static friction. Must be between 0 and 1.
// slidingCOF: coefficient of the sliding friction. Must be between 0 and 1.
// color: color of the sphere. Has to be a valid html color.
function Sphere(mass, cor, staticCOF, slidingCOF, accelerationScaling, color) {
	// The bounding box defines the position of the sphere.
	this.boundingBox = {x:0, y:0, radius:12.5},
	// Mass of the sphere in kilogramme.
	this.mass = mass,
	// All values regarding the x direction are stored in x.
	this.x = new CoordinateProperties(),
	// All values regarding the y direction are stored in y.
	this.y = new CoordinateProperties(),
	// Scaling factor for the acceleration to increase or decrease its value.
	this.accelerationScaling = accelerationScaling;
	// The coefficient of restitution as value between 0 and 1.
	this.cor = cor,
	// The coefficient of the static friction as value between 0 and 1.
	this.staticCOF = staticCOF,
	// The coefficient of the sliding friction as value between 0 and 1.
	this.slidingCOF = slidingCOF,
	// Color of the sphere.
	this.color = color,
	// Updates the position based on the current acceleration.
	// deltaT: time difference since the last calculation in seconds.
	this.updatePosition = function(deltaT) {
		this.boundingBox.x = this.updateDirection(this.x, this.boundingBox.x, deltaT);
		this.boundingBox.y = this.updateDirection(this.y, this.boundingBox.y, deltaT);
	},
	// Updates the position for one direction.
	// coordProps: properties object representing the current direction.
	// coord: the current coordinate in the current direction.
	// deltaT: time difference since the last calculation in seconds.
	// Returns the new position. 
	this.updateDirection = function(coordProps, coord, deltaT) {
		// Friction calculation.
		var actualAcceleration;
		if(coordProps.velocity==0&&Math.abs(coordProps.acceleration)*this.mass<=Math.abs(coordProps.normalForce)*this.staticCOF) { 
			actualAcceleration = 0;
		} else {
			var frictionForce = this.slidingCOF*coordProps.normalForce/this.mass;
			if(coordProps.velocity<0) {
				frictionForce = -frictionForce;
			}
			actualAcceleration = coordProps.acceleration+frictionForce;
		}
		coordProps.velocity = coordProps.velocity+deltaT*actualAcceleration*this.accelerationScaling;
		// Next position.
		var next = coord+0.5*deltaT*coordProps.velocity;
		if(next <= coordProps.wall.f) {
			this.invertVelocity(coordProps);
			next = coordProps.wall.f;
		} else if(next+2*this.boundingBox.radius >= coordProps.wall.s) {
			this.invertVelocity(coordProps);
			next = coordProps.wall.s-2*this.boundingBox.radius;
		} else {
			coordProps.lastTvib = deltaTvib;
		}
		return next;
	},
	// Inverts the velocity in a direction when hitting a wall.
	// coordProps: property object of the current direction.
	this.invertVelocity = function(coordProps) {
		coordProps.velocity = this.cor*-coordProps.velocity;
		navigator.vibrate(coordProps.lastTvib);
		coordProps.lastTvib = 0;
	},
	// Sets the current rotation.
	// x: rotation in x direction.
	// y: rotation in y direction.
	this.setRotation = function(x, y) {
		this.x.setRotation(x, this.mass);
		this.y.setRotation(y, this.mass);
	},
	// Sets the wall for this sphere.
	// x: beginning of the wall in x direction.
	// y: beginning of the wall in y direction.
	// width: width of the wall.
	// height: height of the wall.
	this.setWall = function(x, y, width, height) {
		this.x.wall.f = x;
		this.x.wall.s = x+width;
		this.y.wall.f = y;
		this.y.wall.s = y+height;
	}
}

// Constructor for objects containing different values and properties for a direction.
function CoordinateProperties() {
	// The wall of the direction where f is the first, lower coordinate and s the second, higher one.
	this.wall = {f:0, s:0},
	// Velocity in meters per second.
	this.velocity = 0,
	// Contains the current acceleration in meters per second squared.
	this.acceleration = 0,
	// The current rotation in degrees.
	this.rotation = 0,
	// Stores the current normal force.
	this.normalForce = 0,
	// Last vibration duration after the sphere has hit a wall.
	this.lastTvib = deltaTvib,
	// Sets the rotation.
	// rotation: the new rotation.
	// mass: mass of the object this object belongs to.
	this.setRotation = function(rotation, mass) {
		this.rotation = rotation;
		this.normalForce = -Math.abs(Math.cos(rotation*Math.PI/180)*mass*g);
	}
}

// Default sphere.
var defaultSphere = new Sphere(10, 0.35, 0.12, 0.1, 150, "#000000");