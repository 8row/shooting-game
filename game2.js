// JavaScript Document
window.onload = spaceShip;
function spaceShip(){
	/*↓↓↓↓↓↓↓↓↓↓↓↓操作↓↓↓↓↓↓↓↓↓↓↓↓*/
	var sShip = document.getElementById("ship");
	var sShip2 = document.getElementById("ship2");
	var sShipY=450;
	var sShipX=257;
	var sShipY2=450;
	var sShipX2=257;
	var arrowAr = document.getElementById("arrow").getElementsByTagName("li");
	arrowAr[0].onmousedown = arrow0;
	arrowAr[1].onmousedown = arrow1;
	arrowAr[2].onmousedown = arrow2;
	arrowAr[3].onmousedown = arrow3;
	arrowAr[0].addEventListener("touchstart", arrow0, false);
	arrowAr[1].addEventListener("touchstart", arrow1, false);
	arrowAr[2].addEventListener("touchstart", arrow2, false);
	arrowAr[3].addEventListener("touchstart", arrow3, false);
	document.onkeydown = keyArrow;
	function keyArrow(){
		if(event.keyCode == 83){
			if(0<sShipY&&sShipX<515){
				sShipY -= 30;
				sShipX += 30;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}else if(event.keyCode == 65){
			if(0<sShipY&&0<sShipX){
				sShipY -= 30;
				sShipX -= 30;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}else if(event.keyCode == 88){
			if(sShipY<500&&sShipX<515){
				sShipY += 30;
				sShipX += 30;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}else if(event.keyCode == 90){
			if(sShipY<500&&0<sShipX){
				sShipY += 30;
				sShipX -= 30;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}
	}
	document.onkeyup = keyFunc;
	function keyFunc(){
		if(event.keyCode == 32){
			beam();
		}else if(event.keyCode == 13){
			startG();
		}else if(event.keyCode == 82){
			location.reload();
		}
	}
	function arrow0(){
		var arrowTimer = setInterval(arrowTimer, 10);
		function arrowTimer(){
			if(0<sShipY&&sShipX<515){
				sShipY -= 5;
				sShipX += 5;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}
		event.preventDefault();
		this.onmouseup = clearArrowTimer;
		this.onmouseout = clearArrowTimer;
		this.addEventListener("touchend", clearArrowTimer, false);
		function clearArrowTimer(){
			clearInterval(arrowTimer);
		}
	}
	function arrow1(){
		var arrowTimer = setInterval(arrowTimer, 10);
		function arrowTimer(){
			if(0<sShipY&&0<sShipX){
				sShipY -= 5;
				sShipX -= 5;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}
		event.preventDefault();
		this.onmouseup = clearArrowTimer;
		this.onmouseout = clearArrowTimer;
		this.addEventListener("touchend", clearArrowTimer, false);
		function clearArrowTimer(){
			clearInterval(arrowTimer);
		}
	}
	function arrow2(){
		var arrowTimer = setInterval(arrowTimer, 10);
		function arrowTimer(){
			if(sShipY<500&&sShipX<515){
				sShipY += 5;
				sShipX += 5;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}
		event.preventDefault();
		this.onmouseup = clearArrowTimer;
		this.onmouseout = clearArrowTimer;
		this.addEventListener("touchend", clearArrowTimer, false);
		function clearArrowTimer(){
			clearInterval(arrowTimer);
		}
	}
	function arrow3(){
		var arrowTimer = setInterval(arrowTimer, 10);
		function arrowTimer(){
			if(sShipY<500&&0<sShipX){
				sShipY += 5;
				sShipX -= 5;
				sShip.style.top = sShipY + "px";
				sShip.style.left = sShipX + "px";
			}
		}
		event.preventDefault();
		this.onmouseup = clearArrowTimer;
		this.onmouseout = clearArrowTimer;
		this.addEventListener("touchend", clearArrowTimer, false);
		function clearArrowTimer(){
			clearInterval(arrowTimer);
		}
	}
	var sShipTimer = setInterval(sShipTimer,5);
	function sShipTimer(){
		if(sShipY>sShipY2&&sShipX>sShipX2){
			if(sShipY2<500&&sShipX2<515){
				sShipY2 += 1;
				sShipX2 += 1;
			}
		}else if(sShipY>sShipY2&&sShipX<sShipX2){
			if(sShipY2<500&&0<sShipX2){
				sShipY2 += 1;
				sShipX2 -= 1;
			}
		}else if(sShipY<sShipY2&&sShipX>sShipX2){
			if(0<sShipY2&&sShipX2<515){
				sShipY2 -= 1;
				sShipX2 += 1;
			}
		}else if(sShipY<sShipY2&&sShipX<sShipX2){
			if(0<sShipY2&&0<sShipX2){
				sShipY2 -= 1;
				sShipX2 -= 1;
			}
		}else if(sShipY<sShipY2){
			if(0<sShipY2){
				sShipY2 -= 1;
			}
		}else if(sShipY>sShipY2){
			if(500>sShipY2){
				sShipY2 += 1;
			}
		}else if(sShipX<sShipX2){
			if(0<sShipX2){
				sShipX2 -= 1;
			}
		}else if(sShipX>sShipX2){
			if(515>sShipX2){
				sShipX2 += 1;
			}
		}
		sShip2.style.top = sShipY2 + "px";
		sShip2.style.left = sShipX2 + "px";
	}
	/*↓↓↓↓↓↓↓↓↓↓↓↓ビーム↓↓↓↓↓↓↓↓↓↓↓↓*/
	var beamzCnt = 0;
	var beamzY = [];
	var beamzX = [];
	var beamzId = document.getElementById("beamz").getElementsByTagName("li");
	arrowAr[4].onmousedown = beam;
	arrowAr[4].addEventListener("touchstart", beam, false);
	function beam(){
		event.preventDefault();
		beamzY[beamzCnt] = sShipY2;
		beamzX[beamzCnt] = sShipX2 + 16;
		beamzId[beamzCnt].style.top = beamzY[beamzCnt] + "px";
		beamzId[beamzCnt].style.left = beamzX[beamzCnt] + "px";
		beamzCnt++;
		if(beamzCnt>beamzId.length-1){
			beamzCnt = 0;
		}
	}
	var beamzTimer = setInterval(beamzTimer,15);
	function beamzTimer(){
		for(var i=0; i<beamzId.length; i++){
			beamzY[i] -= 5;
			beamzId[i].style.top = beamzY[i] + "px";
			if(beamzY[i]<0&&beamzY[i]>-10){
				beamzY[i] = -800;
			}
		}
	}
	/*↑↑↑↑↑↑↑↑↑↑↑↑ビーム↑↑↑↑↑↑↑↑↑↑↑↑*/
	/*↑↑↑↑↑↑↑↑↑↑↑↑操作↑↑↑↑↑↑↑↑↑↑↑↑*/
	/*↓↓↓↓↓↓↓↓↓↓↓↓ゲームスタート↓↓↓↓↓↓↓↓↓↓↓↓*/
	var Start = document.getElementById("start");
	Start.onclick = startG;
	function startG(){
		var opacityValue = 1.0;
		Start.style.opacity = opacityValue;
		var startDeleteTimer = setInterval(startDeleteTimer,50);
		function startDeleteTimer(){
			opacityValue -= 0.1;
			Start.style.opacity = opacityValue;
			if(opacityValue<0){
				clearInterval(startDeleteTimer);
				Start.parentNode.removeChild(Start);
			}
		}
		/*↓↓↓↓↓↓↓↓↓↓↓↓隕石↓↓↓↓↓↓↓↓↓↓↓↓*/
		var meteorX = new Array();
		var meteorY = new Array();
		var Meteor = document.getElementById("meteor").getElementsByTagName("li");
		for(var i=0 ; i<Meteor.length ; i++){
			var met = Meteor[i];
			meteorX[i] = Math.floor(Math.random()*500);
			meteorY[i] = Math.floor(Math.random()*1000)-1100;
			met.style.left = meteorX[i] + "px";
			met.style.top = meteorY[i] + "px";
		}
		var meteorSpeed = 6;
		var meteorTimer = setInterval(meteorTimer,30);
		function meteorTimer(){
			meteorX[0] += 1;
			meteorX[1] -= 1;
			meteorX[2] += 2;
			meteorX[3] += 2;
			for(var i=0 ; i<Meteor.length ; i++){
				meteorY[i] += meteorSpeed;
				if(meteorY[i]>550){
					meteorY[i] = -50;
					meteorX[i] = Math.floor(Math.random()*500);
				}
				if(meteorX[i]>550){
					meteorY[i] = -50;
					meteorX[i] = Math.floor(Math.random()*500);
				}
				if(meteorX[i]<-50){
					meteorY[i] = -50;
					meteorX[i] = Math.floor(Math.random()*500);
				}
				Meteor[i].style.left = meteorX[i] + "px";
				Meteor[i].style.top = meteorY[i] + "px";
				/*↓↓↓↓↓↓↓↓↓↓↓↓隕石衝突↓↓↓↓↓↓↓↓↓↓↓↓*/
				if(meteorX[i]<(sShipX2+35)&&(meteorX[i]+50)>sShipX2){
					if(meteorY[i]<(sShipY2+50)&&(meteorY[i]+50)>sShipY2){
						clearInterval(meteorTimer);
						clearInterval(sShipTimer);
						clearInterval(playTimer);
						clearInterval(enemyTimer1);

						if(window.confirm("Alien × " + enemyScoreValue + "\n" + playTimeS + "." + playTimeC + "seconds"+"\nスコアを登録しますか？")){
							var form = document.createElement('form');
							document.body.appendChild(form);
							
							var input = document.createElement('input');
							input.setAttribute( 'type', 'hidden');
							input.setAttribute( 'name' , 'score');
							input.setAttribute( 'value' , enemyScoreValue);
							form.appendChild(input);
							
							form.setAttribute( 'action' , 'input.php' );
							form.setAttribute( 'method' , 'post' );
							form.submit();
							
							//var target = document.getElementById("form01");
							//target.method = "post";
							//target.name = "score";
							//target.value = 22;
							//target.submit();
							//html(enemyScoreValue);
							//window.location.href = 'index.php';
						}else{
							location.reload();
						}
					}
				}
				/*↑↑↑↑↑↑↑↑↑↑↑↑隕石衝突↑↑↑↑↑↑↑↑↑↑↑↑*/
			}
		}
		/*↑↑↑↑↑↑↑↑↑↑↑↑隕石↑↑↑↑↑↑↑↑↑↑↑↑*/
		/*↓↓↓↓↓↓↓↓↓↓↓↓enemy↓↓↓↓↓↓↓↓↓↓↓↓*/
		var Enemy1 = document.getElementById("enemy1");
		var enemyY1 = Math.floor(Math.random()*500)-800;
		var enemyX1 = 0;
		var enemy1SpeedY = 1;
		var enemy1Speed = -1;
		var enemyScoreImg = document.getElementById("enemy_score");
		var enemyScoreValue = 0;
		var enemyScoreWidth = 0;
		var enemyTimer1 = setInterval(enemyTimer1, 10);
		function enemyTimer1(){
			if(enemy1Speed==0){
				enemy1Speed++;	
			}
			enemyY1 += enemy1SpeedY;
			enemyX1 += enemy1Speed;
			if(enemyX1<0||enemyX1>500){
				enemy1Speed *= -1;
			}else if(enemyY1>550){
				enemyY1 = Math.floor(Math.random()*500)-600;
				enemy1Speed *= 2;
				enemy1SpeedY++;
			}
			Enemy1.style.top = enemyY1 + "px";
			Enemy1.style.left = enemyX1 + "px";
			for(var i=0; i<beamzId.length; i++){
				if(enemyX1<beamzX[i]&&(enemyX1+50)>beamzX[i]){
					if(enemyY1<beamzY[i]&&(enemyY1+50)>beamzY[i]){
						enemyY1 = Math.floor(Math.random()*500)-600;
						beamzY[i] = -800;
						enemyScoreWidth += 25;
						enemyScoreImg.style.width = enemyScoreWidth + "px";
						enemyScoreValue++;
						if(enemy1Speed>1){
							enemy1Speed--;
						}else if(enemy1Speed<-1){
							enemy1Speed++;
						}
						if(enemy1SpeedY>1){
							enemy1SpeedY--;
						}
					}
				}
			}
			if(enemyX1<(sShipX2+35)&&(enemyX1+50)>sShipX2){
				if(enemyY1<(sShipY2+50)&&(enemyY1+50)>sShipY2){
					clearInterval(enemyTimer1);
					clearInterval(meteorTimer);
					clearInterval(sShipTimer);
					clearInterval(playTimer);
					if(window.confirm("Alien × " + enemyScoreValue + "\n" + playTimeS + "." + playTimeC + "seconds"+"\nスコアを登録しますか？")){
						var form = document.createElement('form');
						document.body.appendChild(form);
						
						var input = document.createElement('input');
						input.setAttribute( 'type', 'hidden');
						input.setAttribute( 'name' , 'score');
						input.setAttribute( 'value' , enemyScoreValue);
						form.appendChild(input);
						
						form.setAttribute( 'action' , 'input.php' );
						form.setAttribute( 'method' , 'post' );
						form.submit();
					}else{
						location.reload();
					}
				}
			}
		}
		/*↑↑↑↑↑↑↑↑↑↑↑↑enemy↑↑↑↑↑↑↑↑↑↑↑↑*/
		/*↓↓↓↓↓↓↓↓↓↓↓↓経過時間↓↓↓↓↓↓↓↓↓↓↓↓*/
		var playTime = document.getElementById('play_time');
		var playTimeC = 0;
		var playTimeS = 0;
		var playTimer = setInterval(playTimer,100);
		function playTimer(){
			playTimeC += 1;
			if(playTimeC>=10){
				playTimeS += 1;
				playTimeC = 0;
			}
			playTime.innerHTML = playTimeS + "." + playTimeC;
		}
		/*↑↑↑↑↑↑↑↑↑↑↑↑経過時間↑↑↑↑↑↑↑↑↑↑↑↑*/
	}/*←startG*/
	/*↑↑↑↑↑↑↑↑↑↑↑↑ゲームスタート↑↑↑↑↑↑↑↑↑↑↑↑*/
}/*←onload*/