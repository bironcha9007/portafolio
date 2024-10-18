<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Evitar la inyección de SQL utilizando consultas preparadas
    $sql = $conn->prepare("SELECT * FROM login WHERE username=?");
    $sql->bind_param("s", $username);
    $sql->execute();
    $result = $sql->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Depuración: Verifica antes de redirigir
            echo '<script>alert("Ingreso Exitoso"); window.location.href = "./ingreso.html";</script>';
            // header("Location: https://bayroncastillo777.000webhostapp.com/contact-form/ingreso.html");
            exit();
        } else {
            echo '<script>alert("Credenciales inválidas. Por favor, verifica tu nombre de usuario y contraseña."); window.location.href = "./index.html";</script>';
        }
    } else {
        echo '<script>alert("Credenciales inválidas. Por favor, verifica tu nombre de usuario y contraseña."); window.location.href = "./index.html";</script>';
    }
}

// Depuración: Verifica si hay algún output inesperado
echo "Finished processing login.";

$conn->close();
?>