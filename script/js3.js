var canvas = document.getElementById();
var context = canvas.getContext();
 
var foming = new Image();
 
 
 
 foming.onload = function(){
	 game();
 }
 
 function game(){
	 update();
	 render();
	 requestAnimationFrame(game);
	 
 }
 function update(){
	 
 }
 
 function render(){
	 
 }
 var requestAnimationFrame = (function(){ 
	 return window.requestAnimationFrame||
	 window.webkitRequestAnimationFrame ||
	 window.mozRequestAnimationFrame ||
	 window.oRequestAnimationFrame ||
     window.msRequestAnimationFrame ||
	 function(callback){
		 window.setTimeout(callback,1000/20);
	 };
 })();
	  