$(document).ready(function(){
	var params = {};
    console.log("entro");
    var urlcollage = "";
	$.ajax({
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
	    	urlcollage = canvas.toDataURL();
	    }).then(function(){
	    	params.urlcollage = urlcollage;
            console.log(urlcollage)
	    	$.ajax({
                url: "admin/collage.php",
                type: "POST",
                data: params,
                cache: false,
                dataType: "text"
            }).done(function( data ) {
                //console.log(data);
            }).error(function(error, textStatus){
                console.log(textStatus);
            });
	    });
        //Make collage
    }).error(function(error, textStatus){
        console.log(error);
    });

})