# Phyimulation

## What is Phyimulation?

Physics simulation (Phyimulation) simulates a sphere in a box on a smartphone's display. Different physical effects are applied on it: collision, friction and motion based on the smartphones's accelerometer.

## What can I do?

When you start Phyimulation, you can select a sphere from different pre-built spheres in the spheres screen ("Spheres" tab) and just have to click on the "Start Simulation" button to start the simulation. In addition, help ("Help" tab) and more information about Pyhimulation ("About" tab) can be shown.

## Which pre-built spheres are there?

Currently, you can select from these pre-built spheres:

- default sphere (10 kg) which simulates collision with a coefficient of restitution (cor) of 0.35 and friction with a coefficient of static friction (csf) of 0.12 and a coefficient of sliding friction (cslf) of 0.1.

- free sphere (1 kg) which has no friction and a high cor of 0.85.

- heavy sphere (1000 kg) which has a moderate friction with a csf of 0.45 and a cslf of 0.5. Cor is 1.0.

- inelastic sphere (10 kg) which has a cor of 0.0, a csf of 0.12 and a cslf of 0.1.

- user-customized sphere: within the "Settings" tab, you can specify your own values for a sphere and save them permanently. When selecting the user-customized sphere, the set values are applied to the sphere.

Note: a scaling factor is applied to the acceleration in cases where the actual, real acceleration is too low to show a significant movement.

## How can I stop the simulation?

When the simulation is running, you can find a back arrow in the top left corner which leads you back to the menu screen.

# Building

The project contains a script (build.sh for Unix-based systems and build.bat for Windows-based systems) for adding the
currently supported systems (Android, Browser), plugins and building the app for Android. It assumes Apache Cordova is
installed along with all requirements for building apps for Android.  

# License

The project is released under the Apache License, Version 2.0.

Copyright 2018, Martin Armbruster