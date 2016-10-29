<?php 
	class connection{
/*		private $server = "localhost";
		private $user = "root";
		private $pass = "";
		private $bbdd = "espacio";
		public $connected;*/

		private $server = "localhost";
		private $user = "c0140136_espacio";
		private $pass = "GEzegi51fe";
		private $bbdd = "c0140136_espacio";
		public $connected;
		
		function __construct(){
			$this->connected = @mysqli_connect($this->server, $this->user, $this->pass, $this->bbdd);
		}

	}
?>