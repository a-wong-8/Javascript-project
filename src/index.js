// import Car from "./car.js";

document.addEventListener("DOMContentLoaded", () => {

    const divElementLeftCar = document.querySelector('.left-car');

    divElementLeftCar.addEventListener('mouseenter', function() {
        console.log('works left!');
    })
    
    divElementLeftCar.innerHTML = `<ul><li>Car: ${this.makemodel} <li>Engine: ${this.engine} <li>Weight: ${this.weight} <li>Quarter mile time: ${this.time} <li>Price: ${this.price}</p>`;
    console.log('test');

    const divElementRightCar = document.querySelector('.right-car');

    divElementRightCar.addEventListener('mouseenter', function() {
        console.log('works on the right!');
    })
    
    divElementRightCar.innerHTML = `<ul><li>Car: ${this.makemodel} <li>Engine: ${this.engine} <li>Weight: ${this.weight} <li>Quarter mile time: ${this.time} <li>Price: ${this.price}</p>`;
    console.log('test');
  });