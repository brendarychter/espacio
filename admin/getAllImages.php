<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;

	if(!mysqli_connect_error()){

		$consulta = "SELECT * FROM images";
		$response = mysqli_query($connection->connected,$consulta);

		if (mysqli_num_rows($response) > 0) {
			while($obj = mysqli_fetch_object($response)){
				$matriz[] = array('name' => $obj->name, 'id_image' => $obj->id_image);
			}
			//, 'userID' => $obj->userID
			$datos = json_encode($matriz);
			echo $datos;
		}else{
			echo "es 0";
		}
	}
?>