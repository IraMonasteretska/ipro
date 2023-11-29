$(document).ready(function () {

    // init selects
    if ($('select').length) {
        $('.styledselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }



});