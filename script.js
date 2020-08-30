var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
        responsive: true,
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            label: '',
            data: [ 500, 
                1000, 
                1500, 
                2000, 
                2500, 
                3000 ],
            backgroundColor: [
                'rgba( 128, 86, 212 , 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    min: 500,
                    beginAtZero: true
                }
            }]
        }
    }
});