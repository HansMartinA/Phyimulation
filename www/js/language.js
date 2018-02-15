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
	text_help_p1: "What is Phyimulation?",
	text_help_p1_content: "Physics simulation (Phyimulation) simulates a sphere in a box on a smartphone's display. Different physical effects are applied on it: collision, friction and motion based on the smartphones's accelerometer.",
	text_help_p2: "What can I do?",
	text_help_p2_content: "When you start Phyimulation, you can select a sphere from different pre-built spheres in the spheres screen (\"Spheres\" tab) and just have to click on it to start the simulation. In addition, help (\"Help\" tab) and more information about Pyhimulation (\"About\" tab) can be shown.",
	text_help_p3: "Which pre-built spheres are there?",
	text_help_p3_content_a: "Currently, you can select from these pre-built spheres:",
	text_help_p3_content_l1: "- default sphere (10 kg) which simulates collision with a coefficient of restitution (cor) of 0.35 and friction with a coefficient of static friction (csf) of 0.12 and a coefficient of sliding friction (cslf) of 0.1.",
	text_help_p3_content_l2: "- free sphere (1 kg) which has no friction and a high cor of 0.85.",
	text_help_p3_content_l3: "- heavy sphere (1000 kg) which has a moderate friction with a csf of 0.45 and a cslf of 0.5. Cor is 1.0.",
	text_help_p3_content_l4: "- inelastic sphere (10 kg) which has a cor of 0.0, a csf of 0.12 and a cslf of 0.1.",
	text_help_p3_content_l5: "- user-customized sphere: within the \"Settings\" tab, you can specify your own values for a sphere and save them permanently. When selecting the user-customized sphere, the set values are applied to the sphere.",
	text_help_p3_content_b: "Note: a scaling factor is applied to the acceleration in cases where the actual, real acceleration is too low to show a significant movement.",
	text_help_p4: "How can I stop the simulation?",
	text_help_p4_content: "When the simulation is running, you can find a back arrow in the top left corner which leads you back to the menu screen.",
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
	text_help_p1: "Was ist Phyimulation?",
	text_help_p1_content: "Physik-Simulation (Phyimulation) simuliert eine Kugel in einer Box auf dem Bildschirm des Smartphones. Verschiedene physikalische Effekte werden dabei auf die Kugel angewandt: Stöße, Reibung und Bewegung, die auf dem Beschleunigungssensor des Smartphones beruht.",
	text_help_p2: "Was kann ich machen?",
	text_help_p2_content: "Wenn Sie Phyimulation starten, können Sie eine Kugel aus vorgefertigten Kugeln im \"Kugel\" Tab auswählen. Mit einem Klick bzw. einer Berührung wird die Simulation gestartet. Zusätzlich stehen eine Hilfe (\"Hilfe\" Tab) und mehr Informationen über Phyimulation (\"Info\" Tab) bereit.",
	text_help_p3: "Welche vorgefertigten Kugeln gibt es?",
	text_help_p3_content_a: "Aktuell können Sie aus den folgenden Kugeln auswählen:",
	text_help_p3_content_l1: "- Standard-Kugel (10 kg), die Stöße mit einem Stoßfaktor (cor) von 0.35 und Reibung mit einem Haftreibungsfaktor (csf) von 0.12 und Gleitreibungsfaktor (cslf) von 0.1 simuliert.",
	text_help_p3_content_l2: "- Freie Kugel (1 kg), die keine Reibung und einen hohen cor von 0.85 besitzt.",
	text_help_p3_content_l3: "- Schwere Kugel (1000 kg), die eine moderate Reibung mit einem csf von 0.45 und einem cslf von 0.5 besitzt. Der cor ist 1.0.",
	text_help_p3_content_l4: "- Inelastische Kugel (10 kg), die einen cor von 0.0, einen csf von 0.12 and einen cslf von 0.1 hat.",
	text_help_p3_content_l5: "- Benutzerdefinierte Kugel: innerhalb des \"Einstellungs\" Tab können Sie eigene Werte für eine Kugel festlegen und diese dauerhaft speichern. Wenn Sie dann die benutzerdefinierte Kugel auswählen, werden die gesetzten Werte angewandt.",
	text_help_p3_content_b: "Hinweis: zur Beschleunigung wird in Fällen, in denen die reale Beschleunigung zu niedrig für eine wahrnehmbare Bewegung ist, ein Skalierungsfaktor hinzugerechnet.",
	text_help_p4: "Wie stoppe ich die Simulation?",
	text_help_p4_content: "Wenn die Simulation abläuft, finden Sie in der linken oberen Ecke einen Pfeil, der Sie zurück zum Menü bringt.",
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
	document.getElementById("helpTextP1").innerHTML = language.text_help_p1;
	document.getElementById("helpTextP1Content").innerHTML = language.text_help_p1_content;
	document.getElementById("helpTextP2").innerHTML = language.text_help_p2;
	document.getElementById("helpTextP2Content").innerHTML = language.text_help_p2_content;
	document.getElementById("helpTextP3").innerHTML = language.text_help_p3;
	document.getElementById("helpTextP3ContentA").innerHTML = language.text_help_p3_content_a;
	document.getElementById("helpTextP3ContentL1").innerHTML = language.text_help_p3_content_l1;
	document.getElementById("helpTextP3ContentL2").innerHTML = language.text_help_p3_content_l2;
	document.getElementById("helpTextP3ContentL3").innerHTML = language.text_help_p3_content_l3;
	document.getElementById("helpTextP3ContentL4").innerHTML = language.text_help_p3_content_l4;
	document.getElementById("helpTextP3ContentL5").innerHTML = language.text_help_p3_content_l5;
	document.getElementById("helpTextP3ContentB").innerHTML = language.text_help_p3_content_b;
	document.getElementById("helpTextP4").innerHTML = language.text_help_p4;
	document.getElementById("helpTextP4Content").innerHTML = language.text_help_p4_content;
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