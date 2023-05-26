import Cars from "../db/seeds.js";

export function setupSelection(callback) {
    const ul = document.querySelector('.list-cars');

    for (let i = 0; i < 9; i++) {
      const li = document.createElement('li');
      const carHtml = `${Cars[i].makemodel}`
      li.setAttribute("id", i);
      li.innerHTML = carHtml;
      
      li.addEventListener("click", event => {
            callback(Cars[i]) // how pass in a car??

            // need a left and a right car 
            // populate on click, correct pattern to load left and right 
            // listener on toggle then see if it is left or right 
            // module called set up car and run the commented out code 
        })

        ul.appendChild(li);
    }

  }