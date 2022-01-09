var input = document.querySelector("#input");
var nb = Math.floor(1000*Math.random());  // modif la Valeur si vous voulez que le jeux soit plus compliqué
input.addEventListener(play);

function play(event){
        if(input.value != nb && input.value != null){
            if (input.value < nb){
                console.log('Numero non trouver (plus grand)')
                document.querySelector("p").innerHTML="C'est plus ";
                document.querySelector("p").style.color = "#ffff";
            }
            else{
                console.log('Numero non trouver (plus petit)')

                document.querySelector("p").innerHTML="C'est moins";
                document.querySelector("p").style.color = "#ffff";
        }
    }
        else{
            console.log('Numero trouver')
            document.querySelector("p").innerHTML="C'est gagné !!";
            document.querySelector("p").style.color = "#4CD30C";
    }
    
}