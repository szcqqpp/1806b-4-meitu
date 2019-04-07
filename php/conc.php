<?php 
include_once "qwer.php";
$con = mysqli_connect(HOST,USER,PWD) or die("数据库连接失败".mysqli_error($con));
mysqli_select_db($con,DBNAME);
mysqli_set_charset($con,"utf8");