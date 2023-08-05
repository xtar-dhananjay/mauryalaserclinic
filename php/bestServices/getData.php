<?php


    include '../conn.php';
    $bestServices = "best";
    $query = "SELECT * FROM `services` WHERE bestServices = :best";
    $stm = $conn -> prepare($query);
    $stm -> bindParam(':best', $bestServices);
    $stm -> execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);



?>