window.onload = function(){
	 var wrap=document.getElementById('wrap')
          var prev = document.getElementById('prev');
          var next = document.getElementById('next');
          var imgs=document.getElementById('slideImg');
          var a =0;
          var b =0;
          prev.onclick= function(){
            a+=700;
            if (a>0){
              a=-950;
            }
            console.log(a);
            imgs.style.left = a+'px';
          }
          next.onclick= function(){
            b-=1370;
            if (b<-1370){
                b=0;
            }
            console.log(b);
            imgs.style.left = b+'px';
          }
        //自动播放
        var timer = null;
        function play(){
        timer = setInterval(function(){
            next.onclick();
        },2000);
    }
    wrap.onmouseover = function(){
        clearInterval(timer);
    }
    wrap.onmouseout = function(){
        play();
    }
    play();
}