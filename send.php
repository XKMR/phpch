<?php
date_default_timezone_set('Asia/Tehran');
if(isset($_POST['cont'])){
$fs = fopen("save.html","a");
$cl = $_POST['hr'].":".$_POST['min'].":".$_POST['sec'];
$cnt = date('Y-m-d')."     ".$cl."  -  ".$_POST['name'].":  ".$_POST['cont']."<br/><br/>";
fwrite($fs,$cnt);
fclose($fs);
header("Location: index.html");
die();
}else{
    header("Location: index.html");
    die();
}
?>