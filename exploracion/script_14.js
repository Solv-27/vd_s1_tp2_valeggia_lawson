d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_14 = 
    Plot.plot({
      marginBottom:100,
      y: {
        grid: true,
        label: 'Frecuencia'
      },
      x:{
        tickRotate:-45,
        label: 'Nacionalidad'
      },
      marks: [
        Plot.barY(data, Plot.groupX({y: "count"}, {x: "nacionalidad", fill: "genero"})),
        Plot.ruleY([0])
      ]
    })
      d3.select('#chart_14').append(() => chart_14)
  })