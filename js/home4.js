$(function(){
	$("#home4").load("home4-nav0.html");
	$(".mentbox a").click(function(){
		$(this).addClass("set").siblings().removeClass("set");
		var num = $(this).index();
		$("#home4").load("home4-nav"+num+".html");
	})
})