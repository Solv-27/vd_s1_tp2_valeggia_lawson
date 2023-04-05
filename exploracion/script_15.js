d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_15 = Plot.plot({
      marginLeft:80,
      marks: [
        Plot.areaY(data, Plot.binY({y:'count'},{x:'anio_mision', fill:'genero', })
        ),
        
      ],
      
      y:{
        label: 'Frecuencia',
      },
      x:{
        label: 'Año de misión',
      },
      color:{
        legend: true,
      },
      grid: true,
      
    })
    d3.select('#chart_15').append(() => chart_15)
  })