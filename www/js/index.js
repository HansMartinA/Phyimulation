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
    	navigator.globalization.getPreferredLanguage(onLanguageUpdate, onLanguageUpdateFailed);
    	app.header = document.getElementById("headerArea");
    	app.oldColor = app.header.style.color;
    	canvas = document.getElementById("simulationArea");
    	canvas.width = window.innerWidth;
    	canvas.height = window.innerHeight-65;
    	loadSettings();
    	document.getElementById("profile1Link").addEventListener("click", function() { app.onSphereSelected(defaultSphere); });
    	document.getElementById("profile2Link").addEventListener("click", function() { app.onSphereSelected(freeSphere); });
    	document.getElementById("profile3Link").addEventListener("click", function() { app.onSphereSelected(heavySphere); });
    	document.getElementById("profile4Link").addEventListener("click", function() { app.onSphereSelected(inelasticSphere); });
    	document.getElementById("profile5Link").addEventListener("click", function() { app.onSphereSelected(getUserCustomizedSphere()); });
    	document.getElementById("saveSettings").addEventListener("click", saveSettings);
    	document.getElementById("restoreSettings").addEventListener("click", restoreDefaultSettings);
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
    }
};
app.initialize();

/*
 * Settings section: Handles the settings. 
 * 
 */
//Constructor for settings key objects. These contain the keys for loading or saving the settings.
function SettingsKeys() {
	this.mass = document.getElementById("massSlider");
	this.massKey = "phyimulation.mass";
	this.cor = document.getElementById("corSlider");
	this.corKey = "pyhimulation.cor";
	this.csf = document.getElementById("csfSlider");
	this.csfKey = "pyhimulation.csf";
	this.cslf = document.getElementById("cslfSlider");
	this.cslfKey = "phyimulation.cslf";
	this.scale = document.getElementById("scaleSlider");
	this.scaleKey = "phyimulation.scale";
	this.color = document.getElementById("colorSelection");
	this.colorKey = "pyhimulation.color";
}
//The used settings object.
var settings = new SettingsKeys();

//Loads all settings.
function loadSettings() {
	var storage = window.localStorage;
	document.getElementById("massSlider").value = storage.getItem(settings.massKey);
	document.getElementById("corSlider").value = storage.getItem(settings.corKey);
	document.getElementById("csfSlider").value = storage.getItem(settings.csfKey);
	document.getElementById("cslfSlider").value = storage.getItem(settings.cslfKey);
	document.getElementById("scaleSlider").value = storage.getItem(settings.scaleKey);
	document.getElementById("colorSelection").value = storage.getItem(settings.colorKey);
}

//Saves all settings.
function saveSettings() {
	var storage = window.localStorage;
	storage.setItem(settings.massKey, document.getElementById("massSlider").value);
	storage.setItem(settings.corKey, document.getElementById("corSlider").value);
	storage.setItem(settings.csfKey, document.getElementById("csfSlider").value);
	storage.setItem(settings.cslfKey, document.getElementById("cslfSlider").value);
	storage.setItem(settings.scaleKey, document.getElementById("scaleSlider").value);
	storage.setItem(settings.colorKey, document.getElementById("colorSelection").value);
}

//Restores the default settings and saves them.
function restoreDefaultSettings() {
	document.getElementById("massSlider").value = defaultSphere.mass;
	document.getElementById("corSlider").value = defaultSphere.cor;
	document.getElementById("csfSlider").value = defaultSphere.staticCOF;
	document.getElementById("cslfSlider").value = defaultSphere.slidingCOF;
	document.getElementById("scaleSlider").value = defaultSphere.accelerationScaling;
	document.getElementById("colorSelection").value = defaultSphere.color;
	saveSettings();
}

function getUserCustomizedSphere() {
	return new Sphere(document.getElementById("massSlider").value, document.getElementById("corSlider").value,
			document.getElementById("csfSlider").value, document.getElementById("cslfSlider").value,
			document.getElementById("scaleSlider").value, document.getElementById("colorSelection").value);
}