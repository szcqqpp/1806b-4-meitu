$(function () {
    $(".nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".box1 .class").click(function () {
        if ($(".box1 .class ul").css("display") == "none") {
            $(".box1 .class ul").css("display", "block");
        } else {
            $(".box1 .class ul").css("display", "none");
        }
    });
    $.get("../php/investor relations.php", function (data) {
        var datalist = JSON.parse(data).data;
        for (var i = 0; i < datalist.length; i++) {
            var listr = "<li><span>" + datalist[i].create_date + "</span><span>" + datalist[i].title + "</span><span><i></i> 下载PDF文件 </span></li>";
            console.log(datalist[i]);
            $("#table").append(listr);

        }
    });
});