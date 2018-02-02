$(function(){
	
	
	$("#birdre").height($(window).height());
	$(window).resize(function(){
		$("#birdre").height($(window).height());
	})
	
	$("#birdre").bind("dblclick",function(){
		$(this).slideToggle();
	})
	
	var nuu=0;
	$(".header-nav>li").eq(5).bind("click",function(){
		window.open("zxsc-content.html")
	})
	var url=window.location.hash.substring(1);
	console.log(url)
	if(url==1){
		mmp();
	}
	if(url==2){
		mmp();
	}
	if(url==3){
		mmp();
	}
	if(url==4){
		mmp();
	}
	function mmp(){
		nuu=url;
		$("#birdre").css("display","none");
		window.location.hash="";
		runn(nuu);
		scroll(nuu)
	}



	//滚动
	$("#roll").height($(window).height()-$("#header").height());
	$(".roll-wrap>li").height($("#roll").height());
	$(window).resize(function(){
		$("#roll").height($(window).height()-$("#header").height());
		$(".roll-wrap>li").height($(window).height()-$("#header").height());		
	})
	var flang=true;
	var time=null;
	var index=0;
	$(".header-nav>li").eq(0).css({"background":"url(img/nav_now_bg.png) no-repeat center 38px","color":"#fff"});
	$(".header-nav>li").bind("click",function(){
		var indexI=$(this).index();
		if(indexI>=4){
			indexI=3;
		}
		nuu=indexI+1;
		scroll(nuu);
		runn(nuu);
	})
	
	
	window.onmousewheel=document.onmousewheel=scrollFn;
	window.addEventListener("DOMMouseScroll",scrollFn);
	function scrollFn(e){
		var e=e||window.event;
		var b=true;
		if(e.wheelDelta){
			b=e.wheelDelta>0?true:false;
		}else if(e.detail){
			b=e.detail>0?false:true;
		}
		if(b){
			scrollDown()
		}else{
			scrollUp();
		}
	}
	
	//上滑
	function scrollUp(){
		if(index<1){
			clearTimeout(time);
			time=setTimeout(function(){
				index++;
			},100)
		}else if(flang){
			flang=false;
			nuu++;
			if(nuu>4){
				nuu=4;
			}
			scroll(nuu);
			runn(nuu);
		}
	}
	//下滑
	function scrollDown(){
		if(index<1){
			clearTimeout(time);
			time=setTimeout(function(){
				index++;
			},100)
		}else if(flang){
			flang=false;
			nuu--;
			if(nuu<0){
				nuu=0;
			}
			scroll(nuu);
			runn(nuu);
		}
		
	}
	
	
	//滚动距离
	function scroll(nuu){
		$(".roll-wrap").animate({"top":-nuu*($(window).height()-$("#header").height())},500,function(){
			flang=true;
			index=0;
		})
	}
	
	
	//小白点
	function runn(nuu){
		if(nuu<1){
			$(".header-nav>li").css({"background":"","color":"#aeabb4"});
			$(".header-nav>li").eq(0).css({"background":"url(img/nav_now_bg.png) no-repeat center 38px","color":"#fff"});
		}else if(nuu==4){
			$(".header-nav>li").css({"background":"","color":"#aeabb4"});
			$(".header-nav>li").eq(3).css({"background":"url(img/nav_now_bg.png) no-repeat center 38px","color":"#fff"});	
			$(".header-nav>li").eq(4).css({"background":"url(img/nav_now_bg.png) no-repeat center 38px","color":"#fff"});	
		}else{
			$(".header-nav>li").css({"background":"","color":"#aeabb4"});
			$(".header-nav>li").eq(nuu-1).css({"background":"url(img/nav_now_bg.png) no-repeat center 38px","color":"#fff"});		
		}
	}
	
	
	$(".content-bottom").bind("click",function(){
		if(flang){
			flang=false;
			nuu++;
			if(nuu>4){
				nuu=4;
			}
			runn(nuu);
			scroll(nuu);
		}
	})
	
	
	
	//轮播
	var onum=0;
	$(".goleft").attr("disabled",true).css("opacity","0.4")
	$(".goright").bind("click",function(){
		onum++;
		$(".goleft").attr("disabled",false).css("opacity","1")
		if(onum>1){
			onum=2;
			$(".goright").attr("disabled",true).css("opacity","0.4")
		}
		$(".two-body").animate({"left":-onum*$(".two-body-li").width()},500)
	})
	$(".goleft").bind("click",function(){
		onum--;
		$(".goright").attr("disabled",false).css("opacity","1")
		if(onum==0){
			onum=0;
			$(".goleft").attr("disabled",true).css("opacity","0.4")
		}
		$(".two-body").animate({"left":-onum*$(".two-body-li").width()},500)
	})
	
	
	
	
	//biling
	var bl=$(".biling").children().children(".cla");
	var timm=null;
	timm=setInterval(function(){
		bl.animate({"opacity":"0"},200,function(){
			bl.animate({"opacity":"1"},200)
		})
	},400)
	
	
	$(".c-b-one:odd").css("margin-right","0")
	
	
	
	$(".maodian>.right").bind("click",function(){
		$(this).children("span").animate({"left":"0"},500);
		$(".maodian>.left").children("span").animate({"left":"78px"},500);
		$(".four-wrap-body-left").animate({"left":"-910px"},500)
		
	})
	$(".maodian>.left").bind("click",function(){
		$(this).children("span").animate({"left":"0"},500);
		$(".maodian>.right").children("span").animate({"left":"-78px"},500);
		$(".four-wrap-body-left").animate({"left":0},500)
	})
	

})