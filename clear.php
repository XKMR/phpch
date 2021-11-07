<?php
unlink("save.html");
$fs = fopen("save.html","a");
fclose($fs);
header("Location: index.html");
?>