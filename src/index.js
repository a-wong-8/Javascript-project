import Car from "./car.js";
import "./index.scss";
import { setupSelection, setupSelectionOfCars } from "./selection";
import { initToggle } from "./toggle.js";

document.addEventListener("DOMContentLoaded", () => {

    let currentSide = 'left'; // sets default side to left 

    initToggle('toggleInput', toggleCallback); 
    // takes in the toggle switch position then sets current side to left or right 

    setupSelectionOfCars(selectionCallback); // creates the ul, takes in callback and will pass the selected car to callback 

    function toggleCallback (side) {
        currentSide = side;
    }

    let leftSelected = false;
    let rightSelected = false;
    let leftCarTime = 0;
    let rightCarTime = 0;

    function selectionCallback (car) {


        if (currentSide === 'left') {
            leftSelected = true;
            leftCarTime = car.time;

            const divElementLeftCar = document.querySelector('.left-car');
            // makes the list of specs 
            divElementLeftCar.innerHTML = `<ul><li>Car: ${car.makemodel} <li>Engine: ${car.engine}</li> <li>Weight: ${car.weight}</li> <li>Quarter mile time (sec): ${car.time}</li> <li>MSRP: ${car.price}</li></ul>`;

        } else {
            rightSelected = true;
            rightCarTime = car.time;

            const divElementRightCar = document.querySelector('.right-car');    

            divElementRightCar.innerHTML = `<ul><li>Car: ${car.makemodel}</li> <li>Engine: ${car.engine}</li> <li>Weight: ${car.weight}</li> <li>Quarter mile time (sec): ${car.time}</li> <li>MSRP: ${car.price}</li></ul>`;
        }

        if (leftSelected && rightSelected) {

            let car1 = document.querySelector("#left-drag-car");
            let car2 = document.querySelector("#right-drag-car");
            
            let distance = -480; // Distance to the finish line
            let car1Position = 1;
            let car2Position = 1;
            
            if (leftCarTime > rightCarTime) {
                car1Position = (rightCarTime / leftCarTime) - 1; // gets % - 1
                car2Position = 0;
            } else {
                car2Position = (leftCarTime / rightCarTime) - 1;
                car1Position = 0;
            }
            
            car1.style.top = car1Position * distance + "px";
            car2.style.top = car2Position * distance + "px";
            }
    }      
  });