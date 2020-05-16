$(function() {

   
var estado=1;
var vol=1;
	$("#volque").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    
    $("#luces").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    apaga:[0],
            prende: [1],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
        $("#platon").animateSprite({
		fps: 12,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            levanta: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            vuelve: [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,7,5,4,3,2,1,0],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });

//------------------------
//- Programacion Botones -
//------------------------
    
	$("#b_stop").on("click",function(){
    	vol=0;
        $("#volque").animateSprite('stop');
            $("#luces").animateSprite('stop');
            $("#platon").animateSprite('stop');
    });
//-------------
    $("#b_play").on("click",function(){
    	vol=1;
         $("#volque").animateSprite('play', 'camina');
		
	});
       $("#b_luces").on("click",function(){
    	estado++;
           if(estado%2==0){
         $("#luces").animateSprite('play', 'prende');
           }
           else{
                $("#luces").animateSprite('play', 'apaga');
           }
		
	});
    
       $("#b_platon1").on("click",function(){
           if(vol==0){
            $("#platon").animateSprite('play', 'levanta');
           }
           	});
      $("#b_platon2").on("click",function(){
           if(vol==0){
            $("#platon").animateSprite('play', 'vuelve');
           }
           	});
    
    $("#b_reinicia").on("click",function(){
    vol=0;
        $("#luces").animateSprite('play', 'apaga');
        $("#volque").animateSprite('play', 'inicio');
        $("#platon").animateSprite('play', 'inicio');
    });
//-------------	



});