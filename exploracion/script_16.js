d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_16 = Plot.plot({
      marks:[
      Plot.barY(
        data, 
        Plot.groupX(
        {y:"mean"},
        {y:'mision_hs',
        x:'ocupacion', fill:'genero'
      }
        )),
      ],
      grid: true,
      color:{
        legend: true,
  
      },
      y:{
        label: "Horas por Misión"
      },
      x:{
        tickRotate:-15,
        label: "Ocupación"
      },
      marginBottom: 80
    }
    )
    d3.select('#chart_16').append(() => chart_16)
  })
