var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var gameEngine;
var In_game = false;
////////////////////////////////

///////////////////////////////
var movemapF =-1200;
var movemapU  = 425;
var speedchangeX;
//////////////////////////////
var person;
var teraniposition = [];
var moving;

var groundStand = 360;
var rF = true,rB = true,mF = true,mB = true,Jb = true,J = true,Ju = true,F = true;

var runAn;
var runBAn;
var jumpAn;
var jumpBAn;
var fonPick;
var groundFonPick;
var ground;
var fire;

var speed = 10;
var tickcount = 0;
var tickcountJump = 1;
var tickountFalling =1;

var temp = 3;
var tempFalling = 80;
var tempJump = 20;

/////////////////////////////
var a =0;
var b =[];
var c =[];
var mIM = {};
/////////////////////////////
	function loadingImg(){
	    runAn =  new Image();
        runAn.src = '../images/spriterun.png';
		runBAn =  new Image();
        runBAn.src = '../images/spriterunback.png';
		jumpAn =  new Image();
        jumpAn.src = '../images/spritejump.png';
		jumpBAn =  new Image();
        jumpBAn.src = '../images/spritejumpback.png';
		fire = new Image();
		fire.src = '../images/fire.jpg';
		fonPick =  new Image();
        fonPick.src = '../images/fon.png';
		groundFonPick =  new Image();
        groundFonPick.src = '../images/fongroundan.png';
		ground =  new Image();
        ground.src = '../images/ground.png';
}
    function StartGame(){
		person = new Person();
		loadingImg();
		loadingg();
		person.PersonImage = runAn;
		
	}
    function loadingg(){
		           teraniposition = [new Terani(),new Terani()];
		           window.addEventListener('keypress' , keypress);
			       ctx.fillStyle = "#00F";
                   ctx.font = "italic 30pt Arial";
			       //Если без этого все работает - удалить нахуй
			       //managerOfMoving();
				   console.log(teraniposition.length);
				   console.log(teraniposition);
				   console.log(runAn);
	               document.getElementById("btz").style.display="none";
	               document.getElementById("homee").style.display="block";
	               document.getElementById("divCanvas").style.marginLeft="0px";
	               document.getElementById("divCanvas").style.width="80%";
	               document.getElementById("myCanvas").style.width="88%";
				   ctx.fillText("Press some button", 200, 50);
}

