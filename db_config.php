<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'lms_db');

$dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";

$options = [
    # POD php data object (used to connect database and php)
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, #show error (show exception message if any error occurs)
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, #fetch assoc array (return only associative array access data by column name only)


    PDO::ATTR_EMULATE_PREPARES   => false, #disable emulation (mean sent query and data separetly to database)

];

$pdo = new PDO($dsn, DB_USER, DB_PASS, $options); # create pdo instance (object) will use tp connect database 

try {
    $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    echo "Database connection successful.";
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}




?>