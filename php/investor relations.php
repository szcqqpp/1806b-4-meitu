<?php
$con = mysqli_connect("localhost","root","");
if (!$con) {
	die("数据库连接失败!".mysqli_error($con));
}
// 选择要链接的的数据库
mysqli_select_db($con,"meitu");
// 设置数据库字符编码
mysqli_set_charset($con,"utf8");
// 查询数据库
$queryStr = "SELECT * FROM announcement";
// 查询数据库
$state = mysqli_query($con,$queryStr);
if (!$state) {
	die("数据库查询失败".mysqli_error($con));
}
// 获取查询数据
$data = array();
while ($row = mysqli_fetch_assoc($state)) {
	$data[] = $row;
}
$jsonStr = json_encode(array(
	"resultCode"=>200,
	"message"=>"查询成功!",
	"data"=>$data
),JSON_UNESCAPED_UNICODE);
// JSON_UNESCAPED_UNICODE:让json不要编码unicode，让json更懂中文
// 将结果返回给前端
echo $jsonStr;
// 关闭数据库
mysqli_close($con);