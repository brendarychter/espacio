$(document).ready(function(){
	$('#save-photo').on('click', function(){
        //Validate empty input
        //params.username = $('#username-login').val();


        // actually snap photo (from preview freeze) and display it
        Webcam.snap( function(data_uri) {
            // display results in page
            document.getElementById('results').innerHTML = '<img src="'+data_uri+'"/><br/></br>';
            // shut down camera, stop capturing
            Webcam.reset();
            params= {};
            
            // show results, hide photo booth
            document.getElementById('results').style.display = '';
            document.getElementById('my_photo_booth').style.display = 'none';
            params.datauri= data_uri;

            console.log("foto enviada");
            $.ajax({
                //http://blinkapp.com.ar/back/user/adminUser.php
                url: "admin/admin.php",
                type: "POST",
                data: params,
                cache: false,
                dataType: "json"
            }).done(function( data ) {
                console.log("foto recibida");
                console.log(data);
            }).error(function(error, textStatus){
                console.log(error);
            });


      /*      Webcam.upload( data_uri, 'myscript.php', function(code, text) {
                // Upload complete!
                // 'code' will be the HTTP response code from the server, e.g. 200
                // 'text' will be the raw response content
            } );*/
        } );

    })


    function cancel_preview() {
        // cancel preview freeze and return to live camera view
        Webcam.set({flip_horiz: false});
        Webcam.unfreeze();
        // swap buttons back to first set
        document.getElementById('pre_take_buttons').style.display = '';
        document.getElementById('post_take_buttons').style.display = 'none';
    }

    function preview_snapshot() {
        // play sound effect
        //try { shutter.currentTime = 0; } catch(e) {;} // fails in IE
        //shutter.play();
        
        // freeze camera so user can preview current frame
        Webcam.set({flip_horiz: true});
        Webcam.freeze();
        
        // swap button sets
        document.getElementById('pre_take_buttons').style.display = 'none';
        document.getElementById('post_take_buttons').style.display = '';
    }
});