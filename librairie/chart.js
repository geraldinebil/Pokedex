const ctx = document.getElementById('myChart');

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ], 
  
  
  
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

function pokemonChart(pokemon) {
  console.log(pokemon)
  pokemonChart.map (async (pok) =>{
    let hp
  })
}

const myChart = new Chart(ctx, config);

// pokemon.map(async (pok) => { 
//       let li = document.createElement("li")
//       let image = document.createElement ("img") 
//       image.className = "card-image"
//       li.className = "card"
//       let h2 = document.createElement("h2")
//       h2.className = "card-title"