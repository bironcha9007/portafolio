<?php
// Incluir el archivo de configuración de la base de datos
include 'config.php';

// Verificar si los datos del formulario se enviaron correctamente
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Encriptar la contraseña antes de almacenarla
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Evitar la inyección de SQL utilizando consultas preparadas
    $check_query = $conn->prepare("SELECT * FROM login WHERE username=?");
    $check_query->bind_param("s", $username);
    $check_query->execute();
    $check_result = $check_query->get_result();

    // Verificar si el usuario ya existe
    if ($check_result->num_rows > 0) {
        echo '<script>alert("Usuario ya registrado. Por favor, elige otro nombre de usuario."); window.location.href = "./register.html";</script>';
    } else {
        // Preparar y ejecutar la consulta SQL para insertar el usuario
        $insert_query = $conn->prepare("INSERT INTO login (username, password) VALUES (?, ?)");
        $insert_query->bind_param("ss", $username, $hashed_password);

        if ($insert_query->execute()) {
            // Depuración: Verifica antes de redirigir
            echo '<script>alert("Usuario registrado exitosamente"); window.location.href = "./index.html";</script>';
            // header("Location: ./index.html");
            exit();
        } else {
            echo '<script>alert("Error al registrar usuario."); window.location.href = "./register.html";</script>';
        }
    }
} else {
    // Redireccionar si se intenta acceder directamente al archivo
    header("Location: ./register.html");
    exit();
}

// Depuración: Verifica si hay algún output inesperado
echo "Finished processing registration.";

$conn->close();
?>