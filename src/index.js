import Car from "./car.js";
import "./index.scss";
import { setupSelection, setupSelectionOfCars } from "./selection";
import { initToggle } from "./toggle.js";

document.addEventListener("DOMContentLoaded", () => {

    let currentSide = 'left'; // sets default to left 

    initToggle('toggleInput', toggleCallback); 
    // takes in the toggle switch position then sets current side to left or right 

    setupSelectionOfCars(selectionCallback); // 

    function selectionCallback (car) {
        if (currentSide === 'left') {
            const divElementLeftCar = document.querySelector('.left-car');

            divElementLeftCar.innerHTML = `<ul><li>Car: ${car.makemodel} <li>Engine: ${car.engine}</li> <li>Weight: ${car.weight}</li> <li>Quarter mile time: ${car.time}</li> <li>MSRP: ${car.price}</li></ul>`;
        } else {
            const divElementRightCar = document.querySelector('.right-car');    

            divElementRightCar.innerHTML = `<ul><li>Car: ${car.makemodel}</li> <li>Engine: ${car.engine}</li> <li>Weight: ${car.weight}</li> <li>Quarter mile time: ${car.time}</li> <li>MSRP: ${car.price}</li></ul>`;
        }
    }

    function toggleCallback (side) {
        currentSide = side;
    }

  });