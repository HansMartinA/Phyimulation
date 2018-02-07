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
        document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
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
}