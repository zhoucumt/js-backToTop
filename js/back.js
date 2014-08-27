window.onload = function(){
	var btn = document.getElementById("btn");
	//alert(btn.tagName);
	var timer = null;
	var isTop = true;
	var clientHeight = document.documentElement.clientHeight;
	window.onscroll = function(){
		var topValue = document.documentElement.scrollTop ||document.body.scrollTop;
		if(topValue >= clientHeight){
			btn.style.display = "block";
		}else{
			btn.style.display = "none";
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	};
	btn.onclick = function(){
		//alert("clicked");
		//alert(clientHeight);
		timer = setInterval(function(){
			var topValue = document.documentElement.scrollTop ||document.body.scrollTop;
			//alert(topValue);
			var speed = Math.floor(-topValue/6);
			//console.log(Math.floor(-1/5));
			document.documentElement.scrollTop = document.body.scrollTop = topValue + speed;
			isTop = true;
			console.log(topValue - speed);
			if(topValue == 0){
				clearInterval(timer);
			}
		},30);
	}
}