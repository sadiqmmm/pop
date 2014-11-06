(function($) {
    // Within this function, $ will always refer to jQuery

    // Reading configuration from a file.
    
   //start ajax request
    $.ajax({
        url: "config/setup.json",
        //force to handle it as text
        dataType: "text",
        success: function(data) {
            
            //data downloaded so we call parseJSON function 
            //and pass downloaded data
            var json = $.parseJSON(data);
            //now json variable contains data in json format
            //let's display a few items
            $('#results').html('Popup Version: ' + json.version + '<br />hashTracking: ' + json.remodal.hashTracking);
        }
    });

   // Option the can be set for the modal window 
    var options = { hashTracking:true, closeOnEscape:false, closeOnAnyClick:false };
    
    $('[data-remodal-id=modal]').remodal(options).open();
    
   // Available Events for each event write the code in this block

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