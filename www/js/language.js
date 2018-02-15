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
 * Language section: Responsible for language detection and text updates. It also contains all available languages.
 * 
 */
// Default language: english.
var en = {
	tab_spheres: "Spheres",
	tab_settings: "Settings",
	tab_help: "Help",
	tab_info: "About",
	profile1_name: "Default sphere",
	profile1_description: "A built-in sphere simulating different physical effects: collision, friction and motion based on the accelerometer.",
	text_help: "",
	text_info: ""
};

// Translation for german.
var de = {
	tab_spheres: "Kugeln",
	tab_settings: "Einstellungen",
	tab_help: "Hilfe",
	tab_info: "Info",
	profile1_name: "Standard-Kugel",
	profile1_description: "Eine eingebaute Kugel, die verschiedene physikalische Effekte simuliert: Stöße, Reibung und Bewegung, basierend auf dem Beschleunigungssensor.",
	text_help: "",
	text_info: ""
};

// Sets a specified language for the user interface.
// language: the language. It should be a pre-defined object like en or de.
function setLanguage(language) {
	document.getElementById("tabSpheres").innerHTML = language.tab_spheres;
	document.getElementById("tabSettings").innerHTML = language.tab_settings;
	document.getElementById("tabHelp").innerHTML = language.tab_help;
	document.getElementById("tabInfo").innerHTML = language.tab_info;
	document.getElementById("prof1name").innerHTML = language.profile1_name;
	document.getElementById("prof1des").innerHTML = language.profile1_description;
}

// Called when the system language was detected.
// lang: the detected language.
function onLanguageUpdate(lang) {
	if(lang.value.includes("de")) {
		setLanguage(de);
	} else {
		setLanguage(en);
	}
}

// Called when receiving the system language fails. Currently, not implemented.
function onLanguageUpdateFailed() {
}