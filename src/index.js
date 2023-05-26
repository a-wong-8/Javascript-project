import Car from "./car.js";
import "./index.scss";
import { setupSelection } from "./selection";
import { attachToggleListener } from "./toggle.js";

document.addEventListener("DOMContentLoaded", () => {

    const divElementLeftCar = document.querySelector('.left-car');


    attachToggleListener();

    setupSelection();

    // divElementLeftCar.innerHTML = `<ul><li>Car: ${this.makemodel} <li>Engine: ${this.engine}</li> <li>Weight: ${this.weight}</li> <li>Quarter mile time: ${this.time}</li> <li>Price: ${this.price}</li></ul>`;

    // const divElementRightCar = document.querySelector('.right-car');    
    // divElementRightCar.innerHTML = `<ul><li>Car: ${this.makemodel}</li> <li>Engine: ${this.engine}</li> <li>Weight: ${this.weight}</li> <li>Quarter mile time: ${this.time}</li> <li>Price: ${this.price}</li></ul>`;

    // const divElementSelector = document.querySelector('.car-selection');
    // divElementSelector.addEventListener('mouseenter', function() {
    //     console.log('works selector!');
    // })
    // divElementSelector.addEventListener('click', function() {
    //     console.log('works click!');
    // })

  });