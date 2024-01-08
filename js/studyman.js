$(document).ready(function () {


    if ($('.studselect').length) {
        $('.studselect').select2({
            // minimumResultsForSearch: -1,
            // dropdownCssClass: "headerselectdropdown"
            // dropdownParent: $('.mdmodal'),
            dropdownCssClass: "modaldd"
        });
    }

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
    if ($('.dttable.v1').length) {
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





    // modals

    $('#uncheckall').change(function () {
        var isChecked = $(this).prop('checked');

        $('.col-lg-4 .checkfiled :checkbox').prop('checked', true);

        if (!isChecked) {
            $('.col-lg-4 .checkfiled :checkbox').prop('checked', false);
        }
    });

    $('#uncheckall2').change(function () {
        var isChecked = $(this).prop('checked');

        $('.col-lg-4 .checkfiled :checkbox').prop('checked', true);

        if (!isChecked) {
            $('.col-lg-4 .checkfiled :checkbox').prop('checked', false);
        }
    });

    $('.checkfiled input').change(function () {
        if ($('.col-lg-4 .checkfiled :checkbox:not(:checked)').length > 0) {
            $('#uncheckall').prop('checked', false);
        } else {
            $('#uncheckall').prop('checked', true);
        }
    });

    // role select - show checkboxes
    $('#roleselect').change(function(){
        $('.modboxin').addClass('show');
    });
    

    if ($('.selectedusers').length) {
        $('.selectedusers').select2({
            placeholder: "Please select a country"
        });
    }



});




if ($('.stmanpage.v2').length) {

    $(document).ready(function () {

        var originalData; 

        var table = $('.dttable').DataTable({
            searching: false,
            paging: false,
            info: false,
            "ajax": {
                "url": "data.json", 
                "dataSrc": function (json) {
                    originalData = json; 
                    return json;
                }
            }
        });

        $('.folder-link').click(function (e) {
            e.preventDefault();
            var folderId = $(this).data('folder-id');
            var folderData = originalData[folderId];
            insertDataIntoTable(folderData);
        });


        $.getJSON('data.json', function (data) {
            $('.folder-link').click(function (e) {
                e.preventDefault();

                var folderId = $(this).data('folder-id');
                console.log(folderId)

                var folderData = data[folderId];

                insertDataIntoTable(folderData);
            });
        });

        function getFileExtension(fileName) {
            return fileName.split('.').pop().toLowerCase();
        }


        

        function insertDataIntoTable(data) {
            table.clear().draw(); 

            $.each(data, function (index, item) {
                var extension = getFileExtension(item.documentName);


                var newRow = '<tr>' +
                    '<td>' +
                    '<p class="filetext ' + getClassFromData(item) + '">' +
                    '<img src="' + getImagePathByExtension(extension) + '" alt="img">' +
                    item.documentName +
                    '</p>' +
                    // '<ul class="filecontextmenu">' +
                    // '<li>' +
                    // '<a href="#" data-bs-toggle="modal" data-bs-target="#view-popup">' +
                    // '<i class="fa-solid fa-eye"></i>' +
                    // 'View' +
                    // '</a>' +
                    // '</li>' +
                    // '<li><a href="#" data-bs-toggle="modal" data-bs-target="#publish-popup">Publish</a></li>' +
                    // '<li><a href="#" data-bs-toggle="modal" data-bs-target="#unpublish-popup">Unpublish</a></li>' +
                    // '<li><a href="#">Query</a></li>' +
                    // '<li><a href="#" data-bs-toggle="modal" data-bs-target="#viewhistory-popup">Version History</a></li>' +
                    // '<li><a href="#">Review History</a></li>' +
                    // '</ul>' +
                    '</td>' +
                    '<td>' + item.version + '</td>' +
                    '<td>' + item.modifiedBy + '</td>' +
                    '<td>' + item.modifiedOn + '</td>' +
                    '<td>' + item.size + '</td>' +
                    '<td>' + item.owner + '</td>' +
                    '</tr>';

                table.row.add($(newRow)).draw();
            });
        }


        function getClassFromData(item) {
            if (item.status === 'published') {
                return 'publish';
            } else if (item.status === 'unpublished') {
                return 'unpublish';
            } else {
                return ''; 
            }
        }


        function getImagePathByExtension(extension) {
            switch (extension) {
                case 'pdf':
                    return 'img/studymanagement/pdf.png';
                case 'xls':
                case 'xlsx':
                    return 'img/studymanagement/xls.png';
                case 'txt':
                    return 'img/studymanagement/txt.png';
                case 'png':
                case 'jpg':
                case 'jpg':
                    return 'img/studymanagement/xls.png';
                case 'ppt':
                    return 'img/studymanagement/ppt.png';
                case 'pptx':
                    return 'img/studymanagement/powerpoint.png';
                case 'zip':
                case 'rar':
                    return 'img/studymanagement/zip.png';
                case 'doc':
                case 'docs':
                    return 'img/studymanagement/word.png';
                case 'mp3':
                case 'mp4':
                    return 'img/studymanagement/music.png';
                default:
                    return 'img/studymanagement/default.png';
            }
        }




        $(document).on('contextmenu', '.filetext', function (e) {
            e.preventDefault();

            var clickedElement = $(this);
            var fileName = clickedElement.text().trim();
            var extension = getFileExtension(fileName);

            var contextMenu = $('<ul class="filecontextmenu v2"></ul>');

            if (isAudioExtension(extension)) {
                contextMenu.append('<li><a href="#" data-bs-toggle="modal" data-bs-target="#view-popup">' +
                    '<i class="fa-solid fa-play"></i>' +
                    'Play</a></li>');
            } else {
                contextMenu.append('<li><a href="#" data-bs-toggle="modal" data-bs-target="#view-popup">' +
                    '<i class="fa-solid fa-eye"></i>' +
                    'View</a></li>');
            }

            contextMenu.append(
                '<li><a href="#" data-bs-toggle="modal" data-bs-target="#publish-popup">Publish</a></li>' +
                '<li><a href="#" data-bs-toggle="modal" data-bs-target="#unpublish-popup">Unpublish</a></li>' +
                '<li><a href="#">Query</a></li>' +
                '<li><a href="#" data-bs-toggle="modal" data-bs-target="#viewhistory-popup">Version History</a></li>' +
                '<li><a href="#">Review History</a></li>'
            );

            $('body').append(contextMenu);

            contextMenu.css({
                top: e.pageY + 'px',
                left: e.pageX + 'px',
                position: 'absolute'
            });

            $(document).one('click', function () {
                contextMenu.remove();
            });

            $(document).on('contextmenu', function () {
                contextMenu.remove();
            });

            contextMenu.find('a').click(function () {
                contextMenu.remove();
            });
        });

        function isAudioExtension(extension) {
            return ['mp3', 'mp4'].includes(extension);
        }

        function getFileExtension(fileName) {
            return fileName.split('.').pop().toLowerCase();
        }


    });




}