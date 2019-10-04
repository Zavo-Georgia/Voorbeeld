//html-elementen in variabelen steken
var inputCurrency = document.getElementById("inputCurrency");
var btnCurrency = document.getElementById("btnCurrency");
var uitvoerCurrency = document.getElementById("uitvoerCurrency");
var currencySelector = document.getElementById("currencySelector");

// event listener toevoegen aan een knop , klikken op de knop
btnCurrency.addEventListener("click", function(){
    //hoeveelheid uit input halen
    let geld = parseInt(inputCurrency.value); 
    // eenheid uit select halen
    let currency = currencySelector.value;
    //resultaat berekenen met functie met parameters
    let resultaat = calculateCurrency(geld, currency);
    // p-element aanmaken
    let zin = document.createElement("p");
    // tekst aanmaken
    let tekst = "&euro; " + geld + " is " + resultaat;
    
    //p-element invullen met tekst
    zin.innerHTML = tekst;
    //p-element als child toevoegen aan uitvoer
    uitvoerCurrency.appendChild(zin);
});

//functie om euro te berekenen naar een andere eenheid, aantal en eenheid wordt meegegeven met de functie
function calculateCurrency(aantal, eenheid){
        // variable om resultaat in op te slaan
        let resultaat;
        //switch om te controleren welke eeneheid werd gekozen
        switch(eenheid){
            // cases bij bepaalde gekozen eenheid
            case "yen":
                //berekening van euro naar eenheid
                resultaat = "&#165;" + aantal * 117.222;
                //stoppen van de switch
                break;
            case "dollar":
                resultaat = "&#36;" + aantal * 1.0985;
                break;
            case "won":
                resultaat = "&#65510;" + aantal * 1314.49;
                break;
            case "yuan":
                resultaat = "&#20803;" + aantal * 7.8535;
                break;
        }
        
    return resultaat;
}