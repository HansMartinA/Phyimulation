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
        document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
    	document.addEventListener("pause", this.onPause, false);
    	document.addEventListener("resume", this.onResume, false);
    	app.header = document.getElementById("headerArea");
    	app.oldColor = app.header.style.color;
    	canvas = document.getElementById("simulationArea");
    	canvas.width = window.innerWidth;
    	canvas.height = window.innerHeight-65;
    	document.getElementById("profile1Link").addEventListener("click", function() { app.onSphereSelected(defaultSphere); });
    	document.getElementById("hideOnMenu0").addEventListener("click", this.onBackToMenu);
    },
    // resume Event Handler
    onResume: function() {
    	if(app.isDrawing) {
    		beginDrawing(currentSphere);
    	}
    },
    // pause Event Handler
    onPause: function() {
    	if(app.isDrawing) {
    		stopDrawing();
    	}
    },
    // Indicates whether the drawing process is active or not.
    isDrawing: false,
    // Link to the header area for setting the color.
    header: null,
    // Old background color of the header area for resetting it.
    oldColor: null,
    // event handler when a sphere is selected.
    // sphere: the selected sphere for drawing.
    onSphereSelected: function(sphere) {
    	app.isDrawing = true;
    	for(var i=0; i<2; i++) {
    		document.getElementById("hideOnDraw"+i).style.animation = "slideToCanvasHide 100ms ease-in 0s 1 normal forwards";
    	}
    	for(var i=0; i<2; i++) {
    		document.getElementById("hideOnMenu"+i).style.animation = "slideToCanvasShow 100ms ease-out 0s 1 normal forwards";
    	}
    	canvas.style.display = "inline";
    	app.header.style.backgroundColor = sphere.color;
    	beginDrawing(sphere);
    },
    // event handler when the back button in the drawing interface is pressed.
    onBackToMenu: function() {
    	app.isDrawing = false;
    	stopDrawing();
    	canvas.style.display = "none";
    	app.header.style.backgroundColor = app.oldColor;
    	for(var i=0; i<2; i++) {
    		document.getElementById("hideOnMenu"+i).style.animation = "slideToMenuHide 100ms ease-in 0s 1 normal forwards";
    	}
    	for(var i=0; i<2; i++) {
    		document.getElementById("hideOnDraw"+i).style.animation = "slideToMenuShow 100ms ease-out 0s 1 normal forwards";
    	}
    	document.getElementById("mainArea").style.transform = "translateY(25%)";
    }
};
app.initialize();