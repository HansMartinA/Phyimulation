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
	profile1_link: "Start Simulation",
	profile2_name: "Free sphere",
	profile2_description: "A sphere without any friction.",
	profile2_link: "Start Simulation",
	profile3_name: "Heavy sphere",
	profile3_description: "Weighting 100 kg, this sphere has a moderate friction and is completely elastic. When it hits a wall, there is no power loss.",
	profile3_link: "Start Simulation",
	profile4_name: "Inelastic sphere",
	profile4_description: "A completely inelastic sphere. When it hits a wall, all power is absorbed.",
	profile4_link: "Start Simulation",
	set_save: "Save",
	set_restore: "Restore default settings",
	set_mass: "Mass (kg):",
	set_cor: "Coefficient of restitution for collisions (will be divided by 100):",
	set_csf: "Coefficient of static friction (will be divided by 100):",
	set_cslf: "Coefficient of sliding friction (will be divided by 100):",
	set_scale: "Scaling factor:",
	set_scale_note: "Note: the scaling factor is directly applied to the acceleration. So, please be careful with it.",
	set_color: "Color:",
	text_help_p1: "What is Phyimulation?",
	text_help_p1_content: "Physics simulation (Phyimulation) simulates a sphere in a box on a smartphone's display. Different physical effects are applied on it: collision, friction and motion based on the smartphones's accelerometer.",
	text_help_p2: "What can I do?",
	text_help_p2_content: "When you start Phyimulation, you can select a sphere from different pre-built spheres in the spheres screen (\"Spheres\" tab) and just have to click on the \"Start Simulation\" button to start the simulation. In addition, help (\"Help\" tab) and more information about Pyhimulation (\"About\" tab) can be shown.",
	text_help_p3: "Which pre-built spheres are there?",
	text_help_p3_content_a: "Currently, you can select from these pre-built spheres:",
	text_help_p3_content_l1: "- default sphere (10 kg) which simulates collision with a coefficient of restitution (cor) of 0.35 and friction with a coefficient of static friction (csf) of 0.12 and a coefficient of sliding friction (cslf) of 0.1.",
	text_help_p3_content_l2: "- free sphere (1 kg) which has no friction and a high cor of 0.85.",
	text_help_p3_content_l3: "- heavy sphere (1000 kg) which has a moderate friction with a csf of 0.45 and a cslf of 0.5. Cor is 1.0.",
	text_help_p3_content_l4: "- inelastic sphere (10 kg) which has a cor of 0.0, a csf of 0.12 and a cslf of 0.1.",
	text_help_p3_content_l5: "- user-customized sphere: within the \"Settings\" tab, you can specify your own values for a sphere and save them permanently. When selecting the user-customized sphere, the set values are applied to the sphere.",
	text_help_p3_content_b: "Note: a scaling factor is applied to the acceleration in cases where the actual, real acceleration is too low to show a significant movement.",
	text_help_p4: "How can I stop the simulation?",
	text_help_p4_content: "When the simulation is running, you can find a back arrow in the top left corner which leads you back to the menu screen."
};

