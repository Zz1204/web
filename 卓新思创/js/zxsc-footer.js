$(function(){
	
	
	//返回顶部
	window.onscroll=function(){
		var top0=document.documentElement.scrollTop|| document.body.scrollTop;
		//考虑兼容性
		if(top0>200){
			$(".guding").css("display","block")
		}else{
			$(".guding").css("display","none")
			
		}
	}
	$(".guding-top").bind("click",function(){
		$(".guding").animate({"bottom":1000},400,function(){
			$(".guding").css("bottom",200)
		})
		$("body,html").animate({scrollTop:0},400)
	})
})
