<?php
$servername = "localhost";
$username = "id22287643_login";
$password = "MajoyDom100%";
$dbname = "id22287643_login";

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión


if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
} else {
    echo "Conexión exitosa";
}
?>
