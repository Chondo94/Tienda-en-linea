<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php 
try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::errmode_exception); 
}
 ?>
</body>
</html>
