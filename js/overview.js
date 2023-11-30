$(document).ready(function () {

    $(function () {
        $('.blue_btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });


    // chart sort
    $('.overviewchartbox__time li a').click(function (e) {
        e.preventDefault();
        $(this).parents('.overviewchartbox__time').find('a').removeClass('active');
        $(this).addClass('active');
    });



    if ($('.chartsection').length) {
        // charts
        // 1
        var ctx = document.getElementById('myChart').getContext('2d');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Expriting within X days', 'Pending New Equipment Certification', 'Certification Expired', 'Active Certified'],
                datasets: [{
                    data: [13, 30, 18, 20],
                    backgroundColor: ['#9f00ad', '#51546f', '#63cd81', '#ee0b0b'],
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
            }
        });

        var listContainer = document.createElement('ul');

        listContainer.classList.add('chart-legend');

        var chartTitle = document.createElement('h2');
        chartTitle.textContent = 'Laboratory Equipment Certification';
        listContainer.appendChild(chartTitle);

        myDoughnutChart.data.datasets.forEach(function (dataset, datasetIndex) {
            dataset.data.forEach(function (data, index) {
                var listItem = document.createElement('li');

                var colorBox = document.createElement('span');
                colorBox.style.backgroundColor = dataset.backgroundColor[index];
                colorBox.classList.add('legend-color');

                var labelNumber = dataset.data[index];
                var labelText = myDoughnutChart.data.labels[index];
                var text = document.createTextNode(labelNumber + ' ' + labelText);

                listItem.appendChild(colorBox);
                listItem.appendChild(text);
                listContainer.appendChild(listItem);
            });
        });


        var totalText = document.createElement('p');
        totalText.classList.add('centertotal');
        var todaySpan = document.createElement('span');
        todaySpan.textContent = 'Today';
        totalText.appendChild(todaySpan);
        totalText.innerHTML += ' Total: ' + myDoughnutChart.data.datasets[0].data.reduce((a, b) => a + b, 0);
        listContainer.appendChild(totalText);

        myDoughnutChart.canvas.parentNode.appendChild(listContainer);


        // 2
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Expriting within X days', 'Pending New Equipment Certification', 'Certification Expired', 'Active Certified'],
                datasets: [{
                    data: [6, 4, 8, 14],
                    backgroundColor: ['#9f00ad', '#51546f', '#63cd81', '#ee0b0b'],
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
            }
        });

        var listContainer = document.createElement('ul');

        listContainer.classList.add('chart-legend');

        var chartTitle = document.createElement('h2');
        chartTitle.textContent = 'Staff Certification';
        listContainer.appendChild(chartTitle);

        myDoughnutChart.data.datasets.forEach(function (dataset, datasetIndex) {
            dataset.data.forEach(function (data, index) {
                var listItem = document.createElement('li');

                var colorBox = document.createElement('span');
                colorBox.style.backgroundColor = dataset.backgroundColor[index];
                colorBox.classList.add('legend-color');

                var labelNumber = dataset.data[index];
                var labelText = myDoughnutChart.data.labels[index];
                var text = document.createTextNode(labelNumber + ' ' + labelText);

                listItem.appendChild(colorBox);
                listItem.appendChild(text);
                listContainer.appendChild(listItem);
            });
        });


        var totalText = document.createElement('p');
        totalText.classList.add('centertotal');
        var todaySpan = document.createElement('span');
        todaySpan.textContent = 'Today';
        totalText.appendChild(todaySpan);
        totalText.innerHTML += ' Total: ' + myDoughnutChart.data.datasets[0].data.reduce((a, b) => a + b, 0);
        listContainer.appendChild(totalText);

        myDoughnutChart.canvas.parentNode.appendChild(listContainer);

        // 3
        var ctx = document.getElementById('myChart3').getContext('2d');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Expriting within X days', 'Pending New Equipment Certification', 'Certification Expired', 'Active Certified'],
                datasets: [{
                    data: [6, 4, 14, 4],
                    backgroundColor: ['#9f00ad', '#51546f', '#63cd81', '#ee0b0b'],
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
            }
        });

        var listContainer = document.createElement('ul');

        listContainer.classList.add('chart-legend');

        var chartTitle = document.createElement('h2');
        chartTitle.textContent = 'Scorer Certification';
        listContainer.appendChild(chartTitle);

        myDoughnutChart.data.datasets.forEach(function (dataset, datasetIndex) {
            dataset.data.forEach(function (data, index) {
                var listItem = document.createElement('li');

                var colorBox = document.createElement('span');
                colorBox.style.backgroundColor = dataset.backgroundColor[index];
                colorBox.classList.add('legend-color');

                var labelNumber = dataset.data[index];
                var labelText = myDoughnutChart.data.labels[index];
                var text = document.createTextNode(labelNumber + ' ' + labelText);

                listItem.appendChild(colorBox);
                listItem.appendChild(text);
                listContainer.appendChild(listItem);
            });
        });


        var totalText = document.createElement('p');
        totalText.classList.add('centertotal');
        var todaySpan = document.createElement('span');
        todaySpan.textContent = 'Today';
        totalText.appendChild(todaySpan);
        totalText.innerHTML += ' Total: ' + myDoughnutChart.data.datasets[0].data.reduce((a, b) => a + b, 0);
        listContainer.appendChild(totalText);

        myDoughnutChart.canvas.parentNode.appendChild(listContainer);

        // 4
        var ctx = document.getElementById('myChart4').getContext('2d');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Expriting within X days', 'Pending New Equipment Certification', 'Certification Expired', 'Active Certified'],
                datasets: [{
                    data: [20, 4, 16, 14],
                    backgroundColor: ['#9f00ad', '#51546f', '#63cd81', '#ee0b0b'],
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
            }
        });

        var listContainer = document.createElement('ul');

        listContainer.classList.add('chart-legend');

        var chartTitle = document.createElement('h2');
        chartTitle.textContent = 'Scorer Certification';
        listContainer.appendChild(chartTitle);

        myDoughnutChart.data.datasets.forEach(function (dataset, datasetIndex) {
            dataset.data.forEach(function (data, index) {
                var listItem = document.createElement('li');

                var colorBox = document.createElement('span');
                colorBox.style.backgroundColor = dataset.backgroundColor[index];
                colorBox.classList.add('legend-color');

                var labelNumber = dataset.data[index];
                var labelText = myDoughnutChart.data.labels[index];
                var text = document.createTextNode(labelNumber + ' ' + labelText);

                listItem.appendChild(colorBox);
                listItem.appendChild(text);
                listContainer.appendChild(listItem);
            });
        });


        var totalText = document.createElement('p');
        totalText.classList.add('centertotal');
        var todaySpan = document.createElement('span');
        todaySpan.textContent = 'Today';
        totalText.appendChild(todaySpan);
        totalText.innerHTML += ' Total: ' + myDoughnutChart.data.datasets[0].data.reduce((a, b) => a + b, 0);
        listContainer.appendChild(totalText);

        myDoughnutChart.canvas.parentNode.appendChild(listContainer);

    }

});