window.onload=function(){
	var oimg=document.querySelector('img');
	var onoff=true;
	oimg.onclick=function(){
		if(onoff){
			oimg.style.width=500+'px';
			oimg.style.transition='1s ease all';
		}else{
			oimg.style.width=300+'px';
			oimg.style.transition='1s ease all';
		}
		onoff=!onoff;
	}
}
