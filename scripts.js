var clickedTime; var createdTime; var reactionTime;

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function makeBox() {
	createdTime = Date.now();
	var time = Math.random()*3000;
	var width = Math.random()*200;
	if(width < 50) {width+=50;}
	if(height < 50) {height+=50;}
	var height = Math.random()*200;
	var radius = Math.random()*100;

	setTimeout(function() {
		document.getElementById("box").style.backgroundColor=getRandomColor();
		document.getElementById("box").style.width=width+"px";
		document.getElementById("box").style.height=height+"px";
		document.getElementById("box").style.borderRadius=radius+"px";
		document.getElementById("box").style.display="block";
		document.getElementById("box").style.position="relative";
		document.getElementById("box").style.top=(Math.random()*300)+"px";
		document.getElementById("box").style.left=(Math.random()*500)+"px";		

	}, time);

}


document.getElementById("box").onclick=function() {
	clickedTime=Date.now();
	reactionTime = (clickedTime-createdTime)/1000;
	document.getElementById("time").innerHTML = reactionTime;
	this.style.display="none";
	makeBox();
}

makeBox();