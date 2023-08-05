<?php

    include '../conn.php';

    // Set the response content type to JSON
    header('Content-Type: application/json');

    // Check if the request is a POST request
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Get the POST data sent from JavaScript
        $inputJSON = file_get_contents('php://input');
        $inputData = json_decode($inputJSON, true);

        // make date and time in php
        date_default_timezone_set('Asia/Kolkata');
        $currentDateTime = date('d-m-Y H:i:s');

        // Collect data from the request
        $name = $inputData['name'];
        $phoneNumber = $inputData['phoneNumber'];
        $dateTime = $currentDateTime;

        // Validate the data (you can add more validation if needed)
        if (empty($name) || empty($phoneNumber) || empty($dateTime)) {
            $response = array('status' => 'error', 'message' => 'All fields are required');
            echo json_encode($response);
            exit;
        }

        // Prepare the insert statement
        $stmt = $conn->prepare("INSERT INTO inquiry (name, phoneNumber, dateTime) VALUES (:name, :phoneNumber, :dateTime)");

        // Bind parameters and execute the insert query
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':phoneNumber', $phoneNumber);
        $stmt->bindParam(':dateTime', $dateTime);
        $stmt->execute();

        $response = array('status' => 'success', 'message' => 'Data inserted successfully');
        echo json_encode($response);

    } else {
        // Handle other HTTP methods (GET, PUT, DELETE, etc.)
        $response = array('status' => 'error', 'message' => 'Invalid request method');
        echo json_encode($response);
    }


?>