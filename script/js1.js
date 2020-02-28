function Oper(){
alert("!!!");
}
function ToGame(){
	var i;
	for(i=0;i<4;i++){
		if(document.getElementById('gm'+i).checked)
			break;
			}
	     
         if(i>3){
	
			 return;
			
		 }		
		 var pg=document.getElementById('gm'+i).value;
		
		 var dr=document.getElementById('gmr').value;
		 pg+="?AB="+dr;
		 window.location.href=pg;
	
}
function Operation1(){
var imgar=document.getElementById('imageofgame');
imgar.src='../images/icon_bow_and_arr.jpg';
 
} 
function Operation2(){

 var elemen = document.getElementById('imageofgame');
 elemen.src="../images/cars.jpg";	

} 
function Operation3(){
	 var elemens = document.getElementById('imageofgame');
     elemens.src="../images/tetris.jpg";	
} 