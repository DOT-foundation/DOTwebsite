<?php
$servername = "localhost";
$username = "root";
$password = "B^&i%v48br^5tn9";
$dbname = "id21439646_boxcolors";
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$colors = readColorsData($conn);
echo json_encode(array("success" => true, "colors" => $colors));

//read data
function readColorsData($conn) {
    $stmt = $conn->query("SELECT color FROM Colors");
    $colors = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
    return $colors;
}
