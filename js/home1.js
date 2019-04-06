$(function(){
	$(".mentbox a").click(function(){
		$(this).addClass("set").siblings().removeClass("set");
	})
})