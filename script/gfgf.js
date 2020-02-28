function raspolozhenie(){
	let i =0;
	let xx ={XX : 400,XXX : 400};
	let numberOfNTer =  {NT: 0, NTT: 0};
	teraniposition.forEach((element) =>{
   if(element.x > (coordinarxx + 65)){
		 if(element.x -(coordinarxx + 65) <= xx.XXX){
 			  xx.XXX = (element.x -(coordinarxx + 65));
 			  numberOfNTer.NTT = i;

	  }
	}
		if((element.x + 200) < coordinarxx){
			console.log('!!!');
		 if((coordinarxx - (element.x + 200)) <= xx.XX){
		  	xx.XX = (coordinarxx - element.x + 200);
		  	numberOfNTer.NT = i;
		  	}
		  }
			i++;
		});
		console.log(xx);
    return numberOfNTer;
	}




function changingXLeft(){

	if(coordinarxx - (teraniposition[0].x + 200)  <= 1 ){
      return false;
   }
	 else {
	 	return true;
	 }
}
function changingXRight(){
	  let x = raspolozhenie().NTT;
		if(teraniposition[x].x - (coordinarxx + 65) <= 1){
	        return false;
		}else{
        	return true;
		}
}
function changingYUp(){
	if(teraniposition[0].y - (coordinaryy + 65) === 0 ){
         return false;

	}
	if(teraniposition[1].y - (coordinaryy + 65) === 0){
		    return false;

	}else{
		return true;
	}
}
function changingYDown(){
	if(coordinaryy - (teraniposition[0].y + 50) === 0){
         return false;
	}
	if(coordinaryy - (teraniposition[1].y + 50) === 0){
		 return false;

	}else{
		return true;
	}
}




   function Info(){
     console.log(teraniposition);
	   console.log("Координаты человека Л " + coordinarxx + " Координаты человека П" + (coordinarxx + 65));
	   console.log("Координаты Первого Объекта Л " + teraniposition[0].x + " Координаты Первого Объекта П " + (teraniposition[0].x + 200));
  	 console.log("Координаты Второго Объекта Л " + teraniposition[1].x  + " Координаты Второго Объекта П " + (teraniposition[1].x + 200));
     mIM = {ML : changingXLeft(),MR : changingXRight(), MU : changingYUp(), MD : changingYDown()};


      console.log(raspolozhenie());
	   console.log(mIM);
     teraniposition.forEach((element) =>{
		 console.log(element);
	 });



    }