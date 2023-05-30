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

  // const labels = Utils.months({count: 7});
  // const data = {
  //   labels: labels,
  //   datasets: [{
  //     axis: 'y',
  //     label: 'My First Dataset',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     fill: false,
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(255, 205, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(201, 203, 207, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(255, 159, 64)',
  //       'rgb(255, 205, 86)',
  //       'rgb(75, 192, 192)',
  //       'rgb(54, 162, 235)',
  //       'rgb(153, 102, 255)',
  //       'rgb(201, 203, 207)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  // const config = {
  //   type: 'bar',
  //   data,
  //   options: {
  //     indexAxis: 'y',
  //   }
  // };