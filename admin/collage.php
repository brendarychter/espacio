<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;
	$uri = $_POST["datauri"];
	//echo $uri;
	if(!mysqli_connect_error()){
		$query = "INSERT INTO collages (name) VALUES ('$uri')";
		if (mysqli_query ($connection->connected, $query)) {
		    echo "Escribio collage.";
		} else {
		    echo "Error";
		}
	}
?>