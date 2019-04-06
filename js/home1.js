$(function(){
	$(".mentbox a").click(function(){
		$(this).addClass("set").siblings().removeClass("set");
		var num = $(this).index();
		$("#home1").load("home1-nav"+num+".html")
	})
})