$(function(){
	$("#home3").load("home3-nav0.html");
	$(".mentbox a").click(function(){
		$(this).addClass("set").siblings().removeClass("set");
		var num = $(this).index();
		$("#home3").load("home3-nav"+num+".html");
	})
})