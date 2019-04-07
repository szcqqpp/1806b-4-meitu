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
    $.get("investor relations.php", function (data) {
        var datalist = JSON.parse(data);
        console.log(datalist);
    });
});