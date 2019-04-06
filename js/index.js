$(function(){
	$("#ment").load("home0.html");
	$(".but").click(function(){
		var num = $(this).index()
		console.log(num)
		$("#ment").load("home"+num+".html");
	})
})