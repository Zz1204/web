window.onload=function(){
	//点击消失
	var oTop=document.getElementById("top");
	var oTb=document.getElementsByClassName("t-btn")[0];
	function vanish(x,y){
		x.onclick=function(){
			y.style.display="none";
		}
	}
	vanish(oTb,oTop);
	
	
	
	
	
	
}
