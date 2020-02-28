  function slowScroll(id){
	  var obj = document.querySelector(id);
	  
	  var target = obj.getBoundingClientRect().top;
	  target -= 150;
    window.scrollTo({
		top: target,
	    behavior:"smooth"
  });
  
}
 function slowScrol(id){
	     $('html,body').animate({
		 scrollTop: $(id).offset().top - 125
		 },500);
		 console.log($(id).offset().top);
	   }
function onscren(id){
	  var obj = document.querySelector(id);
	  var target = obj.getBoundingClientRect().top();
	   console.log(target);
}
	   $(document).on("scroll", function(){
	   if($(window).scrollTop() === 000){
	     $("header").removeClass("fixed");}
		  else{
		 $('header').attr("class", "fixed");}	
	   if($(window).scrollTop() >= ($('#centra').offset().top - 132)){
	     $("header").removeClass("fixed");
		 $("header").attr("class", "fixedd");}
	   
		 });
		 var objDiv = document.getElementById("centra");
            objDiv.scrollTop = objDiv.scrollHeight;
		
		     console.log(objDiv.scrollHeight);