//////////////////////////////////////////////////////////////////////////////////////////Класс, который отвечает за персонажа
class Person{
	constructor(){
		this.inertionF = 0;
		this.falling = false;
		this.PersonImage = runAn;
		this.isActive = false;
        this.runFoward = false;
        this.jumpBack = false;
        this.runBack = false;
        this.fire = false;
        this.jump = false;
        this.jumpUpp = false;
		this.coordinarX = 0;
		this.coordinarxx = 35;
        this.coordinaryy = 360;
	}
	set_CurrentImage(){/*Эта функция ставит нужную картинку, в зависимости от действия.
	        Сначала она проверяет если картинка уже стоит.
			Если да - то она обнуляет координату рисования спрайта.
                    */
		//if(this.isActive === true){
		   if(this.runFoward === true){
			   if(this.PersonImage != runAn){
				   this.PersonImage = runAn;
				   this.coordinarX = 0;console.log("not work mistake is here");}}
		   if(this.runBack === true) { 
		       if(this.PersonImage != runBAn){
			       this.PersonImage = runBAn;
			       this.coordinarX = 0;}}
		   if(this.jumpBack === true){ 
		       if(this.PersonImage != jumpBAn){ 
		           this.PersonImage = jumpBAn;
		           this.coordinarX = 0;}}  
		   if(this.jump === true){
			   if(this.PersonImage != jumpAn){
				   this.PersonImage = jumpAn;
		           this.coordinarX = 0;}}
		   if(this.jumpUpp === true){
			   if(this.PersonImage != jumpAn){
				   this.PersonImage = jumpAn;
		           this.coordinarX = 0;}}
		
		   if(this.fire === true){
			   if(this.PersonImage != fire){
				   this.PersonImage = fire;
		           this.coordinarX = 0;}}
		
		
		//}
		
		/*else{
			if(this.PersonImage != runAn){
				   this.PersonImage = runAn;
				   this.coordinarX = 0;
			      
			}
		}*/
	}
	checker(){//Проверяет если персонаж совершает действие в данный момент
	if(this.runFoward === false && this.runBack === false && this.fire === false && this.jump === false && this.jumpUpp === false && this.jumpBack === false){
		this.isActive = false;
	}else{
		this.isActive = true;
    }
	
	}
	chagingX(speed ='10'){//менякт его расположение на карте
	    
		this.coordinarxx += parseInt(speed);
	}
	jumping(){
		
	    this.coordinaryy -= ((150/((tickcountJump+4)^Math.e)));
	   
        
	}
	isFaling(){
		setgGroundLine();
		  if((this.coordinaryy) < groundStand){		
			  this.falling = true;	
		  }
		  if((this.coordinaryy) >= groundStand){
			  this.falling = false;	  
			  tickountFalling = 1;
	      }
	}
	faling(){
		let res = (Math.log2(tickountFalling) *3);
		if((this.coordinaryy + res)< groundStand){
			this.coordinaryy += res;
		}
		if((this.coordinaryy + res) > groundStand){
				this.coordinaryy = groundStand;
			}
	}
	JumpUp(){
      this.coordinarX = (this.coordinarX >=  (776 - 97) ? 0 : this.coordinarX + 97);
      person.jumping();
    }
	Jumpfoward(){
  	  this.coordinarX = (this.coordinarX >=  (776 - 97) ? 0 : this.coordinarX + 97);
	  person.jumping();
      this.inertionF = 8;
      
    }
    JumpBack(){
    }
    movingBack(){
      if(this.coordinarxx < 30){
        MovemapBack(speed);
      }else{
        this.chagingX(-speed);
         }
    }
	inertionMoving(){
		if(this.inertionF > 0){
		person.movingFoward(Math.round(this.inertionF -= 2));
		console.log(this.inertionF);
		}
	}
    runingFoward(){
      if(this.coordinarxx > 400){
     	  this.coordinarX = (this.coordinarX == (1232 - 88) ? 0 : this.coordinarX + 88);
     		MovemapFoward(speed);
      }else{
     	  this.coordinarX = (this.coordinarX == (1232 - 88) ? 0 : this.coordinarX + 88);
     		this.chagingX(speed);
     	 }
    }
    fireFoward(){
	      this.coordinarX = (this.coordinarX ==  404 ? 0 : this.coordinarX + 101);
    }
    runningBack(){
      if(this.coordinarxx < 30){
        this.coordinarX = (this.coordinarX ==  0 ? 1144 : this.coordinarX - 88);
        MovemapBack(speed);
     		}else{
     	  this.chagingX(-speed);
     		this.coordinarX = (this.coordinarX ==  0 ? 1144 : this.coordinarX - 88);
     	 }
	}	 
    movingFoward(speed = '10'){
      if(this.coordinarxx > 400){
       MovemapFoward(speed);
      }else{
        this.chagingX(speed);
      }
      
    }

}
///////////////////////////////////////////////////////////////////////////////////////////Физика
function truTH(){
	
	rF = true;rB = true;mF = true;mB = true;Jb = true;J = true;Ju = true;F = true;
	
}

function managerOfMoving(){
	//console.log("расположение человека - " + person.coordinarxx + " " + person.coordinaryy);
	let mas = Terani.terraniOnScreen();
	
	
	mas.forEach((element) => {
	let obj = phisichs(element);
	if(obj.Tr == false && (obj.Td == false || obj.Tu == false)){
		rF = false;
		mF = false;
	}
	if(obj.Tl == false && (obj.Td == false || obj.Tu == false)){
		rB = false;
		mB = false;
	}
	if(obj.Tu == false && (obj.Tr == false || obj.Tl == false)){
		J = false;
		Ju = false;
	}
	if(obj.Td == false && (obj.Tr == false || obj.Tl == false)){
		F = false;
	}
    });
	moving ={rF,rB,mF,mB,J,Ju,F};	
}
function setgGroundLine(){
	let element = Terani.Iinterrani();
	
	console.log("Work ", element);
	if(element != undefined){
	   if((person.coordinaryy + 65) < element.y){
		       groundStand = ( element.y - 65);
	   }
	}else{
		       groundStand =360;
	}
	
}
function intoBlock(element){
	if((element.x - 60) <= person.coordinarxx && (element.x + 260) >= (person.coordinarxx + 65)){
		return true;
	}else{return false;}
}
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
///////////////////////////////////////////////////////////////////////////////////////////
function Info(){
	console.log(moving);
	console.log(Terani.terraniOnScreen());
}
//////////////////////////////////////////////////////////////////////////////////////////Функии логики перемещения по карте,changingXRight(),changingYUp(),changingYDown()

