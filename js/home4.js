$(function(){
	$(".mentbox a").click(function(){
		$(this).addClass("set").siblings().removeClass("set");
		$("#home4").load("home4-nav"+num+".html");
	})
})