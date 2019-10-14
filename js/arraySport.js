var sportsArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle","voetbal", "atletiek", "ballet", "dansen", "rugby", "e-sport", "schaken", "paardrijden", "skaten", "mountenbike", "boksen", "zwemmen", "badminton"];
var balsportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "rugby"];
var geenBalsportArray = ["atletiek", "ballet", "dansen", "e-sport", "schaken", "paardrijden", "skaten", "mountenbike", "boksen", "zwemmen", "badminton"];

var sportKeuze = document.getElementById("sportKeuze");
var btnBalsport = document.getElementById("btnBalsport");
var btnGeenBalsport = document.getElementById("btnGeenBalsport");

//functie uitvoeren wanneer de pagina volledig is geladen
window.onload = willekeurigeSportKiezen(); 
    
    function willekeurigeSportKiezen() {
    // een willekeurig kiezen tussen 0 en de lengte van de sportsArray(0-18)
    let random = Math.floor(Math.random() * sportsArray.length); 
    //willekeurig element uit sportsArray in sportKeuze plaatsen
    sportKeuze.innerHTML = sportsArray[random];
}

btnBalsport.addEventListener("click", function(){
    // de sport uit het element sportKeuze eruithalen
    let sport= sportKeuze.innerHTML;
    //variabele om bij te houden of we juist hebben gekozen
    let juistGekozen= false;
    //doorlopen van heel de balSporArray
    for (var i = 0; i < balsportArray.length; i++){
        //elk element uit de balsportArray controleren tov de sport die in Sportkeuze staat
        if(sport === balsportArray[i]) {
            //we hebben juist gekozen
            juistGekozen = true;
        }
    }
    if(juistGekozen){
                    //pop-up om te laten weten dat we goed hebben gekozen
            alert("Goed zo!")
    }
    else {
        alert("Probeer opnieuw!")
    }
    willekeurigeSportKiezen();
});

btnGeenBalsport.addEventListener("click", function() {
    // de sport uit het element sportKeuze eruithalen
    let sport= sportKeuze.innerHTML;
    //variabele om bij te houden of we juist hebben gekozen
    let juistGekozen= false;
    //doorlopen van heel de balSporArray
    for (var i = 0; i < geenBalsportArray.length; i++){
        //elk element uit de balsportArray controleren tov de sport die in Sportkeuze staat
        if(sport === geenBalsportArray[i]) {
            //we hebben juist gekozen
            juistGekozen = true;
        }
    }
    if(juistGekozen){
                    //pop-up om te laten weten dat we goed hebben gekozen
            alert("Goed zo!")
    }
    else {
        alert("Probeer opnieuw!")
    }
    willekeurigeSportKiezen();
});