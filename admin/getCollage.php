<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;

	if(!mysqli_connect_error()){
		$consulta = "SELECT * FROM collages";
		$response = mysqli_query($connection->connected,$consulta);
		$collage;
		while($obj = mysqli_fetch_object($response)){
			$matriz[] = array('collage_name' => $obj->collage_name);
			$collage = $obj->collage_name;
		}
		echo $collage;
	}
?>