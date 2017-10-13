

$(document).ready(function(){

	$("#Personnages .personnage").hover(function(){
    	console.log("hover" ); 
    	$(this).css("background-color", "#145063");
    	}, 
    	function(){
    	$(this).css("background-color","grey");
    });

	/*$("p").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    }); */

});