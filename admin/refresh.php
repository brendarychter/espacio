<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;
	if(!mysqli_connect_error()){

		$consulta = "SELECT * FROM images";
		$response = mysqli_query($connection->connected,$consulta);

		echo mysqli_num_rows($response);
		
	}
?>