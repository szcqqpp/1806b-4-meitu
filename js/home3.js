$(function(){
	$(".mentbox a").click(function(){
		$(this).addClass("set").siblings().removeClass("set");
		$("#home3").load("home3-nav"+num+".html");
	})
})