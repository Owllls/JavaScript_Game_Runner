function phisichs(element){
          let obj = {Tr:true,Tl:true,Tu:true,Td:true};
    
	    if(element.x - (person.coordinarxx + 65) <= 0 && element.x - (person.coordinarxx + 65) > -200){
		   obj.Tr = false;
	    }else{
		   obj.Tr = true;
	    }
		if(person.coordinarxx - (element.x + 200) <= 0 && person.coordinarxx - (element.x + 200) > -200){
		   obj.Tl = false;
	    }else{
		   obj.Tl = true;
	    }
		if(person.coordinaryy - (element.y + 50) <= 0 && person.coordinaryy - (element.y + 50) > -50){
		   obj.Tu = false;
	    }else{
		   obj.Tu = true;
	    }
		if(element.y - (person.coordinaryy + 65) < 0 && element.y - (person.coordinaryy + 65) > -50){
		   obj.Td = false;
	    }else{
		   obj.Td = true;
	    }
    return obj;
}