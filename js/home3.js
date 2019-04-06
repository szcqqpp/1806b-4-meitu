$(function(){
	$(".mentbox a").click(function(){
		$(this).addClass("set").siblings().removeClass("set");
		// $("#home1").load("home"+num+".html");
	})
})