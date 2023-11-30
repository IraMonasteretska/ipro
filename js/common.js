$(document).ready(function () {
    // hide announcements
    $('.mngnotification__close').click(function () {
        $(this).parents('.mngnotification').hide();
    });

    // styled select
    if ($('.styledselect').length) {
        $('.styledselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }


    // init selects
    if ($('select').length) {
        $('.styledselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }

    // filter - add active class
    $('.sortbtns button').click(function () {
        $('.sortbtns button').removeClass('active');
        $(this).addClass('active');
    });

    // sidebar
    $('.togglebarbtn').click(function () {
        $(this).toggleClass('rotate');
        $('.dashboardwrapper').toggleClass('hidesidebar');
    });

    // edit TD
    
    $('.edittd').click(function () {
        var spanElement = $(this).closest('td').find('.edtext');
        spanElement.attr('contenteditable', 'true');
        
        var paragraphs = spanElement.find('p'); // Знаходимо всі теги <p> всередині .edtext
    
        if (paragraphs.length > 0) {
            var firstParagraph = paragraphs.first(); // Отримуємо перший тег <p>
            var textNode = firstParagraph[0].childNodes[0];
    
            var range = document.createRange();
            range.setStart(textNode, textNode.length); // Встановлюємо курсор вкінці тексту
            range.collapse(true);
    
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    
        spanElement.focus();
    });
    


    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.edtext').length && !$target.closest('.edittd').length) {
            console.log('sdsd')
            $('.edtext').attr('contenteditable', 'false')
        }
    });

});