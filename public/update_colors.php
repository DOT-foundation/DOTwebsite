<?php
$servername = "localhost";
$username = "id21439646_bc";
$password = "B^&i%v48br^5tn9";
$dbname = "id21439646_boxcolors";
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["color"])) {
    $color = $_POST["color"];

    $stmt = $conn->prepare("INSERT INTO Colors (color) VALUES (:color)");
    $stmt->bindParam(':color', $color);
    $stmt->execute();

    $colors = readColorsData($conn);

    echo json_encode(array("success" => true, "colors" => $colors));
} else {
    echo json_encode(array("success" => false, "message" => "Invalid request or missing data."));
}