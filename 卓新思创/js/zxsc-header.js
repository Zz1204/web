$(function(){
	
	//小白点
	$(".nav-ul>li:gt(0)").hover(function(){
		$(this).css("background","");
		$(this).css("background","url(img/nav_now_bg.png) no-repeat 45px bottom");
	},function(){
		$(this).css("background","");
	})
	
	//二级导航
	$(".subnav-par").hover(function(){
		var a=$(this).index(".subnav-par");
		$(".subnav").eq(a).stop().slideDown(700,"elasticOut")
	},function(){
		var a=$(this).index(".subnav-par");
		$(".subnav").eq(a).stop().slideUp(10)
	})
	
	
	//二级导航子节点
	$(".subnav-li").hover(function(){
		$(this).css({"background":"#3498db url(img/nav_li_bg.png) no-repeat 160px center","padding-left":"40px"});
	},function(){
		$(this).css({"background":"","padding-left":"20px"})
	})
	
	//回首页
	$(".nav-ul>li:first-child").bind("click",function(){
		window.open("zxsc-content.html");
	})
	//小鸟动态
	$(".nav-ul>li").eq(2).bind("click",function(){
		window.open("zxsc-dongtai.html");
	})
	//连接效果
	$(".lianfuye").eq(0).bind("click",function(){
		window.open("zxsc-fuye.html?name=one");
	})
	$(".lianfuye").eq(1).bind("click",function(){
		window.open("zxsc-fuye.html?name=two");
	})
	$(".lianfuye").eq(2).bind("click",function(){
		window.open("zxsc-fuye.html?name=three");
	})
	$(".lianfuye").eq(3).bind("click",function(){
		window.open("zxsc-fuye.html?name=four");
	})
	$(".lianfuye").eq(4).bind("click",function(){
		window.open("zxsc-fuye.html?name=five");
	})
	$(".lianfuye").eq(5).bind("click",function(){
		window.open("zxsc-fuye.html?name=six");
	})
	$(".lianfuye").eq(6).bind("click",function(){
		window.open("zxsc-fuye.html?name=seven");
	})
	
	//小鸟掌学
	$(".subnav-li").eq(0).bind("click",function(){
		window.open("zxsc-xiaoniao.html")
	})
	$(".subnav-li").eq(1).bind("click",function(){
		window.open("zxsc-xiaoniao.html#1");
	})
	$(".subnav-li").eq(2).bind("click",function(){
		window.open("zxsc-xiaoniao.html#2");
	})
	$(".subnav-li").eq(3).bind("click",function(){
		window.open("zxsc-xiaoniao.html#3");
	})
	$(".subnav-li").eq(5).bind("click",function(){
		window.open("zxsc-xiaoniao.html#4");
	})
})