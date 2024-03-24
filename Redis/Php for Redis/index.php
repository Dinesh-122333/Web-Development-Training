<?php
require "predis-2.x/autoload.php"; // Corrected the version number in the autoload path

try {
    Predis\Autoloader::register(); // Corrected the syntax for registering the autoloader

    // Create a new instance of the Predis Client with appropriate connection details
    $redis = new Predis\Client();

    $redis->set("count", 1);
    $redis->incr("count");
    $count = $redis->get("count");
    echo "Count is $count<br/>";

    $redis->decr("count");
    $redis->incrby("count", 15);
    $redis->decrby("count", 15);

    // List operations

    $redis->del("languages");

    $redis->rpush("languages", "python"); // Append "python" to the list
    $redis->rpush("languages", "php"); // Append "php" to the list

    $redis->lpush("languages", "java"); // Prepend "java" to the list

    echo $redis->lpop("languages") . "<br/>"; // Remove and return the first element of the list
    echo $redis->rpop("languages") . "<br/>"; // Remove and return the last element of the list

    print_r($redis->lrange("languages", 0, -1)); // Fetch all elements of the list
    echo "<br/>";

    $len = $redis->llen("languages");
    echo "Length of languages list: $len";
} 
catch (Exception $e) {
    die($e->getMessage());
}
?>
