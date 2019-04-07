$(function(){
	$("#ment").load("home0.html");
	$(".but").click(function(){
		var num = $(this).index()
		$("#ment").load("home"+num+".html");
	})
})