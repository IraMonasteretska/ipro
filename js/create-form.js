$(document).ready(function () {

    var formeo = new FormeoEditor({
        editorContainer: '#formeo-editor',
        svgSprite: 'https://draggable.github.io/formeo/assets/img/formeo-sprite.svg',
        controls: {
            sortable: false,
            elementOrder: {
                common: [
                    'header',
                    'paragraph',
                    'text-input',
                    'textarea',
                    'date-input',
                    'radio',
                    'select',
                    'checkbox',
                ]
            },
            disable: {
                groups: ['html', 'layout'],
                // elements: [''],
            },
            elements: [
                {
                    tag: 'h5',
                    config: {
                        label: 'Section Header',
                        editable: true,
                        editableContent: true,
                        hideLabel: true
                    },
                    meta: {
                        group: 'common',
                        icon: 'header',
                        id: 'header'
                    },
                    content: 'Section Header'
                }, {
                    tag: 'p',
                    config: {
                        label: 'Paragraph',
                        editable: true,
                        editableContent: true,
                        hideLabel: true
                    },
                    meta: {
                        group: 'common',
                        icon: 'paragraph',
                        id: 'paragraph'
                    },
                    content: 'This content can be edited in the editor'
                }]
        }
    });

    var formeo = new FormeoEditor({
        editorContainer: '#formeo-editor2',
        svgSprite: 'https://draggable.github.io/formeo/assets/img/formeo-sprite.svg',
        controls: {
            sortable: false,
            elementOrder: {
                common: [
                    'header',
                    'text-input',
                    'textarea',
                    'date-input',
                    'radio',
                    'select',
                    'checkbox',
                    'header'
                ]
            },
            disable: {
                groups: ['html', 'layout'],
                // elements: [''],
            },
            elements: [
                {
                    tag: 'h5',
                    config: {
                        label: 'Section Header',
                        editable: true,
                        editableContent: true,
                        hideLabel: true
                    },
                    meta: {
                        group: 'common',
                        icon: 'header',
                        id: 'header'
                    },
                    content: 'Section Header'
                }, {
                    tag: 'p',
                    config: {
                        label: 'Paragraph',
                        editable: true,
                        editableContent: true,
                        hideLabel: true
                    },
                    meta: {
                        group: 'common',
                        icon: 'paragraph',
                        id: 'paragraph'
                    },
                    content: 'This content can be edited in the editor'
                }]
        }
    });


    // v2

    var formeo = new FormeoEditor({
        editorContainer: '#formeo-editor3',
        svgSprite: 'https://draggable.github.io/formeo/assets/img/formeo-sprite.svg',
        controls: {
            sortable: false,
            elementOrder: {
                common: [
                    'text-input',
                    'textarea',
                    'date-input',
                    'radio',
                    'select',
                    'checkbox',
                ]
            }

        }
    });

    var formeo = new FormeoEditor({
        editorContainer: '#formeo-editor4',
        svgSprite: 'https://draggable.github.io/formeo/assets/img/formeo-sprite.svg',
        controls: {
            sortable: false,
            elementOrder: {
                common: [
                    'text-input',
                    'textarea',
                    'date-input',
                    'radio',
                    'select',
                    'checkbox',
                ]
            }

        }
    });


})


