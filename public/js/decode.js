$(document).ready(function(){
	var params = {};
    console.log("entro");
    var urlcollage = "";
    /*   var addContent = {
    append: function (obj, data, callBack) {
            "use strict";
            obj.append(data);
            callBack();
        }
    }
    var to = jQuery('div');
    addContent.append(to, '<div id="element1"></div>', function () {
        window.open('index.html', '_blank');
    });*/
	$.ajax({
        //url: "http://brendarychter.com.ar/arte/admin/getAllImages.php",
        url: "admin/getAllImages.php",
        type: "POST",
        data: params,
        cache: false,
        dataType: "json"
    }).done(function( data ) {
        data.reverse();
        for (var photo in data){
        	//Cuando ya hay diez imágenes, podría empezar a hacer n-1
        	$('#am-container').append("<img src='" +data[photo].name +"' title='photo-" +data[photo].id_image +"'></img>")
        }
        html2canvas(document.getElementById("am-container"), {
	        allowTaint: true
	    }).then(function(canvas) {
	    	document.getElementById("result").appendChild(canvas);
	    	urlcollage = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
	    }).then(function(){
	    	params.urlcollage = urlcollage;
	    	$.ajax({
                //url: "http://brendarychter.com.ar/arte/admin/collage.php",
                url: "admin/collage.php",
                type: "POST",
                data: params,
                cache: false,
                dataType: "text"
            }).done(function( data ) {
                console.log(data);
            }).error(function(error, textStatus){
                console.log(textStatus);
            });
	    });
        //Make collage
    }).error(function(error, textStatus){
        console.log(error);
    });


    $('#save-photo').on('click', function(){
    	console.log($('#hola'));
	    function getDataUri(url, callback) {
		    var image = new Image();
		    var uri;
		    image.onload = function () {
		        var canvas = document.createElement('canvas');
		        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
		        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

		        canvas.getContext('2d').drawImage(this, 0, 0);

		        // Get raw image data
		        callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
		        uri = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
		        // ... or get as Data URI
		        callback(canvas.toDataURL('image/png'));
		    };

		    image.src = url;
		    var params= {};
		    params.datauri = uri;

		    $.ajax({
                url: "http://brendarychter.com.ar/admin/admin.php",
                //url: "admin/admin.php",
                type: "POST",
                data: params,
                cache: false,
                dataType: "json"
            }).done(function( data ) {
                console.log("foto enviada desde el celular");
            }).error(function(error, textStatus){
                console.log(error);
            });
		}

		// Usage
		getDataUri('mask.jpg', function(dataUri) {
		    // Do whatever you'd like with the Data URI!
		});

    })


})