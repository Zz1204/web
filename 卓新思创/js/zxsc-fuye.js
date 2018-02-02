$(function(){
	//引入头部
	$("#header").load("zxsc-header.html");
	
	//钢笔效果
	$(".pen").click(function(){
		$(this).parent().css("width","0").animate({"width":"100%"},2000)
	})
	//like效果
	var c=20;
	$(".like-btn").bind("click",function(){
		$(this).css("background-position-y","-74px");
		$(".te").css("display","block");
		$(".te").animate({"bottom":"200px","opacity":"1"},1000,function(){
			$(".te").css({"opacity":"0","bottom":"10px","display":"none"});
		});
		var b=parseInt(Math.random()*10);
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			dataType:"json",
			success:function(data){
				$(".te").html(data.like[b].ob);
			}
		});
		c++;
		$(this).children().children().html(c);
	})
	
	//内容
	var url=window.location.href;
	index=url.indexOf("=");
	var a=url.substring(index+1);
	if(a=="one"){
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			success:function(data){
				$(".t").each(function(i,val){
					$(".t").eq(i).html(data.one[i].t);
					
				})
				$(".img").attr("src",data.img[0].im)
			}
		});
	};
	if(a=="two"){
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			success:function(data){
				$(".t").each(function(i,val){
					$(".t").eq(i).html(data.two[i].t)
				})
				$(".img").attr("src",data.img[1].im)
			}
		});
	};
	if(a=="three"){
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			success:function(data){
				$(".t").each(function(i,val){
					$(".t").eq(i).html(data.three[i].t)
				})
				$(".img").attr("src",data.img[2].im)
			}
		});
	};
	if(a=="four"){
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			success:function(data){
				$(".t").each(function(i,val){
					$(".t").eq(i).html(data.four[i].t)
				})
				$(".img").attr("src",data.img[3].im)
				
			}
		});
	};
	if(a=="five"){
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			success:function(data){
				$(".t").each(function(i,val){
					$(".t").eq(i).html(data.five[i].t)
				})
				$(".img").attr("src",data.img[4].im)
				
			}
		});
	};
	if(a=="six"){
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			success:function(data){
				$(".t").each(function(i,val){
					$(".t").eq(i).html(data.six[i].t)
				})
				$(".img").attr("src",data.img[5].im)
				
			}
		});
	};
	if(a=="seven"){
		$.ajax({
			type:"get",
			url:"js/fuye.json",
			async:true,
			success:function(data){
				$(".t").each(function(i,val){
					$(".t").eq(i).html(data.seven[i].t)
				})
				$(".img").attr("src",data.img[6].im)
			}
		});
	};
	
	
	
	
	
	
	//引入底部
	$("#footer").load("zxsc-footer.html");
	
})