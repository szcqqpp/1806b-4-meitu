<?php 
include_once "conc.php";
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$page = $_GET["page"];
}
$pageSize = 5;
$querySty = "SELECT * FROM news order by id limit ".($page-1)*$pageSize.",$pageSize";
$stet = mysqli_query($con,$querySty);
if (!$stet) {
	die("数据库查询失败".mysqli_error($con));
}
$data = array();
while ( $row = mysqli_fetch_assoc($stet)) {
	$data[] = $row;
}
$jsonStr = json_encode(array(
	"resultCode"=>200,
	"message"=>"成功",
	"data"=>$data
	),JSON_UNESCAPED_UNICODE);
echo $jsonStr;
mysqli_close($con);