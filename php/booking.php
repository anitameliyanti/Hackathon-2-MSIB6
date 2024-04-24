<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tbn-indonesia";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $id = $_POST['id'];
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $date = $_POST['date'];
    $attendence = $_POST['attendence'];

    $sql = "INSERT INTO `bookings`(`id`, `nama`, `email`, `date`, `attendence`) VALUES ('$id', '$nama', '$email', '$date', '$attendence')";

    if ($conn->query($sql) === TRUE) {
        echo "Booking created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
