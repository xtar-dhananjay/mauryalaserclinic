<?php


    include '../conn.php';

    $query = $query = "SELECT * FROM `services` ORDER BY `serviceid` DESC";;
    $stm = $conn -> prepare($query);
    $stm -> execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);





?>