// Translation for german.
var de = {
	tab_spheres: "Kugeln",
	tab_settings: "Einstellungen",
	tab_help: "Hilfe",
	tab_info: "Info",
	profile1_name: "Standard-Kugel",
	profile1_description: "Eine eingebaute Kugel, die verschiedene physikalische Effekte simuliert: Stöße, Reibung und Bewegung, basierend auf dem Beschleunigungssensor.",
	profile1_link: "Starte Simulation",
	profile2_name: "Freie Kugel",
	profile2_description: "Eine Kugel ohne Reibung.",
	profile2_link: "Starte Simulation",
	profile3_name: "Schwere Kugel",
	profile3_description: "Diese Kugel, die 100 kg wiegt, hat eine moderate Reibung und ist komplett elastisch. Trifft sie auf eine Wand, gibt es keinen Energieverlust.",
	profile3_link: "Starte Simulation",
	profile4_name: "Inelastische Kugel",
	profile4_description: "Eine komplett inelastische Kugel. Trifft sie auf eine Wand, wird die komplette Energie absorbiert.",
	profile4_link: "Starte Simulation",
	set_save: "Speichern",
	set_restore: "Standard-Einstellungen wiederherstellen",
	set_mass: "Masse (kg):",
	set_cor: "Stoßfaktor für Stöße (wird durch 100 geteilt):",
	set_csf: "Haftreibungskoeffizient (wird durch 100 geteilt):",
	set_cslf: "Gleitreibungskoeffizient (wird durch 100 geteilt):",
	set_scale: "Skalierungsfaktor:",
	set_scale_note: "Hinweis: der Skalierungsfaktor wird direkt auf die Beschleunigung angewandt. Seien Sie deshalb bitte vorsichtig damit.",
	set_color: "Farbe:",
	text_help_p1: "Was ist Phyimulation?",
	text_help_p1_content: "Physik-Simulation (Phyimulation) simuliert eine Kugel in einer Box auf dem Bildschirm des Smartphones. Verschiedene physikalische Effekte werden dabei auf die Kugel angewandt: Stöße, Reibung und Bewegung, die auf dem Beschleunigungssensor des Smartphones beruht.",
	text_help_p2: "Was kann ich machen?",
	text_help_p2_content: "Wenn Sie Phyimulation starten, können Sie eine Kugel aus vorgefertigten Kugeln im \"Kugel\" Tab auswählen. Mit einem Klick bzw. einer Berührung des \"Starte Simulation\" Knopfes wird die Simulation gestartet. Zusätzlich stehen eine Hilfe (\"Hilfe\" Tab) und mehr Informationen über Phyimulation (\"Info\" Tab) bereit.",
	text_help_p3: "Welche vorgefertigten Kugeln gibt es?",
	text_help_p3_content_a: "Aktuell können Sie aus den folgenden Kugeln auswählen:",
	text_help_p3_content_l1: "- Standard-Kugel (10 kg), die Stöße mit einem Stoßfaktor (cor) von 0.35 und Reibung mit einem Haftreibungsfaktor (csf) von 0.12 und Gleitreibungsfaktor (cslf) von 0.1 simuliert.",
	text_help_p3_content_l2: "- Freie Kugel (1 kg), die keine Reibung und einen hohen cor von 0.85 besitzt.",
	text_help_p3_content_l3: "- Schwere Kugel (1000 kg), die eine moderate Reibung mit einem csf von 0.45 und einem cslf von 0.5 besitzt. Der cor ist 1.0.",
	text_help_p3_content_l4: "- Inelastische Kugel (10 kg), die einen cor von 0.0, einen csf von 0.12 and einen cslf von 0.1 hat.",
	text_help_p3_content_l5: "- Benutzerdefinierte Kugel: innerhalb des \"Einstellungs\" Tab können Sie eigene Werte für eine Kugel festlegen und diese dauerhaft speichern. Wenn Sie dann die benutzerdefinierte Kugel auswählen, werden die gesetzten Werte angewandt.",
	text_help_p3_content_b: "Hinweis: zur Beschleunigung wird in Fällen, in denen die reale Beschleunigung zu niedrig für eine wahrnehmbare Bewegung ist, ein Skalierungsfaktor hinzugerechnet.",
	text_help_p4: "Wie stoppe ich die Simulation?",
	text_help_p4_content: "Wenn die Simulation abläuft, finden Sie in der linken oberen Ecke einen Pfeil, der Sie zurück zum Menü bringt."
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
	document.getElementById("profile1Link").innerHTML = language.profile1_link;
	document.getElementById("prof2name").innerHTML = language.profile2_name;
	document.getElementById("prof2des").innerHTML = language.profile2_description;
	document.getElementById("profile2Link").innerHTML = language.profile2_link;
	document.getElementById("prof3name").innerHTML = language.profile3_name;
	document.getElementById("prof3des").innerHTML = language.profile3_description;
	document.getElementById("profile3Link").innerHTML = language.profile3_link;
	document.getElementById("prof4name").innerHTML = language.profile4_name;
	document.getElementById("prof4des").innerHTML = language.profile4_description;
	document.getElementById("profile4Link").innerHTML = language.profile4_link;
	document.getElementById("saveSettings").innerHTML = language.set_save;
	document.getElementById("restoreSettings").innerHTML = language.set_restore;
	document.getElementById("massSliderLabel").innerHTML = language.set_mass;
	document.getElementById("corSliderLabel").innerHTML = language.set_cor;
	document.getElementById("csfSliderLabel").innerHTML = language.set_csf;
	document.getElementById("cslfSliderLabel").innerHTML = language.set_cslf;
	document.getElementById("scaleSliderLabel").innerHTML = language.set_scale;
	document.getElementById("scaleSliderNote").innerHTML = language.set_scale_note;
	document.getElementById("colorLabel").innerHTML = language.set_color;
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
	document.getElementById("infoText").innerHTML = text_info;
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

// The info text. It is equal for all languages.
var text_info = "<h2>Phyimulation 0.2.1</h2>"+
"<p></p>"+
"<p>Copyright 2018 Martin Armbruster</p>"+
"<p></p>"+
"<p>Licensed under the Apache License, Version 2.0 (the \"License\");</p>"+
"<p>you may not use this file except in compliance with the License.</p>"+
"<p>You may obtain a copy of the License at</p>"+
"<p></p>"+
"<p>    http://www.apache.org/licenses/LICENSE-2.0</p>"+
"<p></p>"+
"<p>Unless required by applicable law or agreed to in writing, software</p>"+
"<p>distributed under the License is distributed on an \"AS IS\" BASIS,</p>"+
"<p>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</p>"+
"<p>See the License for the specific language governing permissions and</p>"+
"<p>limitations under the License.</p>"+
"<p></p>"+
"<h2>Apache Cordova, Plugin Device Motion, Plugin Vibration, Plugin Whitelist, Plugin Splashscreen, Plugin Globalization</h2>"+
"<p></p>"+
"<p>https://cordova.apache.org/</p>"+
"<p></p>"+
"<p>Licensed under the Apache License, Version 2.0 (the \"License\");</p>"+
"<p>you may not use this file except in compliance with the License.</p>"+
"<p>You may obtain a copy of the License at</p>"+
"<p></p>"+
"<p>    http://www.apache.org/licenses/LICENSE-2.0</p>"+
"<p></p>"+
"<p>Unless required by applicable law or agreed to in writing, software</p>"+
"<p>distributed under the License is distributed on an \"AS IS\" BASIS,</p>"+
"<p>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</p>"+
"<p>See the License for the specific language governing permissions and</p>"+
"<p>limitations under the License.</p>"+
"<p></p>"+
"<h2>Insomnia PhoneGap Plugin</h2>"+
"<p></p>"+
"<p>Copyright Eddy Verbruggen, https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin</p>"+
"<p></p>"+
"<p>The MIT License (MIT)</p>"+
"<p></p>"+
"<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>"+
"<p></p>"+
"<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>"+
"<p></p>"+
"<p>THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>"+
"<p></p>"+
"<h2>nativeDroid2</h2>"+
"<p></p>"+
"<p>nativeDroid2 is distributed under the MIT-License</p>"+
"<p></p>"+
"<p>The MIT License (MIT)</p>"+
"<p></p>"+
"<p>Copyright (c) 2015 Raphael Wildhaber, Godesign Webpublishing GmbH / http://nativedroid.godesign.ch</p>"+
"<p></p>"+
"<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>"+
"<p></p>"+
"<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>"+
"<p></p>"+
"<p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>"+
"<p></p>"+
"<h2>jQuery, jQuery Mobile and jQuery UI</h2>"+
"<p></p>"+
"<p>(c) jQuery Foundation, Inc., jquery.org</p>"+
"<p></p>"+
"<p>The MIT License (MIT)</p>"+
"<p></p>"+
"<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>"+
"<p></p>"+
"<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>"+
"<p></p>"+
"<p>THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>"+
"<p></p>"+
"<h2>Waves</h2>"+
"<p></p>"+
"<p>Copyright © 2014-2018 Alfiana E. Sibuea. All rights reserved. https://github.com/fians/Waves</p>"+
"<p></p>"+
"<p>The MIT License (MIT)</p>"+
"<p></p>"+
"<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>"+
"<p></p>"+
"<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>"+
"<p></p>"+
"<p>THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>"+
"<p></p>"+
"<h2>Flexbox Grid</h2>"+
"<p></p>"+
"<p>Copyright 2013 Kristofer Joseph, https://github.com/kristoferjoseph/flexboxgrid</p>"+
"<p></p>"+
"<p>Licensed under the Apache License, Version 2.0 (the \"License\");</p>"+
"<p>you may not use this file except in compliance with the License.</p>"+
"<p>You may obtain a copy of the License at</p>"+
"<p></p>"+
"<p>    http://www.apache.org/licenses/LICENSE-2.0</p>"+
"<p></p>"+
"<p>Unless required by applicable law or agreed to in writing, software</p>"+
"<p>distributed under the License is distributed on an \"AS IS\" BASIS,</p>"+
"<p>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</p>"+
"<p>See the License for the specific language governing permissions and</p>"+
"<p>limitations under the License.</p>"+
"<p></p>"+
"<h2>Material Design Iconic Font 2.2.0</h2>"+
"<p></p>"+
"<p>https://github.com/zavoloklom/material-design-iconic-font</p>"+
"<p></p>"+
"<p>Attribution-ShareAlike 4.0 International</p>"+
"<p></p>"+
"<p>=======================================================================</p>"+
"<p></p>"+
"<p>Creative Commons Corporation (\"Creative Commons\") is not a law firm and</p>"+
"<p>does not provide legal services or legal advice. Distribution of</p>"+
"<p>Creative Commons public licenses does not create a lawyer-client or</p>"+
"<p>other relationship. Creative Commons makes its licenses and related</p>"+
"<p>information available on an \"as-is\" basis. Creative Commons gives no</p>"+
"<p>warranties regarding its licenses, any material licensed under their</p>"+
"<p>terms and conditions, or any related information. Creative Commons</p>"+
"<p>disclaims all liability for damages resulting from their use to the</p>"+
"<p>fullest extent possible.</p>"+
"<p></p>"+
"<p>Using Creative Commons Public Licenses</p>"+
"<p></p>"+
"<p>Creative Commons public licenses provide a standard set of terms and</p>"+
"<p>conditions that creators and other rights holders may use to share</p>"+
"<p>original works of authorship and other material subject to copyright</p>"+
"<p>and certain other rights specified in the public license below. The</p>"+
"<p>following considerations are for informational purposes only, are not</p>"+
"<p>exhaustive, and do not form part of our licenses.</p>"+
"<p></p>"+
"<p>     Considerations for licensors: Our public licenses are</p>"+
"<p>     intended for use by those authorized to give the public</p>"+
"<p>     permission to use material in ways otherwise restricted by</p>"+
"<p>     copyright and certain other rights. Our licenses are</p>"+
"<p>     irrevocable. Licensors should read and understand the terms</p>"+
"<p>     and conditions of the license they choose before applying it.</p>"+
"<p>     Licensors should also secure all rights necessary before</p>"+
"<p>     applying our licenses so that the public can reuse the</p>"+
"<p>     material as expected. Licensors should clearly mark any</p>"+
"<p>     material not subject to the license. This includes other CC-</p>"+
"<p>     licensed material, or material used under an exception or</p>"+
"<p>     limitation to copyright. More considerations for licensors:</p>"+
"<p>	wiki.creativecommons.org/Considerations_for_licensors</p>"+
"<p></p>"+
"<p>     Considerations for the public: By using one of our public</p>"+
"<p>     licenses, a licensor grants the public permission to use the</p>"+
"<p>     licensed material under specified terms and conditions. If</p>"+
"<p>     the licensor's permission is not necessary for any reason--for</p>"+
"<p>     example, because of any applicable exception or limitation to</p>"+
"<p>     copyright--then that use is not regulated by the license. Our</p>"+
"<p>     licenses grant only permissions under copyright and certain</p>"+
"<p>     other rights that a licensor has authority to grant. Use of</p>"+
"<p>     the licensed material may still be restricted for other</p>"+
"<p>     reasons, including because others have copyright or other</p>"+
"<p>     rights in the material. A licensor may make special requests,</p>"+
"<p>     such as asking that all changes be marked or described.</p>"+
"<p>     Although not required by our licenses, you are encouraged to</p>"+
"<p>     respect those requests where reasonable. More_considerations</p>"+
"<p>     for the public:</p>"+
"<p>	wiki.creativecommons.org/Considerations_for_licensees</p>"+
"<p></p>"+
"<p>=======================================================================</p>"+
"<p></p>"+
"<p>Creative Commons Attribution-ShareAlike 4.0 International Public</p>"+
"<p>License</p>"+
"<p></p>"+
"<p>By exercising the Licensed Rights (defined below), You accept and agree</p>"+
"<p>to be bound by the terms and conditions of this Creative Commons</p>"+
"<p>Attribution-ShareAlike 4.0 International Public License (\"Public</p>"+
"<p>License\"). To the extent this Public License may be interpreted as a</p>"+
"<p>contract, You are granted the Licensed Rights in consideration of Your</p>"+
"<p>acceptance of these terms and conditions, and the Licensor grants You</p>"+
"<p>such rights in consideration of benefits the Licensor receives from</p>"+
"<p>making the Licensed Material available under these terms and</p>"+
"<p>conditions.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 1 -- Definitions.</p>"+
"<p></p>"+
"<p>  a. Adapted Material means material subject to Copyright and Similar</p>"+
"<p>     Rights that is derived from or based upon the Licensed Material</p>"+
"<p>     and in which the Licensed Material is translated, altered,</p>"+
"<p>     arranged, transformed, or otherwise modified in a manner requiring</p>"+
"<p>     permission under the Copyright and Similar Rights held by the</p>"+
"<p>     Licensor. For purposes of this Public License, where the Licensed</p>"+
"<p>     Material is a musical work, performance, or sound recording,</p>"+
"<p>     Adapted Material is always produced where the Licensed Material is</p>"+
"<p>     synched in timed relation with a moving image.</p>"+
"<p></p>"+
"<p>  b. Adapter's License means the license You apply to Your Copyright</p>"+
"<p>     and Similar Rights in Your contributions to Adapted Material in</p>"+
"<p>     accordance with the terms and conditions of this Public License.</p>"+
"<p></p>"+
"<p>  c. BY-SA Compatible License means a license listed at</p>"+
"<p>     creativecommons.org/compatiblelicenses, approved by Creative</p>"+
"<p>     Commons as essentially the equivalent of this Public License.</p>"+
"<p></p>"+
"<p>  d. Copyright and Similar Rights means copyright and/or similar rights</p>"+
"<p>     closely related to copyright including, without limitation,</p>"+
"<p>     performance, broadcast, sound recording, and Sui Generis Database</p>"+
"<p>     Rights, without regard to how the rights are labeled or</p>"+
"<p>     categorized. For purposes of this Public License, the rights</p>"+
"<p>     specified in Section 2(b)(1)-(2) are not Copyright and Similar</p>"+
"<p>     Rights.</p>"+
"<p></p>"+
"<p>  e. Effective Technological Measures means those measures that, in the</p>"+
"<p>     absence of proper authority, may not be circumvented under laws</p>"+
"<p>     fulfilling obligations under Article 11 of the WIPO Copyright</p>"+
"<p>     Treaty adopted on December 20, 1996, and/or similar international</p>"+
"<p>     agreements.</p>"+
"<p></p>"+
"<p>  f. Exceptions and Limitations means fair use, fair dealing, and/or</p>"+
"<p>     any other exception or limitation to Copyright and Similar Rights</p>"+
"<p>     that applies to Your use of the Licensed Material.</p>"+
"<p></p>"+
"<p>  g. License Elements means the license attributes listed in the name</p>"+
"<p>     of a Creative Commons Public License. The License Elements of this</p>"+
"<p>     Public License are Attribution and ShareAlike.</p>"+
"<p></p>"+
"<p>  h. Licensed Material means the artistic or literary work, database,</p>"+
"<p>     or other material to which the Licensor applied this Public</p>"+
"<p>     License.</p>"+
"<p></p>"+
"<p>  i. Licensed Rights means the rights granted to You subject to the</p>"+
"<p>     terms and conditions of this Public License, which are limited to</p>"+
"<p>     all Copyright and Similar Rights that apply to Your use of the</p>"+
"<p>     Licensed Material and that the Licensor has authority to license.</p>"+
"<p></p>"+
"<p>  j. Licensor means the individual(s) or entity(ies) granting rights</p>"+
"<p>     under this Public License.</p>"+
"<p></p>"+
"<p>  k. Share means to provide material to the public by any means or</p>"+
"<p>     process that requires permission under the Licensed Rights, such</p>"+
"<p>     as reproduction, public display, public performance, distribution,</p>"+
"<p>     dissemination, communication, or importation, and to make material</p>"+
"<p>     available to the public including in ways that members of the</p>"+
"<p>     public may access the material from a place and at a time</p>"+
"<p>     individually chosen by them.</p>"+
"<p></p>"+
"<p>  l. Sui Generis Database Rights means rights other than copyright</p>"+
"<p>     resulting from Directive 96/9/EC of the European Parliament and of</p>"+
"<p>     the Council of 11 March 1996 on the legal protection of databases,</p>"+
"<p>     as amended and/or succeeded, as well as other essentially</p>"+
"<p>     equivalent rights anywhere in the world.</p>"+
"<p></p>"+
"<p>  m. You means the individual or entity exercising the Licensed Rights</p>"+
"<p>     under this Public License. Your has a corresponding meaning.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 2 -- Scope.</p>"+
"<p></p>"+
"<p>  a. License grant.</p>"+
"<p></p>"+
"<p>       1. Subject to the terms and conditions of this Public License,</p>"+
"<p>          the Licensor hereby grants You a worldwide, royalty-free,</p>"+
"<p>          non-sublicensable, non-exclusive, irrevocable license to</p>"+
"<p>          exercise the Licensed Rights in the Licensed Material to:</p>"+
"<p></p>"+
"<p>            a. reproduce and Share the Licensed Material, in whole or</p>"+
"<p>               in part; and</p>"+
"<p></p>"+
"<p>            b. produce, reproduce, and Share Adapted Material.</p>"+
"<p></p>"+
"<p>       2. Exceptions and Limitations. For the avoidance of doubt, where</p>"+
"<p>          Exceptions and Limitations apply to Your use, this Public</p>"+
"<p>          License does not apply, and You do not need to comply with</p>"+
"<p>          its terms and conditions.</p>"+
"<p></p>"+
"<p>       3. Term. The term of this Public License is specified in Section</p>"+
"<p>          6(a).</p>"+
"<p></p>"+
"<p>       4. Media and formats; technical modifications allowed. The</p>"+
"<p>          Licensor authorizes You to exercise the Licensed Rights in</p>"+
"<p>          all media and formats whether now known or hereafter created,</p>"+
"<p>          and to make technical modifications necessary to do so. The</p>"+
"<p>          Licensor waives and/or agrees not to assert any right or</p>"+
"<p>          authority to forbid You from making technical modifications</p>"+
"<p>          necessary to exercise the Licensed Rights, including</p>"+
"<p>          technical modifications necessary to circumvent Effective</p>"+
"<p>          Technological Measures. For purposes of this Public License,</p>"+
"<p>          simply making modifications authorized by this Section 2(a)</p>"+
"<p>          (4) never produces Adapted Material.</p>"+
"<p></p>"+
"<p>       5. Downstream recipients.</p>"+
"<p></p>"+
"<p>            a. Offer from the Licensor -- Licensed Material. Every</p>"+
"<p>               recipient of the Licensed Material automatically</p>"+
"<p>               receives an offer from the Licensor to exercise the</p>"+
"<p>               Licensed Rights under the terms and conditions of this</p>"+
"<p>               Public License.</p>"+
"<p></p>"+
"<p>            b. Additional offer from the Licensor -- Adapted Material.</p>"+
"<p>               Every recipient of Adapted Material from You</p>"+
"<p>               automatically receives an offer from the Licensor to</p>"+
"<p>               exercise the Licensed Rights in the Adapted Material</p>"+
"<p>               under the conditions of the Adapter's License You apply.</p>"+
"<p></p>"+
"<p>            c. No downstream restrictions. You may not offer or impose</p>"+
"<p>               any additional or different terms or conditions on, or</p>"+
"<p>               apply any Effective Technological Measures to, the</p>"+
"<p>               Licensed Material if doing so restricts exercise of the</p>"+
"<p>               Licensed Rights by any recipient of the Licensed</p>"+
"<p>               Material.</p>"+
"<p></p>"+
"<p>       6. No endorsement. Nothing in this Public License constitutes or</p>"+
"<p>          may be construed as permission to assert or imply that You</p>"+
"<p>          are, or that Your use of the Licensed Material is, connected</p>"+
"<p>          with, or sponsored, endorsed, or granted official status by,</p>"+
"<p>          the Licensor or others designated to receive attribution as</p>"+
"<p>          provided in Section 3(a)(1)(A)(i).</p>"+
"<p></p>"+
"<p>  b. Other rights.</p>"+
"<p></p>"+
"<p>       1. Moral rights, such as the right of integrity, are not</p>"+
"<p>          licensed under this Public License, nor are publicity,</p>"+
"<p>          privacy, and/or other similar personality rights; however, to</p>"+
"<p>          the extent possible, the Licensor waives and/or agrees not to</p>"+
"<p>          assert any such rights held by the Licensor to the limited</p>"+
"<p>          extent necessary to allow You to exercise the Licensed</p>"+
"<p>          Rights, but not otherwise.</p>"+
"<p></p>"+
"<p>       2. Patent and trademark rights are not licensed under this</p>"+
"<p>          Public License.</p>"+
"<p></p>"+
"<p>       3. To the extent possible, the Licensor waives any right to</p>"+
"<p>          collect royalties from You for the exercise of the Licensed</p>"+
"<p>          Rights, whether directly or through a collecting society</p>"+
"<p>          under any voluntary or waivable statutory or compulsory</p>"+
"<p>          licensing scheme. In all other cases the Licensor expressly</p>"+
"<p>          reserves any right to collect such royalties.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 3 -- License Conditions.</p>"+
"<p></p>"+
"<p>Your exercise of the Licensed Rights is expressly made subject to the</p>"+
"<p>following conditions.</p>"+
"<p></p>"+
"<p>  a. Attribution.</p>"+
"<p></p>"+
"<p>       1. If You Share the Licensed Material (including in modified</p>"+
"<p>          form), You must:</p>"+
"<p></p>"+
"<p>            a. retain the following if it is supplied by the Licensor</p>"+
"<p>               with the Licensed Material:</p>"+
"<p></p>"+
"<p>                 i. identification of the creator(s) of the Licensed</p>"+
"<p>                    Material and any others designated to receive</p>"+
"<p>                    attribution, in any reasonable manner requested by</p>"+
"<p>                    the Licensor (including by pseudonym if</p>"+
"<p>                    designated);</p>"+
"<p></p>"+
"<p>                ii. a copyright notice;</p>"+
"<p></p>"+
"<p>               iii. a notice that refers to this Public License;</p>"+
"<p></p>"+
"<p>                iv. a notice that refers to the disclaimer of</p>"+
"<p>                    warranties;</p>"+
"<p></p>"+
"<p>                 v. a URI or hyperlink to the Licensed Material to the</p>"+
"<p>                    extent reasonably practicable;</p>"+
"<p></p>"+
"<p>            b. indicate if You modified the Licensed Material and</p>"+
"<p>               retain an indication of any previous modifications; and</p>"+
"<p></p>"+
"<p>            c. indicate the Licensed Material is licensed under this</p>"+
"<p>               Public License, and include the text of, or the URI or</p>"+
"<p>               hyperlink to, this Public License.</p>"+
"<p></p>"+
"<p>       2. You may satisfy the conditions in Section 3(a)(1) in any</p>"+
"<p>          reasonable manner based on the medium, means, and context in</p>"+
"<p>          which You Share the Licensed Material. For example, it may be</p>"+
"<p>          reasonable to satisfy the conditions by providing a URI or</p>"+
"<p>          hyperlink to a resource that includes the required</p>"+
"<p>          information.</p>"+
"<p></p>"+
"<p>       3. If requested by the Licensor, You must remove any of the</p>"+
"<p>          information required by Section 3(a)(1)(A) to the extent</p>"+
"<p>          reasonably practicable.</p>"+
"<p></p>"+
"<p>  b. ShareAlike.</p>"+
"<p></p>"+
"<p>     In addition to the conditions in Section 3(a), if You Share</p>"+
"<p>     Adapted Material You produce, the following conditions also apply.</p>"+
"<p></p>"+
"<p>       1. The Adapter's License You apply must be a Creative Commons</p>"+
"<p>          license with the same License Elements, this version or</p>"+
"<p>          later, or a BY-SA Compatible License.</p>"+
"<p></p>"+
"<p>       2. You must include the text of, or the URI or hyperlink to, the</p>"+
"<p>          Adapter's License You apply. You may satisfy this condition</p>"+
"<p>          in any reasonable manner based on the medium, means, and</p>"+
"<p>          context in which You Share Adapted Material.</p>"+
"<p></p>"+
"<p>       3. You may not offer or impose any additional or different terms</p>"+
"<p>          or conditions on, or apply any Effective Technological</p>"+
"<p>          Measures to, Adapted Material that restrict exercise of the</p>"+
"<p>          rights granted under the Adapter's License You apply.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 4 -- Sui Generis Database Rights.</p>"+
"<p></p>"+
"<p>Where the Licensed Rights include Sui Generis Database Rights that</p>"+
"<p>apply to Your use of the Licensed Material:</p>"+
"<p></p>"+
"<p>  a. for the avoidance of doubt, Section 2(a)(1) grants You the right</p>"+
"<p>     to extract, reuse, reproduce, and Share all or a substantial</p>"+
"<p>     portion of the contents of the database;</p>"+
"<p></p>"+
"<p>  b. if You include all or a substantial portion of the database</p>"+
"<p>     contents in a database in which You have Sui Generis Database</p>"+
"<p>     Rights, then the database in which You have Sui Generis Database</p>"+
"<p>     Rights (but not its individual contents) is Adapted Material,</p>"+
"<p></p>"+
"<p>     including for purposes of Section 3(b); and</p>"+
"<p>  c. You must comply with the conditions in Section 3(a) if You Share</p>"+
"<p>     all or a substantial portion of the contents of the database.</p>"+
"<p></p>"+
"<p>For the avoidance of doubt, this Section 4 supplements and does not</p>"+
"<p>replace Your obligations under this Public License where the Licensed</p>"+
"<p>Rights include other Copyright and Similar Rights.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 5 -- Disclaimer of Warranties and Limitation of Liability.</p>"+
"<p></p>"+
"<p>  a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE</p>"+
"<p>     EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS</p>"+
"<p>     AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF</p>"+
"<p>     ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,</p>"+
"<p>     IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,</p>"+
"<p>     WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR</p>"+
"<p>     PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,</p>"+
"<p>     ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT</p>"+
"<p>     KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT</p>"+
"<p>     ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.</p>"+
"<p></p>"+
"<p>  b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE</p>"+
"<p>     TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,</p>"+
"<p>     NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,</p>"+
"<p>     INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,</p>"+
"<p>     COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR</p>"+
"<p>     USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN</p>"+
"<p>     ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR</p>"+
"<p>     DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR</p>"+
"<p>     IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.</p>"+
"<p></p>"+
"<p>  c. The disclaimer of warranties and limitation of liability provided</p>"+
"<p>     above shall be interpreted in a manner that, to the extent</p>"+
"<p>     possible, most closely approximates an absolute disclaimer and</p>"+
"<p>     waiver of all liability.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 6 -- Term and Termination.</p>"+
"<p></p>"+
"<p>  a. This Public License applies for the term of the Copyright and</p>"+
"<p>     Similar Rights licensed here. However, if You fail to comply with</p>"+
"<p>     this Public License, then Your rights under this Public License</p>"+
"<p>     terminate automatically.</p>"+
"<p></p>"+
"<p>  b. Where Your right to use the Licensed Material has terminated under</p>"+
"<p>     Section 6(a), it reinstates:</p>"+
"<p></p>"+
"<p>       1. automatically as of the date the violation is cured, provided</p>"+
"<p>          it is cured within 30 days of Your discovery of the</p>"+
"<p>          violation; or</p>"+
"<p></p>"+
"<p>       2. upon express reinstatement by the Licensor.</p>"+
"<p></p>"+
"<p>     For the avoidance of doubt, this Section 6(b) does not affect any</p>"+
"<p>     right the Licensor may have to seek remedies for Your violations</p>"+
"<p>     of this Public License.</p>"+
"<p></p>"+
"<p>  c. For the avoidance of doubt, the Licensor may also offer the</p>"+
"<p>     Licensed Material under separate terms or conditions or stop</p>"+
"<p>     distributing the Licensed Material at any time; however, doing so</p>"+
"<p>     will not terminate this Public License.</p>"+
"<p></p>"+
"<p>  d. Sections 1, 5, 6, 7, and 8 survive termination of this Public</p>"+
"<p>     License.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 7 -- Other Terms and Conditions.</p>"+
"<p></p>"+
"<p>  a. The Licensor shall not be bound by any additional or different</p>"+
"<p>     terms or conditions communicated by You unless expressly agreed.</p>"+
"<p></p>"+
"<p>  b. Any arrangements, understandings, or agreements regarding the</p>"+
"<p>     Licensed Material not stated herein are separate from and</p>"+
"<p>     independent of the terms and conditions of this Public License.</p>"+
"<p></p>"+
"<p></p>"+
"<p>Section 8 -- Interpretation.</p>"+
"<p></p>"+
"<p>  a. For the avoidance of doubt, this Public License does not, and</p>"+
"<p>     shall not be interpreted to, reduce, limit, restrict, or impose</p>"+
"<p>     conditions on any use of the Licensed Material that could lawfully</p>"+
"<p>     be made without permission under this Public License.</p>"+
"<p></p>"+
"<p>  b. To the extent possible, if any provision of this Public License is</p>"+
"<p>     deemed unenforceable, it shall be automatically reformed to the</p>"+
"<p>     minimum extent necessary to make it enforceable. If the provision</p>"+
"<p>     cannot be reformed, it shall be severed from this Public License</p>"+
"<p>     without affecting the enforceability of the remaining terms and</p>"+
"<p>     conditions.</p>"+
"<p></p>"+
"<p>  c. No term or condition of this Public License will be waived and no</p>"+
"<p>     failure to comply consented to unless expressly agreed to by the</p>"+
"<p>     Licensor.</p>"+
"<p></p>"+
"<p>  d. Nothing in this Public License constitutes or may be interpreted</p>"+
"<p>     as a limitation upon, or waiver of, any privileges and immunities</p>"+
"<p>     that apply to the Licensor or You, including from the legal</p>"+
"<p>     processes of any jurisdiction or authority.</p>"+
"<p></p>"+
"<p></p>"+
"<p>=======================================================================</p>"+
"<p></p>"+
"<p>Creative Commons is not a party to its public licenses.</p>"+
"<p>Notwithstanding, Creative Commons may elect to apply one of its public</p>"+
"<p>licenses to material it publishes and in those instances will be</p>"+
"<p>considered the \"Licensor.\" Except for the limited purpose of indicating</p>"+
"<p>that material is shared under a Creative Commons public license or as</p>"+
"<p>otherwise permitted by the Creative Commons policies published at</p>"+
"<p>creativecommons.org/policies, Creative Commons does not authorize the</p>"+
"<p>use of the trademark \"Creative Commons\" or any other trademark or logo</p>"+
"<p>of Creative Commons without its prior written consent including,</p>"+
"<p>without limitation, in connection with any unauthorized modifications</p>"+
"<p>to any of its public licenses or any other arrangements,</p>"+
"<p>understandings, or agreements concerning use of licensed material. For</p>"+
"<p>the avoidance of doubt, this paragraph does not form part of the public</p>"+
"<p>licenses.</p>"+
"<p></p>"+
"<p>Creative Commons may be contacted at creativecommons.org.</p>";