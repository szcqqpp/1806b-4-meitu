$(function(){
	$("#ment").load("indexcon.html");
	$(".but").click(function(){
		var num = $(this).index()
		if (num == 0) {
			$("#ment").load("indexcon.html");
		}
		if (num == 5) {
			$("#ment").load("contact.html");
		};
	})
})