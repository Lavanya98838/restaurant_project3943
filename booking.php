<?php
// Form submission handling
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $num_people = $_POST['people'];

// Database connection
$servername = "localhost";
$username = "root";
$password = "Kr@tik1093";
$dbname = "booking";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO bookings (name, email, mobile, num_people) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("sssi", $name, $email, $mobile, $num_people);
    $stmt->execute();
}
  // Check if insertion was successful
    if ($stmt->affected_rows > 0) {
        echo "Booking successful!";
    } else {
        echo "Error: " . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>
