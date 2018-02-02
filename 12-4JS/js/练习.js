window.onload=function(){
			var a=document.getElementsByTagName("input")[0];
			a.onclick=function(){
				alert("是否是真的")
			}
			var b=document.getElementsByName("radio")[1];
			b.onclick=function(){
				document.write("女的")
			}
			var c=document.getElementsByClassName("hunyin")[2];
			c.onclick=function(){
				console.log("控制台输出")
			}
			var d=document.getElementsByTagName("input")[1];
			d.onclick=function(){
				alert("男的")
			}
			var e=document.getElementById("id");
			e.onclick=function(){
				document.write("你就看看吧")
			}
			var f=document.getElementsByClassName("zhuce")[0];
			f.onclick=function(){
				alert("提交成功")
			}
			var g=document.getElementById("yzm");
			g.onclick=function(){
				document.write("你的验证码呢")
			}
			var h=document.getElementsByClassName("zhucetiaokuan")[0];
			h.onclick=function(){
				alert("本条款如下")
			}
			var t=document.getElementsByClassName("zhucetiaokuan")[1];
			t.onclick=function(){
				console.log("会员加入标准")
			}
}
