<?php



    include '../conn.php';
    $permalink = $_GET['permalink'];

    $query = "SELECT * FROM `services` WHERE permalink = :permalink";
    $stm = $conn -> prepare($query);
    $stm -> bindParam(':permalink', $permalink);
    $stm -> execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);




?>