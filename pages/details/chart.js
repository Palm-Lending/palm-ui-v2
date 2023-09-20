const chartOptions = {
    chart: {
        type: 'spline',
    },
    title: {
        text: 'Fruit Consumption',
        style: {
            color: 'white'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: 'white'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Fruit eaten',
            style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        }
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        }
    },
    legend: {
        itemStyle: { color: 'white' }
    },
    series: [{
        name: 'Temperature',
        colorByPoint: false,
        data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
        [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]],
        color: '#A67B32'
    }]
};

export default chartOptions