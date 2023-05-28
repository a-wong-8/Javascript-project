import Cars from "../db/seeds.js";

export function setupSelectionOfCars(callback) {
    const ul = document.querySelector('.grid-container');

    for (let i = 0; i < Cars.length; i++) {
      const li = document.createElement('li');
      const carHtml = `<img src=${Cars[i].img}>`
      li.setAttribute("grid-item", '');
      li.innerHTML = carHtml;
      
      li.addEventListener("click", event => {
            callback(Cars[i]);
        })

        ul.appendChild(li);
    }
  }