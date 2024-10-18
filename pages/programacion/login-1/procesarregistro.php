<?php
// Conexión a la base de datos (usando el mismo código que antes)
include 'config.php';

// Obtener los datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Encriptar la contraseña (si es necesario)
// $hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Preparar y ejecutar la consulta SQL para insertar el usuario
$sql = "INSERT INTO login (username, password) VALUES ('$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Usuario registrado exitosamente";
            header("Location: https://visualgraphicmd.com.co/login-1/registroexitoso.html");
        exit(); // Asegúrate de que no haya ningún otro output antes de la redirección


} else {
    echo "Error al registrar usuario: " . $conn->error;
}

$conn->close();
?>
