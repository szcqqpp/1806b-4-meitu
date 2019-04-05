function Tab(aa,bb){
    this.warp=document.getElementById(aa)
    this.oImg1=this.warp.getElementsByClassName('oImg1')[0];
    this.imgs=this.oImg1.getElementsByTagName('li'); //应用淡入淡出 warp1下的li
    this.ul=document.getElementById(bb)
    this.li=this.ul.getElementsByTagName('li')
    this.div=this.warp.getElementsByTagName('div')
    this.num=0;
    this.key=0;
    this.timer=null;
}
Tab.prototype.init=function(){
    var that=this;
    for (let i = 0; i < this.li.length; i++) {
        this.li[i].onclick=function(){
            that.key=that.num=i;                   
            that.yun(that.oImg1,-that.key*850)
            that.activea(that.key)
        }
    }
    this.div[0].onclick=function(){
        that.nexta()
    }
    this.div[1].onclick=function(){
        that.jian()
    }
    this.tim()
    this.warp.onmouseover=function(){
        clearInterval(that.timer)
    }
    this.warp.onmouseout=function(){
        that.tim()
    }
}
Tab.prototype.activea=function(a){
    for (let i = 0; i < this.li.length; i++) {
        this.li[i].className='';
    }
    this.li[a].className='active'
}
Tab.prototype.tim=function(){
    var that=this
    this.timer=setInterval(function(){
        that.nexta()
    },2000)
}
Tab.prototype.nexta=function(){
    this.num++;
    if (this.num>this.li.length-1) {
        this.num=0;
    }
    this.activea(this.num)
    this.key++;
    if (this.key>this.li.length) {
        this.key=1;
        this.oImg1.style.left=0+'px';
    }
    this.yun(this.oImg1,-this.key*1100)
}
Tab.prototype.jian=function(){
    this.num--;
    if (this.num<0) {
        this.num=this.li.length-1;
    }
    this.activea(this.num)
    this.key--;
    if (this.key<0) {
        this.key=this.li.length-1;
        this.oImg1.style.left=-1100+'px';
    }
    this.yun(this.oImg1,-this.key*1100)
}
Tab.prototype.yun=function(obj,target){
var that=this
var start=obj.offsetLeft;
var dis=target-start;
var n=0;
var count=20;
clearInterval(that.time2);
this.time2=setInterval(function (){
    n++;
    obj.style.left=start+dis*n/count+'px';

    if(n==count)
    {
        clearInterval(that.time2);
    }
},30);

}

var p=new Tab('warp','ul')
p.init()
// var c=new Tab('warp1','ul1')
//   c.init()
  
//继承实现淡入淡出
function show(aa,bb){
    Tab.call(this,aa,bb)
}

for(var i in Tab.prototype){
    show.prototype[i]=Tab.prototype[i]
}
//重写激活方法
 show.prototype.activea=function(a){
    for (let i = 0; i < this.li.length; i++) {
        this.li[i].className='';
        this.imgs[i].style.opacity='0';
        this.imgs[i].style.zIndex='0'; 
    }
    
    this.li[a].className='active';
    this.imgs[a].style.opacity='1';
    this.imgs[a].style.zIndex='99'; //注意当前层级要提到最高，防止点击链接时是最后1个链接
}

 var c=new show('warp1','ul1')
 c.init()