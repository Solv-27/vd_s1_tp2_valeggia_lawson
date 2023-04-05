d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_11 = Plot.plot({
    marginLeft:80,
    marks: [
      Plot.barY(data, Plot.binX({y:'count'},{x:'mision_hs'})
      ),
    ],
    y:{
      label: 'Frecuencia',
    },
    x:{
      label: 'Horas en la misión',
    },
    color:{
      legend: true,
    },
    grid: true,
    
  })
  d3.select('#chart_11').append(() => chart_11)
})


