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

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

/**
 * A converter to convert the LICENSE text to a HTML-similar output format for easier integration.
 * 
 * @author Martin Armbruster
 */
public final class LicenseConverter {
	/**
	 * Private constructor to avoid instantiation.
	 */
	private LicenseConverter() {
	}
	
	/**
	 * Main method for starting the conversion.
	 * 
	 * @param args arguments.
	 */
	public static void main(String[] args) {
		LicenseConverter.convertFile();
	}
	
	/**
	 * Does the actual conversion.
	 */
	private static void convertFile() {
		try(FileReader reader = new FileReader("LICENSE"); BufferedReader br = new BufferedReader(reader);
				FileWriter writer = new FileWriter("license.html"); BufferedWriter bw = new BufferedWriter(writer)) {
			String line = br.readLine();
			boolean inHeadline = false;
			while(line!=null) {
				String[] splitted = line.split("#");
				if(splitted.length==0) {
					inHeadline = !inHeadline;
				} else if(inHeadline) {
					bw.write("\"<h2>"+line.substring(5, line.length()-5).trim()+"</h2>\"+\n");
				} else {
					bw.write("\"<p>"+line+"</p>\"+\n");
				}
				line = br.readLine();
			}
			System.out.println("Conversion successful.");
		} catch(IOException e) {
			e.printStackTrace();
			System.out.println("Conversion failed.");
		}
	}
}