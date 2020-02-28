function setgGroundLine(){
	let teranni = teraniposition[Terani.onIt()];
	if(teranni != undefined && (person.coordinaryy + 65) <= teranni.y){
		console.log('o');
		groundStand = teranni.y;
		if((person.coordinaryy + 65) > teranni.y){
			     console.log(teranni.y);
			     person.coordinaryy = (teranni.y - 65);			
	         }
	}else{
		groundStand = 360;
	}
	
}









static terraniOnScreen(){
	 let result = 200;
	 let a,b;
	 
     let teraniOnScreen = teraniposition.filter(function(element) {
     return ((element.x - 60) <= person.coordinarxx && (element.x + 260) >= (person.coordinarxx + 65))
  });
      teraniOnScreen.forEach((element,i) => {
		  a = Math.abs(((element.x + element.x + 200)/2) - ((person.coordinarxx + person.coordinarxx + 65)/2));
		 if(result > a){
			 result = a;
			 b = i;
		 }	 		 
	  });
	  
     return teraniOnScreen[],b;
}











































static onIt(){
	
		teraniposition.forEach((element,i) =>{
        if((element.x - 60) <= person.coordinarxx && (element.x + 260) >= (person.coordinarxx + 65)){
			
		x=i;
	    }
		
	   });
	   return x;
	}










isFaling(){
		setgGroundLine();
		let teranni = teraniposition[Terani.onIt()];
		if(teranni == undefined){
		  if((this.coordinaryy + 65) < groundStand){		
			  this.falling = true;	
		  }
		  if((this.coordinaryy + 65) >= groundStand){
			  this.falling = false;
			  
			  tickountFalling = 1;
	      }
		}else if(intoBlock(teranni) && (teranni.y + 50) > person.coordinaryy ){
			this.falling = true;	
			
			
		}
	}