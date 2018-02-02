$(function(){
	$("#header").load("zxsc-header.html");
	$("#footer").load("zxsc-footer.html");
	
	
	$(".pen").click(function(){
		$(this).parent().css("width","0").animate({"width":"100%"},2000)
	})
	
	
//	$(".zhongzhuang").bind("click",function(){
//		window.open("zxsc-fuye.html?name=one")
//	})
	
	$(".wrap-li:odd").css("margin-right","0");
	var d=0;
	$(".list-btn").bind("click",function(){
		d++;
		if(d==1){
			console.log($(".dongtai-wrap>ul>li"))
			$(".dongtai-wrap>ul>li").clone().appendTo($(".dongtai-wrap>ul"));
			
		}
		if(d==2){
			$(".dongtai-wrap>ul>li:lt(3)").clone().appendTo($(".dongtai-wrap>ul"));
			$(".list-btn").css("display","none");
			$(".dongtai-wrap>ul+img").attr("src","img/list_gomore_bg_nomore.jpg")
			$(".dongtai-wrap>ul+img").css("margin-bottom","130px");
		}
		dianji($(".zhongzhuang"),"one");
		dianji($(".guowai"),"two");
		dianji($(".tianqi"),"three");
		dianji($(".baodao"),"four");
	})
	dianji($(".zhongzhuang"),"one");
	dianji($(".guowai"),"two");
	dianji($(".tianqi"),"three");
	dianji($(".baodao"),"four");
	function dianji(i,n){
		i.click(function(){
			window.open("zxsc-fuye.html?name="+n);
		})
	}
	
	
	
})
