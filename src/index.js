import Car from "./car.js";
import "./index.scss";
import { setupSelection, setupSelectionOfCars } from "./selection";
import { initToggle } from "./toggle.js";

document.addEventListener("DOMContentLoaded", () => {

    let currentSide = 'left'; // sets default side to left 

    initToggle('toggleInput', toggleCallback); // takes in the toggle switch position then sets current side to left or right 

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

            const divElementLeftCar = document.querySelector('.left-car'); // makes the list of specs 
            divElementLeftCar.innerHTML = `<ul><li>Car: ${car.makemodel} <li>Engine: ${car.engine}</li> <li>Weight: ${car.weight}</li> <li>Quarter mile time (sec): ${car.time}</li> <li>Fuel Economy: ${car.mpg}</li> <li>Retail Price: ${car.price}</li></ul>`;

            const divElementLeftCarPic = document.querySelector('.left-car-pic'); // makes the left pic
            divElementLeftCarPic.innerHTML = `<img src=${car.bigimg}></img>`;

        } else {
            rightSelected = true;
            rightCarTime = car.time;

            const divElementRightCar = document.querySelector('.right-car');    
            divElementRightCar.innerHTML = `<ul><li>Car: ${car.makemodel}</li> <li>Engine: ${car.engine}</li> <li>Weight: ${car.weight}</li> <li>Quarter mile time (sec): ${car.time}</li> <li>Fuel Economy: ${car.mpg}</li> <li>Retail Price: ${car.price}</li></ul>`;

            const divElementRightCarPic = document.querySelector('.right-car-pic'); // makes the right pic
            divElementRightCarPic.innerHTML = `<img src=${car.bigimg}></img>`;
        }

        if (leftSelected && rightSelected) {

            let car1 = document.querySelector("#left-drag-car");
            let car2 = document.querySelector("#right-drag-car");
            // window.car1 = car1;
            // window.car2 = car2;

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

            let car1top = car1Position * distance + "px";
            let car2top = car2Position * distance + "px";
            
            const styleSheet = document.styleSheets[2];

            car1.style.animation = 'carAnimationLeft 3s linear forwards';
            const keyframesLeft = styleSheet.cssRules[0];
            keyframesLeft.deleteRule(0);
            keyframesLeft.appendRule(`to { top: ${car1top}; }`);
          
            car2.style.animation = 'carAnimationRight 3s linear forwards';
            const keyframesRight = styleSheet.cssRules[1];
            keyframesRight.deleteRule(0);
            keyframesRight.appendRule(`to { top: ${car2top}; }`);
        }

        // setTimeout(resetCars, 10000);
    
        function resetCars () {
            let car1 = document.querySelector("#left-drag-car");
            let car2 = document.querySelector("#right-drag-car");
            car1.style.animation = 'none';
            car2.style.animation = 'none';
            car1.style.top = '465px';
            car2.style.top = '465px';

            const divElementLeftCar = document.querySelector('.left-car'); 
            const divElementRightCar = document.querySelector('.right-car');

            divElementLeftCar.innerHTML = '';
            divElementRightCar.innerHTML = '';

            const divElementLeftCarPic = document.querySelector('.left-car-pic');
            const divElementRightCarPic = document.querySelector('.right-car-pic');

            divElementLeftCarPic.innerHTML = '';
            divElementRightCarPic.innerHTML = '';

            leftSelected = false;
            rightSelected = false;
        }

        const restart = document.querySelector('.restart img');

        restart.addEventListener('click', event => {
            resetCars()
        })
    }      
  });