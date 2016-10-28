<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;
	

	if(!mysqli_connect_error()){
		
		$consulta = "INSERT INTO images (name) VALUES ('$this->name)'";
		$response = mysqli_query($connection->connected,$consulta);

		while($obj = mysqli_fetch_object($response)){
			$matriz[] = array('name' => $obj->name, 'id_image' => $obj->id_image);
		}
		//, 'userID' => $obj->userID
		$datos = json_encode($matriz);
		echo $datos;
	}
?>