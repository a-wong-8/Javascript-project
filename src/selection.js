import Cars from "../db/seeds.js";

export function setupSelectionOfCars(callback) {
    const ul = document.querySelector('.grid-container');

    for (let i = 0; i < Cars.length; i++) {
      const li = document.createElement('li');
      const carHtml = `${Cars[i].makemodel}`
      li.setAttribute("grid-item", '');
      li.innerHTML = carHtml;
      
      li.addEventListener("click", event => {
            callback(Cars[i]);
        })

        ul.appendChild(li);
    }
  }
  
  // need a left and a right car 
  // populate on click, correct pattern to load left and right 
  // listener on toggle then see if it is left or right 
  // module called set up car and run the commented out code 