<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;

	if(!mysqli_connect_error()){
		
		$consulta = "SELECT * FROM collages";
		$response = mysqli_query($connection->connected,$consulta);

		while($obj = mysqli_fetch_object($response)){
			$matriz[] = array('collage_name' => $obj->name, 'id_collage' => $obj->id_image);
		}
		//, 'userID' => $obj->userID
		$datos = json_encode($matriz);
		echo $datos;
	}
?>