

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

    $.get( "https://swapi.co/api/people/1/?format=json", function( data ) { //Affichage du nom
        $( ".result" ).html( data ),data['name']; //Marche aussi avec data.name
        console.log( "Load was performed,", "data.name = ", data['name'] );
        $("#Dynamique h2").text(data.name); 
    });


    https://swapi.co/api/people/?format=json

    $.get("https://swapi.co/api/people/?format=json", function( data) {
        //$(".result").html(data), data['results'];
        console.log("Loading all names =" );
        //console.log(data['results']) = Liste de tout les personnages 
        //console.log(data['results']['0']); //Liste des détails d'un personnage (0)
        for (elm in data['results']) {
            console.log(data['results'][elm].name);
        }
    });

});