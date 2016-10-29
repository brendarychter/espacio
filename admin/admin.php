<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;
	$uri = $_POST["data_uri"];

	if(!mysqli_connect_error()){


/*		$query = "INSERT INTO images (name) VALUES ('$uri')";
		if (mysqli_query ($connection->connected, $query)) {
		    echo "Escribio.";
		} else {
		    echo "Error";
		}
*/
		$consulta = "SELECT * FROM images";
		$response = mysqli_query($connection->connected,$consulta);

		while($obj = mysqli_fetch_object($response)){
			$matriz[] = array('name' => $obj->name, 'id_image' => $obj->id_image);
		}
		//, 'userID' => $obj->userID
		$datos = json_encode($matriz);
		echo $datos;
	}
?>