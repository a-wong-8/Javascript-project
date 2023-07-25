# a/A auto Analyzer - An automotive data visualizer 

![Alt Text](/aA.gif)

# Background 

a/A auto Analyzer lets the user select 2 vehicles to compare statistics such as speed, price, and fuel economy. The user can also view an animation showing the winner of a quarter mile drag race based on quarter mile times provided by the manufacturer. There will be a small quarter mile drag strip, top view down, in the center of the window. 

There will a wide selection of vehicles varying from sports cars to economy cars. There will be statistics of the vehicle shown on the left and right sides along with a picture of the vehicle. The stats would show year, make, model, horsepower, price, etc. There is a toggle switch in the middle to switch between left car and right car.

# Functionality & MVPs

In a/A auto Analyzer, users will be able to:

- Select from a selection of popular vehicles to compare quarter mile drag race outcome.
- View the specifications of the selected vehicle.
- View a photograph of the selected vehicle.

![Alt Text](./Screenshot%202023-07-24%20at%206.35.01%20PM.png)

# Wireframe


- The picture of the car with be slightly opaque with a grey background to match the webpage's grey background.
- The specifications of the car will include: year, make, model, engine, horsepower, weight, country of origin, retail price, and quarter mile time.  
- The drag strip will be in the upper center of the screen. It will have a texture to resemble asphault. There will be a starting line and a finish line. 
- Under the drag strip will be a toggle switch to switch between the selection of left car and right car. 
- Under the toggle switch will be the selection of 10 popular cars from various regions.
- Nav links include links to the project's Github repository, creator's LinkedIn, and About section.

![Wireframe](./wireframe.png)

# Technologies, Libraries, APIs

This project uses the following technologies:

- Vanilla Javascript 
- Webpack to bundle and transpile the source JavaScript code.
- Npm to manage project dependencies.
- Graph.js

# Bonus features

There are many potential directions this webpage could go, time permitting. Some predicited upgrades are:

- Add option to allow the user to add a car by entering quarter mile to compare to popular cars. 
- Add a quarter mile time calculator to estimate quarter mile time based on horsepower, weight, and other configurations of car. 
