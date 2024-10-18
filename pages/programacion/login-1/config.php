<?php
$servername = "srv891.hstgr.io"; // Si estás utilizando Hostinger, suele ser localhost
$username = "u601977277_login";
$password = "MajoyDom100%";
$dbname = "u601977277_login";

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión


if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
} else {
    echo "Conexión exitosa";
}
?>