function MovemapFoward(speed){
	    movemapF -=speed;
		Terani.moveAllLeft(speed);

}
function MovemapBack(speed){
		movemapF +=speed;
		Terani.moveAllRight(speed);
}


//////////////////////////////////////////////////////////////////////////////////////////доп. Функии
function Random(scatter = '150'){
	return Math.floor(Math.random() * scatter);
}
//////////////////////////////////////////////////////////////////////////////////////////Рисовательные Функий
function clean(){
	     ctx.fillStyle = "#ffffff";
		 if(person.runBack == true){
		 ctx.fillRect(person.coordinarxx + 10 ,360,65,65);
		 }
		 if(person.runFoward == true){
		 ctx.fillRect(person.coordinarxx - 10 ,360,65,65);
		 }
		 if(person.jump == true){
		 ctx.fillRect(person.coordinarxx - 7 ,person.coordinaryy,65,65);
		 }
		 ctx.fillRect(person.coordinarxx,person.coordinaryy,65,65);
		 
}
function cleanUp(){
	 ctx.fillStyle = "#ffffff";
	 ctx.fillRect(person.coordinarxx,person.coordinaryy,65,65);
}


function draw(){
	     ctx.drawImage(fonPick,0,0,800,490);
		 ctx.drawImage(groundFonPick,0,0,4000,300,movemapF,movemapU,10000,150);
	     ctx.drawImage(person.PersonImage,person.coordinarX,0,88,99,person.coordinarxx,person.coordinaryy,65,65);
		 if(teraniposition.length != 0){ // Выполняем при условии если декорации существуют
			 for(let i = 0;i < teraniposition.length;i++){// Перебераем каждую из них для того, чтобы 1) - очистить предыдущее местоположение и 2)- нарисовать по новым координатам если те изменились
				  ctx.fillRect(b[i],c[i],teraniposition[i].razmer.xc,teraniposition[i].razmer.yc);
				  ctx.drawImage(ground,teraniposition[i].x,teraniposition[i].y,teraniposition[i].razmer.xc,teraniposition[i].razmer.yc);
				  b[i] = teraniposition[i].x;
				  c[i] = teraniposition[i].y;
			 }
		 }
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////Слушатели Событий фунции
function keypress(e){

   	if(In_game == false){
		  loadingg();
	   	  ctx.drawImage(fonPick,0,0,800,490);
		  ctx.drawImage(groundFonPick,0,425,10000,150);
		  In_game = true;
		  window.removeEventListener('keypress' , keypress);
		  window.onkeydown = keydown;
	      window.onkeyup = keyup;
		  gameEngineStart(gameLoop);
	}else{
		  gameLoop();
	}
}
//////////////////////////////////
function keydown(e){
	if(e.keyCode == 68){
		 person.runFoward = true;
		 person.set_CurrentImage();
	}
	if(e.keyCode == 65){
         person.runBack = true;
		 person.set_CurrentImage();
	}
	if(e.keyCode == 69){
         person.jump = true;
		 person.set_CurrentImage();
	}
	if(e.keyCode == 81){
		Info();
	}
	if(e.keyCode == 87){
		 person.jumpUpp = true;
		 person.set_CurrentImage();
	}
}
/////////////////////////////////Функии, которые возвращают все к стандартным значениям, после выполнения действия

function keyup(e){
	backall();
	gameLoop();
}
function backall(){
	person.runBack = false;
	person.runFoward = false;
	person.checker();
	person.coordinarX = 0;
    person.set_CurrentImage();
	movemapU  = 425;
	movemapF = -3000;

}
//////////////////////////////////////////////////////////////////////////////////////////Конец Функий слушателей событий
//////////////////////////////////////////////////////////////////////////////////////////Передергиватель
var reqAnfr = (function(){
return requestAnimationFrame ||
webkitRequestAnimationFrame ||
mozRequestAnimationFrame ||
oRequestAnimationFrame ||
msRequestAnimationFrame ||
function(callback){
setTimeOut(callback,1000/60);
};
})();
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////Основной игровой цикл
var gameLoop = function(){ 
	if(In_game === true){
		truTH();
       	managerOfMoving();
       if(tickcount === temp){
		 
		 cleanUp();
	   if(person.runFoward == true && moving.rF == true && (person.runBack == false && person.fire == false && person.jump == false && person.jumpUpp == false)){
	     person.runingFoward();

	   }
	   if(person.runFoward == true && moving.mF == true && (person.runBack == true || person.fire ==  true || person.jump ==  true || person.jumpUpp == true)){
		 person.movingFoward();

	   }
	   if(person.runBack == true && moving.rB == true && (person.runFoward == false && person.fire == false && person.jump == false && person.jumpUpp == false)){
	      person.runningBack();
      
	   }
	   if(person.runBack == true &&  moving.mB == true &&  (person.runFoward == true || person.fire ==  true || person.jump ==  true || person.jumpUpp == true)){
		  person.movingBack();

	   }
	   if(person.fire == true  && (person.runFoward == false && person.runBack == false && person.jump == false && person.jumpUpp == false)){
          
	   }
	   if(person.fire == true && (person.runBack == true || person.runFoward ==  true || person.jump ==  true || person.jumpUpp == true)){

	   }
	   if(person.jump == true && moving.J == true ){
		   person.Jumpfoward();
           tickcountJump +=1;
	   }
	   if(person.jump == false && person.jumpUpp == false && moving.F == true ){
		   person.isFaling();
	   }
	   if(person.jumpUpp == true && moving.Ju == true ){
		   person.JumpUp();    
		   tickcountJump +=1;
	   }
	    if(person.falling == true && moving.F == true){
			person.faling();
			tickountFalling > 79 ? tickcountFalling : tickountFalling +=1;
		}
	    
	     	tickcount =0;
	   }////////////////////////////В задержке каждый третьий раз

	    if(tickcountJump === tempJump || moving.J == false ||moving.Ju == false ){
			person.jumpBack = false;
			person.jumpUpp = false;
			person.jump = false;
     		backall();
			tickcountJump = 1;
			}
	    if(moving.F === false){
			tickcountFalling = 1;
			person.falling = false;
			 //setgGroundLine();
		}		
		
	     clean();
         Terani.manager();
		 person.inertionMoving();
	     draw();
	     tickcount += 1;



	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Игровые циклы
var gameEngineStart = function(callback){
	gameEngine = callback;
	gameEngineStep();
};
var gameEngineStep = function(){

	gameEngine();

	reqAnfr(gameEngineStep);
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Класс для Декораций
class Terani{
	constructor(){
		this.x = (800 + Random(300));
		this.y = Random(250);
	    this.razmer = {xc :  200,yc : 50};
	}
	
	movingmapFoward(speed){
		  this.x -=speed;

	}
	movingmapBack(speed){
		console.log(this.x + " " + speed);
		  this.x += parseInt(speed);

	}
	movingmapUp(speed){
		this.y +=speed;

	}
	static manager(){
		
		//console.log(teraniposition.length + "fff");
		if(teraniposition.length === 0){
			console.log(teraniposition);
			teraniposition.push(new Terani());
		}else if(teraniposition.length < 12 && teraniposition[(teraniposition.length - 1)].x <= 550){
			//console.log('f');
			teraniposition.push(new Terani());
		}
		//console.log(teraniposition + "  predposlednya");
	}
	static moveAllLeft(speed = '10'){
	    if(teraniposition.length != 0){
                for(let i = 0; i < teraniposition.length; i ++){
				    teraniposition[i].movingmapFoward(speed);
					if(teraniposition[i].x < -500){
						teraniposition.splice(0,1);
					}
				}
	    }
	}
	static moveAllRight(speed = '10'){
	    if(teraniposition.length != 0){
			for(let i = 0; i < teraniposition.length; i ++){
			console.log("Working");
		      teraniposition[i].movingmapBack(speed);
			}
	    }
    }
	static terraniOnScreen(){
	     var teraniOnScreen = teraniposition.filter(function(element) {
         return ((element.x + 200) > 0 && element.x < 550);
		 });
       return teraniOnScreen;
    }
	static Iinterrani(){
	 let result = 200;
	 let a,b;
	 
     let teraniOnMe = teraniposition.filter(function(element) {
     return ((element.x - 60) <= (person.coordinarxx) && (element.x + 260) >= (person.coordinarxx + 65));
  });
      teraniOnMe.forEach((element,i) => {
		  a = Math.abs(((element.x + element.x + 200)/2) - ((person.coordinarxx + person.coordinarxx + 65)/2));
		 if(result > a){
			 result = a;
			 b = element;
		 }	 		 
	  });
	  
     return b;
   }
}