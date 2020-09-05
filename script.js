
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
        <div class="alert-banner">
            <p><span class="bold">Alert</span> You have 6 overdue tasks to complete.</p>
            <button id="alert-btn" class="alert-banner-close"><strong>x</strong></button>
        </div>
`
$(alertBanner).on("click", function(e) {
    const element = e.target;
    if ($(element).hasClass('alert-banner-close')) {
        $(alertBanner).hide();
    }
})

$('.bell-svg').on('click', function() {
    $(alertBanner).show();
})
/* traffic chart code */

let trafficChart = document.getElementById('traffic-chart').getContext('2d');
let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10',"11-17","18-24","25-31"],
        datasets: [{
            label: '',
            data: [ 750, 
                1250, 
                1000, 
                2000,
                1500, 
                1750, 
                1250,
                1850,
                2250,
                1500,
                2500
             ],
            backgroundColor: [
                'rgba( 128, 86, 212 , 0.2)',
            ],
            borderColor: [
                'rgba( 128, 86, 212 , 0.2)'
            ],
            borderWidth: 2
        }]
};
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }

        ]
    },
    legend: {
        display: false
    }
};

let traffic = new Chart(trafficChart, {
    
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
/*---------------------------------------------------------------------------------------------------------*/


/* ------------------------------------------- daily chart ------------------------------------------------*/

const dailyChart = document.getElementById('daily-chart');
const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F',"S"],
        datasets: [{
            label: '# of Votes',
            data: [75, 115, 175, 125, 225, 200,100],
            backgroundColor: '#7477BF',
            borderWidth: 1
        }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}

const daily = new Chart(dailyChart, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

/*---------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------Mobile chart------------------------------------------------*/

var mobileChart = document.getElementById('mobile-chart');

const mobileData = {
    labels: ['Phones', 'Tablet', 'Desktop'],
        datasets: [{
            label: '# of Users',
            data: [500,550,2000],
            backgroundColor: [
                '#51B6C8',
                '#78CF82',
                '#7477BF',
            ],
            borderWidth: 1
        }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

var mobile = new Chart(mobileChart, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

/* ------------------------Messaging section -----------------------------------------------------*/

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

$(send).on('click', ()=> {
    if(user.value === "" && message.value === "") {
        alert('Please fill out user and message fields before sending');
    }else if (user.value === "") {
        alert("Please fill out user field before sending");
    }else if (message.value === "") {
        alert('Please fill out message field before sending');
    }else {
        alert(`Message successfully sent to : ${user.value}`)
    }
});