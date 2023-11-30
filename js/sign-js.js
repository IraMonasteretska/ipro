$(document).ready(function () {

    $('.tooglepass').click(function () {
        // Отримуємо перший вхід в батьківському контейнері .inpwrap
        var input = $(this).parents('.inpwrap').find('input');

        // Перевіряємо тип входу і змінюємо його
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }
    });


    // verification code
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

    //  Password rules

    function updatePasswordRules() {
        var password = $('#pass').val();

        $('.inputruleslist li.lowercase').toggleClass('active', /[a-z]/.test(password));
        $('.inputruleslist li.uppercase').toggleClass('active', /[A-Z]/.test(password));
        $('.inputruleslist li.number').toggleClass('active', /\d/.test(password));
        $('.inputruleslist li.min-length').toggleClass('active', password.length >= 8);

        var firstName = "John";
        $('.inputruleslist li.disallowed').toggleClass('active', password.toLowerCase().indexOf(firstName.toLowerCase()) === -1);

        $('.inputruleslist li.max-length').toggleClass('active', password.length <= 20);

        // Перевірка всіх умов і зняття атрибуту disabled
        var allConditionsMet = $('.inputruleslist li.active').length === $('.inputruleslist li').length;
        $('.resetpass .signsubmit').prop('disabled', !allConditionsMet);
    }

    $('#pass').on('input', function () {
        updatePasswordRules();
    });


});