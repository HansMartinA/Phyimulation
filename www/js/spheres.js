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
	// The wall defines the area in which the sphere moves.
	this.walls = {x:0, y:0, width:0, height:0};
	// Mass of the sphere in kilogramme.
	this.mass = mass,
	// Velocity of the sphere in meters per second.
	this.velocity = {vx:0, vy:0},
	// Contains the current acceleration of the sphere in meters per second squared.
	this.acceleration = {ax:0, ay:0};
	// Scaling factor for the acceleration to increase or decrease its value.
	this.accelerationScaling = accelerationScaling;
	// Stores the current normal force acting on the sphere.
	this.normalForce = {fnx:0, fny:0};
	// The coefficient of restitution as value between 0 and 1.
	this.cor = cor;
	// The coefficient of the static friction as value between 0 and 1.
	this.staticCOF = staticCOF,
	// The coefficient of the sliding friction as value between 0 and 1.
	this.slidingCOF = slidingCOF,
	// Color of the sphere.
	this.color = color,
	// Last vibration duration after the sphere has hit a wall in x direction.
	this.lastTvibX = deltaTvib,
	// Last vibration duration after the sphere has hit a wall in y direction.
	this.lastTvibY = deltaTvib,
	// Updates the position based on the current acceleration.
	// deltaT: time difference since the last calculation in seconds.
	this.updatePosition = function(deltaT) {
		// Friction calculation in x direction.
		var actualAcceleration;
		if(this.velocity.vx==0&&Math.abs(this.acceleration.ax)*this.mass<=Math.abs(this.normalForce.fnx)*this.staticCOF) { 
			actualAcceleration = 0;
		} else {
			var frictionForce = this.slidingCOF*this.normalForce.fnx/this.mass;
			if(this.acceleration.ax<0) {
				frictionForce = -frictionForce;
			}
			actualAcceleration = this.acceleration.ax+frictionForce;
		}
		var nextVelocity = this.velocity.vx+deltaT*actualAcceleration*this.accelerationScaling;
		if(nextVelocity<0&&this.velocity.vx>0||nextVelocity>0&&this.velocity.vx<0) {
			nextVelocity = 0;
		}
		this.velocity.vx = nextVelocity;
		// Friction calculation in y direction.
		if(this.velocity.vy==0&&Math.abs(this.acceleration.ay)*this.mass<=Math.abs(this.normalForce.fny)*this.staticCOF) { 
			actualAcceleration = 0;
		} else {
			var frictionForce = this.slidingCOF*this.normalForce.fny/this.mass;
			if(this.acceleration.ay<0) {
				frictionForce = -frictionForce;
			}
			actualAcceleration = this.acceleration.ay+frictionForce;
		}
		nextVelocity = this.velocity.vy+deltaT*actualAcceleration*this.accelerationScaling;
		if(nextVelocity<0&&this.velocity.vy>0||nextVelocity>0&&this.velocity.vy<0) {
			nextVelocity = 0;
		}
		this.velocity.vy = nextVelocity;
		
		// Next position in x direction.
		var next = this.boundingBox.x+0.5*deltaT*this.velocity.vx;
		if(next <= this.walls.x) {
			this.invertVX(this.lastTvibX);
			this.lastTvibX = 0;
			next = this.walls.x;
		} else if(next+2*this.boundingBox.radius >= this.walls.x+this.walls.width) {
			this.invertVX(this.lastTvibX);
			this.lastTvibX = 0;
			next = this.walls.x+this.walls.width-2*this.boundingBox.radius;
		} else {
			this.lastTvibX = deltaTvib;
		}
		this.boundingBox.x = next;
		// Next position in y direction.
		next = this.boundingBox.y+0.5*deltaT*this.velocity.vy;
		if(next <= this.walls.y) {
			this.invertVY(this.lastTvibY);
			this.lastTvibY = 0;
			next = this.walls.y;
		} else if(next+2*this.boundingBox.radius >= this.walls.y+this.walls.height) {
			this.invertVY(this.lastTvibY);
			this.lastTvibY = 0;
			next = this.walls.y+this.walls.height-2*this.boundingBox.radius;
		} else {
			this.lastTvibY = deltaTvib;
		}
		this.boundingBox.y = next;
	},
	// Inverts the velocity in x direction when hitting a wall.
	// vib: vibration time.
	this.invertVX = function(vib) {
		this.velocity.vx = this.cor*-this.velocity.vx;
		navigator.vibrate(vib);
	},
	// Inverts the velocity in y direction when hitting a wall.
	// vib: vibration time.
	this.invertVY = function(vib) {
		this.velocity.vy = this.cor*-this.velocity.vy;
		navigator.vibrate(vib);
	}
}

// Default sphere.
var defaultSphere = new Sphere(10, 0.35, 0.15, 0.2, 300, "#000099");