$(function(){
	var page = 1;
	fn(page);
	$(".ku").click(function(){
		page++;
		fn(page);
		if (page == 5) {
			$(".ku").hide();
			$(".asd").show();
		};
	})
	function fn(page){
		$.getJSON("../php/news.php?page="+page,function(data){
			var data = data.data;
			var str = $("#temp").html();
			for (var i = 0; i < data.length; i++) {
				str+='<li><div class="under"><div class="left"><h3>'+data[i].time+'</h3><h4>'+data[i].title+'</h4><p>'+data[i].connect+'</p><div class="get"><a href="#">阅读全文</a><i>></i></div></div></div><div class="right"><img src="'+data[i].img+'" alt=""></div></li>';
			}
			$("#temp").html(str);
		})
	}
})