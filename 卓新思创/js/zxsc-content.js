$(function(){
	//插入header
	$("#header").load("zxsc-header.html");
	
	//banner
	var num=0;
	function run(){
		var a=$(".banner-content>li").length;
		num++;
		if(num==a){
			num=0;
		}
		$(".banner-content>li").eq(num).fadeIn(500).siblings().fadeOut(500);
		$(".b-c-m-1").eq(num).addClass("b-c-m-1-b").siblings().removeClass("b-c-m-1-b");
	}
	
	
	$(".b-c-r-r").bind("click",function(){
		run();
	})
	$(".b-c-r-l").bind("click",function(){
		num--;
		if(num<0){
			num=2;
		}
		$(".banner-content>li").eq(num).fadeIn(500).siblings().fadeOut(500);
		$(".b-c-m-1-1").eq(num).addClass("b-c-m-1-b").siblings().removeClass("b-c-m-1-b");
	})
	$(".b-c-m-1-1").bind("click",function(){
		var a=$(this).index();
		$(".banner-content>li").eq(a).fadeIn(500).siblings().fadeOut(500);
		$(".b-c-m-1-1").eq(a).addClass("b-c-m-1-b").siblings().removeClass("b-c-m-1-b");
		num=a;
	})
	
	//产品
	var now=0;
	var $li=$(".chanpin-body>li");
	var $i=$(".big");
	var $span=$(".tip");
	function runn1(){
		now++;
		if(now>$li.length-1){
			now=0;
		}
		$li.eq(now).fadeIn(500).siblings().fadeOut(500);
		$i.css("display","none");
		$i.eq(now).css("display","block");
		$(".donghua").removeClass("animated fadeInLeft");
		$(".donghua").addClass("animated fadeInRight");
		
	}
	function runn2(){
		now--;
		if(now<0){
			now=$li.length-1;
		}
		$li.eq(now).fadeIn(100).siblings().fadeOut(100);
		$i.css("display","none");
		$i.eq(now).css("display","block");
		$(".donghua").removeClass("animated fadeInRight");
		$(".donghua").addClass("animated fadeInLeft");
	}
	
	
	$(".s-m-r").bind("click",function(){
		runn1();
	})
	$(".s-m-l").bind("click",function(){
		runn2();
	})
	$(".sidebar-one").bind("click",function(){
		var a=$(this).index();
		$li.eq(a).fadeIn(500).siblings().fadeOut(500);
		$i.css("display","none");
		$i.eq(a).css("display","block");
		if(now>a){
			$(".donghua").removeClass("animated fadeInRight");
			$(".donghua").addClass("animated fadeInLeft");
		}else{
			$(".donghua").removeClass("animated fadeInLeft");
			$(".donghua").addClass("animated fadeInRight");
		}
		now=a;
	})
	
	$span.hover(function(){
		$(this).css("background","url(img/chanpin_nowline_xiaoquan.png) no-repeat center bottom");
	},function(){
		$(this).css("background","url(img/chanpin_nowline_xiaoquan.png) no-repeat center top");
	})
	
	
	
	
	
	$(".dongtu").hover(function(){
		$(this).addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
	$(".shousuo").hover(function(){
		$(this).addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
	
	$(".dongtu").bind("click",function(){
		var a=$(this).index(".dongtu");
		var $kai=$(".scope-body-bottom").eq(a).css("display");
		if($kai=="none"){
			$(".shousuo").css("background-position","0 0")
			$(".shousuo").eq(a).css("background-position","0 bottom")
		}else{
			$(".shousuo").eq(a).css("background-position","0 0")
		}
		$(".scope-body-bottom").stop().slideUp(500);
		$(".scope-body-bottom").eq(a).stop().slideToggle(500);
	})
	
	$(".shousuo").bind("click",function(){
		var a=$(this).index(".shousuo");
		var $kai=$(".scope-body-bottom").eq(a).css("display");
		if($kai=="none"){
			$(".shousuo").css("background-position","0 0")
			$(this).css("background-position","0 bottom")
		}else{
			$(this).css("background-position","0 0")
		}
		$(".scope-body-bottom").stop().slideUp(500);
		$(".scope-body-bottom").eq(a).stop().slideToggle(500);
	})
	
	
	
	
	//最后一个轮播


	var $ul=$(".team-body-wrap");
	var timer=null;
	var index=0;
	function starMove(){
		clearInterval(timer)
		timer=setInterval(function(){
			move();
		},3000);
	}
	starMove();
	$(".team-body").hover(function(){
		clearInterval(timer);
	},starMove);
	
	function move(){
		$ul.animate({"left":"-1100px"},1000,"backIn",function(){
			$ul.find(".team-b:first").appendTo($ul);
			$ul.css("left","0");
		})
		index++;
		if(index==$(".team-change").length){
			index=0;
		}
		$(".team-change").removeClass("b-c-m-1-b").eq(index).addClass("b-c-m-1-b");
	}

	$(".team-right").bind("click",function(){
		clearInterval(timer);
		move();
	})
	$(".team-left").bind("click",function(){
		clearInterval(timer);
		
		$ul.find(".team-b:last").insertBefore($ul.find(".team-b:first"));
		$ul.css("left","-1100px");
		$ul.animate({"left":"0"},1000,"backOut");
		index--;
		if(index<0){
			index=2;
		}
		$(".team-change").removeClass("b-c-m-1-b").eq(index).addClass("b-c-m-1-b");
		
	})
	
	
	//表单
	
	$("input").bind("focus",function(){
		var a=$(this).index("input");
		$(".input").eq(a).css("border-color","#b5b5b5")
	})
	$("input").bind("blur",function(){
		$(".input").css("border-color","")
	})
	$("textarea").bind("focus",function(){
		var a=$(this).index("input");
		$(".textarea").eq(a).css("border-color","#b5b5b5")
	})
	$("textarea").bind("blur",function(){
		$(".textarea").css("border-color","")
	})
	
	
	
	//底部
	$("#footer").load("zxsc-footer.html");
	
	
	
})