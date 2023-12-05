$(document).ready(function () {

    if ($('.chartdays').length) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Expriting within X days', 'Pending New Equipment Certification', 'Certification Expired', 'Active Certified'],
                datasets: [{
                    data: [2, 6],
                    backgroundColor: ['#EB9B39', 'rgba(255, 255, 255, 0)'],
                    borderWidth: 0, 
                    borderRadius: [10, -10]
                }]
            },
            options: {
                cutout: '80%',
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                tooltips: {
                    enabled: false 
                }
            }
        });
    }
    

})