<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM login WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        header("Location: https://visualgraphicmd.com.co/login-1/ingresoexitoso.html");
        exit(); // Asegúrate de que no haya ningún otro output antes de la redirección
    } else {
        // El usuario no ha iniciado sesión correctamente
        echo "Credenciales inválidas";
    }
}

$conn->close();
?>