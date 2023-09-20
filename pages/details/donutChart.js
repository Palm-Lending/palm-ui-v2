const donutChartOptions = {
    chart: {
        height: 100,
        width: 100,
        type: 'pie'
    },
    title: {
        enabled: false,
    },
    subtitle: {
        useHTML: true,
        floating: true,
        verticalAlign: 'middle',
        y: 30
    },

    legend: {
        enabled: false
    },

    tooltip: {
        valueDecimals: 2,
        valueSuffix: ' TWh'
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            colorByPoint: true,
            type: 'pie',
            size: '100%',
            innerSize: '80%',
            dataLabels: {
                enabled: true,
                crop: false,
                distance: '-10%',
                style: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                },
                connectorWidth: 0
            }
        }
    },
    colors: ['#A67B32', '#454545'],
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 10.67,
        }, {
            name: 'Safari',
            y: 60.63
        }]
    }]
};

export default donutChartOptions