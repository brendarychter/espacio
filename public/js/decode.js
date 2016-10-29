$(document).ready(function(){
	//document.getElementById('mypic').innerHTML = '<img src="'+ls+'"/>';
	params = {};
        console.log("entro");
	$.ajax({
        //url: "http://brendarychter.com.ar/admin/getAllImages.php",
        url: "admin/getAllImages.php",
        type: "POST",
        data: params,
        cache: false,
        dataType: "json"
    }).done(function( data ) {
        console.log("foto recibida");
        for (var photo in data){
        	console.log(data[photo]);
        }

        //Make collage
    }).error(function(error, textStatus){
        console.log(error);
    });


    $('#save-photo').on('click', function(){
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
            //MOSTRAR UN COUNTER PARA GUARDAR LA FOTO
            $.ajax({
                url: "http://brendarychter.com.ar/admin/admin.php",
                //url: "admin/admin.php",
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
        } );

    })
})