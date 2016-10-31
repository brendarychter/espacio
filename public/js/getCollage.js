$(document).ready(function(){
	$.ajax({
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