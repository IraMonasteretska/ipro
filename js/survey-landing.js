$(document).ready(function () {

    // header circle
    if ($('.chartdays').length) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['text', 'text'],
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

    // time
    const inputsNL = document.querySelectorAll('.number_input');
    const inputsList = Array.prototype.slice.call(inputsNL);

    inputsList.forEach((input, index) => {
        input.addEventListener('keyup', function (ev) {
            if (ev.which === 69) return input.value = '';
            let value = input.value;
            let len = value.length;
            if (ev.which === 8 && inputsList[index - 1]) {
                return inputsList[index - 1].focus();
            }
            if (len === 1) {
                input.value = value.substr(0, 1);
                if (inputsList[index + 1]) inputsList[index + 1].focus();
            } else if (inputsList[index + 1] && ev.which != 8) {
                input.value = value.substr(0, 1);
                inputsList[index + 1].focus();
                inputsList[index + 1].value = value.substr(1, 1);
            } else if (len > 1 && !inputsList[index + 1]) {
                input.value = value.substr(0, 1);
            }
        })
    })

    // Steps function
    function goToStep(step) {
        $('.sectstep').addClass('hide');

        var nextStepClass = '.sectstep' + step;
        $(nextStepClass).removeClass('hide');

        $('.actualstep').text(step);

        $('.stepsboxes').removeClass(function (index, className) {
            return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
        });
        $('.stepsboxes').addClass('stepsboxes-' + step);
    }

    // next
    $('.sectstep1 .nextst').click(function () {
        goToStep(2);
    });

    $('.sectstep2 .nextst').click(function () {
        goToStep(3);
    });

    $('.sectstep3 .nextst').click(function () {
        goToStep(4);
    });

    $('.sectstep4 .nextst').click(function () {
        goToStep(5);
    });

    $('.sectstep5 .nextst').click(function () {
        goToStep(6);
    });

    $('.sectstep6 .nextst').click(function () {
        goToStep(7);
    });

    $('.sectstep7 .nextst').click(function () {
        goToStep(8);
    });

    $('.sectstep8 .nextst').click(function () {
        goToStep(9);
    });

    $('.sectstep9 .nextst').click(function () {
        goToStep(10);
    });

    //prev
    $('.sectstep2 .prevst').click(function () {
        goToStep(1);
    });

    $('.sectstep3 .prevst').click(function () {
        goToStep(2);
    });

    $('.sectstep4 .prevst').click(function () {
        goToStep(3);
    });

    $('.sectstep5 .prevst').click(function () {
        goToStep(4);
    });

    $('.sectstep6 .prevst').click(function () {
        goToStep(5);
    });

    $('.sectstep7 .prevst').click(function () {
        goToStep(6);
    });

    $('.sectstep8 .prevst').click(function () {
        goToStep(7);
    });

    $('.sectstep9 .prevst').click(function () {
        goToStep(8);
    });

    $('.sectstep10 .prevst').click(function () {
        goToStep(9);
    });

})