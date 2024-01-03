$(document).ready(function () {
    // $(".filetext").each(function () {
    //     var filename = $(this).text().trim();
    //     var extension = filename.split('.').pop().toLowerCase();

    //     // if (extension === 'pdf') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/pdf.png');
    //     // } else if (extension === 'xls' || extension === 'xlsx') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/xls.png');
    //     // } else if (extension === 'txt') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/txt.png');
    //     // } else if (extension === 'ppt') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/ppt.png');
    //     // } else if (extension === 'pptx') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/powerpoint.png');
    //     // } else if (extension === 'zip' || extension === 'rar') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/zip.png');
    //     // } else if (extension === 'doc' || extension === 'docs') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/word.png');
    //     // } else if (extension === 'mp4') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/music.png');
    //     // } else if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'svg') {
    //     //     $(this).find('img').attr('src', 'img/studymanagement/image.png');
    //     // }



    // });

    $('.filetext').each(function () {
        var fileName = $(this).text().trim();
        var extension = fileName.split('.').pop().toLowerCase();

        if (extension === 'pdf') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/pdf.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'xls' || extension === 'xlsx') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/xls.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'txt') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/txt.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'ppt') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/ppt.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'pptx') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/powerpoint.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'zip' || extension === 'rar') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/zip.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'doc' || extension === 'docs') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/word.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'mp4') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/music.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'svg') {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/image.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        } else {
            var imgTag = $('<img>').attr({
                'src': 'img/studymanagement/default.png',
                'alt': 'img'
            });
            $(this).prepend(imgTag);
        }

    });

    $('#html').jstree({
        // 'plugins': ['types'],
        'plugins': ['contextmenu'],
        'contextmenu': {
            'items': function (node) {

                return {
                    'item1': {
                        'label': 'Permission',
                        'action': function () {

                        },
                    },
                    'item2': {
                        'label': 'Notification',
                        'action': function () {

                        }
                    },
                    "item3": {
                        "label": "Copy to Drive",
                        'action': function () {

                        }
                    }
                }
            }
        }
    });

    if ($('.dttable').length) {
        let table = new DataTable('.dttable', {
            searching: false,
            paging: false,
            info: false,
            // dom: "rtiplf"
        });
    }


    // right click - menu
    $('.filetext').on('contextmenu', function (e) {
        e.preventDefault(); 
      
        $('.filecontextmenu').removeClass('show');
      
        $(this).next('.filecontextmenu').addClass('show');
    });

    // $(document).on('click', function () {
    //     $('.filecontextmenu').removeClass('show');
    // });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.filecontextmenu').length && !$target.closest('.filetext').length) {
            $('.filecontextmenu').removeClass('show');
        }
    });

});