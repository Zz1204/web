
window.onload=function(){
    var oimg=document.querySelector('img');
    var onoff=true;
    oimg.onclick=function(){
        if(onoff){
            oimg.style.width=400+'px';
            oimg.style.transition='all 1s';
        }else{
            oimg.style.width=300+'px';
            oimg.style.transition='all 1s';
        }
        onoff=!onoff;
    }
}