<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;
	$urlcollage = $_POST["urlcollage"];
	
	if(!mysqli_connect_error()){
		$query = "INSERT INTO collages (collage_name) VALUES ('$urlcollage')";
		if (mysqli_query ($connection->connected, $query)) {
		    echo "Escribio collage.";
		} else {
		    echo "Error";
		}
	}
?>