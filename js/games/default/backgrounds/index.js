
define(['jquery'], function ($) {

    return {
        list: [
            'background1',
            'background2',
            'background3',
            'background4',
            'background5',
            'background6',
        ],
        set: function (name) {
            $('#background').addClass(name);
        }
    };
});
