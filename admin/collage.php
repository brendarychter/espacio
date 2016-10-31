<?php
	session_start();
	require_once("connection.php");
    $connection = new connection;
	$urlcollage = $_POST["urlcollage"];
	
	if(!mysqli_connect_error()){

		$consulta = "SELECT * FROM collages";
		$response = mysqli_query($connection->connected,$consulta);
		$idCollage;
		if (mysqli_num_rows($response) > 0) {
			while($obj = mysqli_fetch_object($response)){
				$matriz[] = array('id_collage' => $obj->id_collage);
				$idCollage = $obj->id_collage;
			}
			$query = "UPDATE collages SET collage_name='$urlcollage'";
			if (mysqli_query ($connection->connected, $query)) {
			    echo "Escribio collage.";
			} else {
			    echo "Error updating";
			}
		}else{
			$query = "INSERT INTO collages (collage_name) VALUES ('$urlcollage')";
			if (mysqli_query ($connection->connected, $query)) {
			    echo "Escribio collage.";
			} else {
			    echo "Error";
			}
		}
	}
?>