(function($) {
    // Within this function, $ will always refer to jQuery

$(document).on('open', '.remodal', function () {
    console.log('open');
});

$(document).on('opened', '.remodal', function () {
    console.log('opened');
});

$(document).on('close', '.remodal', function () {
    console.log('close');
});

$(document).on('closed', '.remodal', function () {
    console.log('closed');
});

$(document).on('confirm', '.remodal', function () {
    console.log('confirm');
});

$(document).on('cancel', '.remodal', function () {
    console.log('cancel');
});    

})(jQuery);