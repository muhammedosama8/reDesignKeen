let myChart = document.getElementById('myChart').getContext('2d');
let massPopChart = new Chart(myChart,{
    type:'bar',
    data:{
        labels:['1 Aug','2 Aug','3 Aug','4 Aug','5 Aug','6 Aug','7 Aug','8 Aug'],
        datasets:[{
            label:'Author',
            data:[
                20,30,50,45,55,30,60,70,80
            ],
            backgroundColor:'#5d78ff',
            borderWidth:1,
            borderColor:'#5d78ff',
            hoverBorderColor:'rgb(240, 243, 255)',

        },{
            label:'Customer',
            data:[
                25,35,53,50,60,40,65,75
            ],
            backgroundColor:'rgb(240, 243, 255)',
            borderWidth:0,
            borderColor:'rgba(240, 243, 255, 1)',
            hoverBorderColor:'#5d78ff'

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                barPercentage: 0.
                
            }]
        },
        legend:{
            display:false,
            barWidth: .1
        },
        bars: {
            barWidth : .1,
            lineWidth : 1
        }
    }
});


let chart = document.getElementById('chart').getContext('2d');
let massChart = new Chart(chart,{
    type:'doughnut',
    data:{
        labels:['HTML','CSS','JS'],
        datasets:[{
            label:'Author',
            data:[
                30,30,40
            ],
            backgroundColor:[
                '#5d78ff',
                'rgba(240, 243, 255, 1)',
                '#74788d'
            ],
            borderWidth:0,
            borderColor:'#5d78ff',
            hoverBorderColor:'rgb(240, 243, 255)'

        }]
    },
    options: {
        legend:{
            display:false
        }
    }
});
