

jQuery(document).ready(function(){

	$(".Personnages .personnage").hover(function(){
    	console.log("hover", $(this).children("img").attr("alt")); 
    	$(this).css("background-color", "#145063");
    	}, 
    	function(){
    	$(this).css("background-color","");
    });

	/*$("p").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    }); */

    $.get( "https://swapi.co/api/people/1/?format=json", function( data ) {
  $( ".result" ).html( data ),data.name;
  console.log( "Load was performed,", "data.name = ", data.name );
  $("#Dynamique h2").text(data.name);
});

});