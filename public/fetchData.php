<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dotlights";

//create a connection
$connection = new mysqli($servername, $username, $password, $dbname);

//check the connection
if ($connection->connect_error) {
    echo json_encode(array("success" => false, "message" => "Connection failed: " . $connection->connect_error));
    exit;
}

//SQL query to retrieve data from the table
$query = "SELECT * FROM lightdata";

$result = $connection->query($query);

if ($result) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (count($data) > 0) {
        echo json_encode(array("success" => true, "data" => $data));
    } else {
        echo json_encode(array("success" => false, "message" => "No data found."));
    }
} else {
    echo json_encode(array("success" => false, "message" => "Query error: " . $connection->error));
}

//close connection
$connection->close();
?>