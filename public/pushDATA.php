<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dotlights";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to update the table at a specific index
function updateTable($index, $donationAmount, $donationTime, $lightColor, $lightID, $showName, $showAmount) {
    global $conn;

    $sql = "UPDATE lightdata SET DonationAmount=?, DonationTime=?, LightColor=?, LightID=?, ShowName=?, ShowAmount=? WHERE LightID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("dssiiii", $donationAmount, $donationTime, $lightColor, $lightID, $showName, $showAmount, $index);

    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

// Check if the request is an AJAX request
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    // Handle the AJAX request to update the table
    $index = $_POST['index'];
    $donationAmount = $_POST['donationAmount'];
    $donationTime = $_POST['donationTime'];
    $lightColor = $_POST['lightColor'];
    $lightID = $_POST['lightID'];
    $showName = $_POST['showName'];
    $showAmount = $_POST['showAmount'];

    if (updateTable($index, $donationAmount, $donationTime, $lightColor, $lightID, $showName, $showAmount)) {
        echo "Table updated successfully";
    } else {
        echo "Error updating table";
    }
} else {
    echo "This script is intended to be called via AJAX.";
}

$conn->close();
?>