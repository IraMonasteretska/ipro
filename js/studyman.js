$(document).ready(function () {

    // extension icons
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

    // sidebar folders
    $('#html').jstree({
        'plugins': ['contextmenu', 'types'],
        'types': {
            'default': {
                'icon': 'img/studymanagement/file6.png'
            },
            'custom': {
                'icon': 'img/studymanagement/file1.png'
            }
        },
        'contextmenu': {
            'items': function (node) {

                return {
                    'item1': {
                        'label': 'Permission',
                        'icon': './img/studymanagement/pormission.png',
                        'action': function () {
                            $('#permission-popup').modal('show');
                        },
                    },
                    'item2': {
                        'label': 'Notification',
                        'icon': './img/studymanagement/notif.png',
                        'action': function () {
                            $('#notification-popup').modal('show');
                        }
                    },
                    "item3": {
                        "label": "Copy to Drive",
                        'icon': './img/studymanagement/copy.png',
                        'action': function () {
                            $('#copytodrive-popup').modal('show');
                        }
                    }
                }
            }
        },
    });

    // data table
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

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.filecontextmenu').length && !$target.closest('.filetext').length) {
            $('.filecontextmenu').removeClass('show');
        }
    });










    // v2
    $('.folderlist li a').click(function () {
        $('.folderlist li a').removeClass('active');
        $(this).addClass('active');
    });


    if ($('.folder-link').length) {
        $('.folder-link').on('contextmenu', function (e) {
            e.preventDefault();

            var mouseX = e.clientX;
            var mouseY = e.clientY;

            var contextMenu = $('.foldercontmenu');
            contextMenu.css({
                display: 'block',
                position: 'absolute',
                left: mouseX + 'px',
                top: mouseY + 'px'
            });

            $(document).click(function (event) {
                let $target = $(event.target);
                if (!$target.closest('.folder-link').length && !$target.closest('.foldercontmenu').length) {
                    contextMenu.hide();
                }
            });
        });
    }




});