

<?php
// Conexión a la base de datos (usando el mismo código que antes)
include 'config.php';

// Obtener los datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Verificar si el usuario ya existe
$check_query = "SELECT * FROM login WHERE username='$username'";
$check_result = $conn->query($check_query);

if ($check_result->num_rows > 0) {
    echo '<script>alert("Usuario ya registrado. Por favor, elige otro nombre de usuario."); window.location.href = "./register.html";</script>';
} else {
    // Preparar y ejecutar la consulta SQL para insertar el usuario
    $sql = "INSERT INTO login (username, password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo '<script>alert("Usuario registrado exitosamente"); window.location.href = "./index.html";</script>';
    } else {

        echo '<script>alert("Error al registrar usuario:"); window.location.href = "./register.html";</script>'. $conn->error;
    }
}

$conn->close();
?>