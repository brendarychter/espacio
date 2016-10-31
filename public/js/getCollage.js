$(document).ready(function(){
	$.ajax({
        //url: "http://brendarychter.com.ar/arte/admin/getCollage.php",
        url: "admin/getCollage.php",
        type: "POST",
        cache: false,
        dataType: "text"
    }).done(function( data ) {
        console.log(typeof data)
        if (!data == "")        {
            $("#skull").attr("src", data);
        }
    }).error(function(error, textStatus){
        console.log(error);
    });
})