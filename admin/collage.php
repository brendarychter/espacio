<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;
	$urlcollage = $_POST["urlcollage"];
	
	if(!mysqli_connect_error()){
		//Si esta vacio, la primera vez lo tengo que crear
		//$query = "UPDATE collages SET (collage_name=$urlcollage) WHERE id_collage = 37";
		
		$query = "INSERT INTO collages (collage_name) VALUES ('$urlcollage')";
		if (mysqli_query ($connection->connected, $query)) {
		    echo "Escribio collage.";
		} else {
		    echo "Error";
		}
	}
?>