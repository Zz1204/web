window.onload=function(){
	
	//二级导航
	var oLia=document.getElementsByClassName("nav-li-a");
	oLia[0].style.backgroundColor="#23ac38";
	oLia[0].style.color="#fff";
	for(var i=0;i<oLia.length;i++){
		var a=oLia[i];
		a.index=i;
		oLia[i].onmouseover=function(){
			for(var j=0;j<oLia.length;j++){
				oLia[j].style.backgroundColor="";
				oLia[j].style.color="#666"
			}
			this.style.backgroundColor="#23ac38";
			this.style.color="#fff";	
		}
	}
	
	
	var oLi=document.getElementsByClassName("erji");
	var oDiv=document.getElementsByClassName("nav-bottom");
	for(var i=0;i<oLi.length;i++){
		var a=oLi[i];
		a.index=i;
		oLi[i].onmouseover=function(){
			for(var j=0;j<oDiv.length;j++){
				oDiv[j].style.display="none";
				
			}
			oDiv[this.index].style.display="block";
		}
		oLi[i].onmouseout=function(){
			for(var j=0;j<oDiv.length;j++){
				oDiv[j].style.display="none";
			}
		}
	}
	
	//轮播图
	var ul=document.getElementsByClassName("img")[0];
	var tLi=ul.children;
	var z=document.getElementsByClassName("z")[0];
	var zz=z.children;
	var now=0;
	var left=document.getElementsByClassName("left")[0];
	var right=document.getElementsByClassName("right")[0];
	tLi[0].style.opacity=1;
	for(var i=0; i<zz.length; i++){
		var li=zz[i];
		li.index=i;
		li.onclick=function(){
			now=this.index;
			tab();
		}
	}
	right.onclick=function(){
		clearInterval(timer);
		next();
	}
	left.onclick=function(){
		clearInterval(timer);
		now--;
		if(now<0){
			now=2;
		}
		tab();
//		console.log(now)
	}
	function tab(){
		for(var i=0; i<tLi.length; i++){
			var a=zz[i];
			a.className="";
//			console.log(tLi[i]);
			startMove(tLi[i], {opacity:0});//所有的图片隐藏
		}
		zz[now].className="red";
		startMove(tLi[now], {opacity:100});//当前的图片显示
	}
	function next(){
		now++;
		if(now==tLi.length){
			now=0;
		}
		tab();
	}
	var timer=setInterval(next, 4000);
	
	
	//content
	var zhan=document.getElementsByClassName("c-t-b")[0];
	var kai=document.getElementsByClassName("c-t-b-b")[0];
	var ct=document.getElementsByClassName("c-t")[0];
	var pt=document.getElementsByClassName("c-t-t")[0];
	var pb=document.getElementsByClassName("c-t-m")[0];
	zhan.onmouseover=function(){
		kai.style.display="block";
		zhan.style.backgroundPosition="0 -35px";
		pt.style.color="#04adf0";
		pb.style.color="#04adf0";
	}
	ct.onmouseleave=function(){
		kai.style.display="none"
		zhan.style.backgroundPosition="0 0";
		pt.style.color="#656565";
		pb.style.color="#BEBEBE";
	}
	
	
	
	//mmp
	var bg=["img/cpfw1b.jpg","img/cpfw2b.jpg","img/cpfw3b.jpg","img/cpfw4b.jpg","img/cpfw5b.jpg","img/cpfw6b.jpg"];
	
	var mmp=document.getElementsByClassName("mmp");
	var mmpt=document.getElementsByClassName("j-t");
	var oSp=document.getElementsByClassName("os");
	
	for(var i=0;i<mmp.length;i++){
		var a=mmp[i];
		a.index=i;
		mmpt[i].style.backgroundImage="url("+bg[i]+")";
		mmp[i].onmouseover=function(){
			mmpt[this.index].style.backgroundPosition="0 bottom";
			oSp[this.index].style.color="red";
		}
		mmp[i].onmouseout=function(){
			mmpt[this.index].style.backgroundPosition="0 top";
			oSp[this.index].style.color="";
			
		}
	}
	
}
