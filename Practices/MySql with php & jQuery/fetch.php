<?php
// Establish connection to MySQL database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from users table
$sql = "SELECT name, email FROM users";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Return data as JSON
echo json_encode($data);

// Close connection
$conn->close();
?>