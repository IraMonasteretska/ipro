$(document).ready(function () {

    // init selects
    if ($('select').length) {
        $('.styledselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }

    // filter - add active class
    $('.sortbtns button').click(function(){
        $('.sortbtns button').removeClass('active');
        $(this).addClass('active');
    });

    // sidebar
    $('.togglebarbtn').click(function(){
        $(this).toggleClass('rotate');
        $('.dashboardwrapper').toggleClass('hidesidebar');
    });



});