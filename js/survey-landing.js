$(document).ready(function () {

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


    // q1 - time
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




    // steps
    // NEXT
    // $('.sectstep1 .nextst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep2').removeClass('hide');

    //     $('.actualstep').text(2);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-2');
    // })

    // $('.sectstep2 .nextst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep3').removeClass('hide');

    //     $('.actualstep').text(3);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-3');
    // })

    // $('.sectstep3 .nextst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep4').removeClass('hide');

    //     $('.actualstep').text(4);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-4');
    // })

    // $('.sectstep4 .nextst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep5').removeClass('hide');

    //     $('.actualstep').text(5);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-5');
    // })

    // $('.sectstep5 .nextst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep6').removeClass('hide');

    //     $('.actualstep').text(6);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-6');
    // })





    // function goToStep(step) {
    //     $('.sectstep').addClass('hide');

    //     var nextStepClass = '.sectstep' + step;
    //     $(nextStepClass).removeClass('hide');

    //     $('.actualstep').text(step);

    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-' + step);
    // }

    // $('.sectstep1 .nextst').click(function () {
    //     goToStep(2);
    // });

    // $('.sectstep2 .nextst').click(function () {
    //     goToStep(3);
    // });

    // $('.sectstep3 .nextst').click(function () {
    //     goToStep(4);
    // });

    // $('.sectstep4 .nextst').click(function () {
    //     goToStep(5);
    // });

    // $('.sectstep5 .nextst').click(function () {
    //     goToStep(6);
    // });






    // PREV
    // $('.sectstep2 .prevst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep1').removeClass('hide');

    //     $('.actualstep').text(1);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-1');

    // });
    // $('.sectstep3 .prevst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep2').removeClass('hide');

    //     $('.actualstep').text(2);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-2');

    // });

    // $('.sectstep4 .prevst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep3').removeClass('hide');

    //     $('.actualstep').text(3);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-3');

    // });

    // $('.sectstep5 .prevst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep4').removeClass('hide');

    //     $('.actualstep').text(4);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-4');

    // });

    // $('.sectstep6 .prevst').click(function () {
    //     $('.sectstep').addClass('hide');
    //     $('.sectstep5').removeClass('hide');

    //     $('.actualstep').text(5);
    //     $('.stepsboxes').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)stepsboxes-\S+/g) || []).join(' ');
    //     });
    //     $('.stepsboxes').addClass('stepsboxes-5');

    // });






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















})