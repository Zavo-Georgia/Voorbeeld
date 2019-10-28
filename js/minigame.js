//objecten met eigenschappen
var persoon1 = {
    naam: "Luigi",
    levens: 10,
    snelheid: 5,
    aanval: 3,
    image: "../img/Luigi-PNG-File.png"
}
var persoon2 = {
    naam: "Mario",
    levens: 7,
    snelheid: 7,
    aanval: 5,
    image: "../img/Mario-PNG-File.png"
}
var persoon3 = {
    naam: "Naruto",
    levens: 8,
    snelheid: 4,
    aanval: 6,
    image: "../img/naruto.png"
}
//objecten in een lijst zetten (geen aanhalingstekens!!!)
var personen = [persoon1, persoon2, persoon3];

var imgPersoon1 = document.getElementById("imgPersoon1");
var imgPersoon2 = document.getElementById("imgPersoon2");

var selector1 = document.getElementById("selector1");
var selector2 = document.getElementById("selector2");
    
var levens1 = document.getElementById("levens1");
var levens2 = document.getElementById("levens2");

imgPersoon1.src = persoon1.image;
imgPersoon2.src = persoon2.image;
imgPersoon1.value = persoon1.naam;
imgPersoon2.value = persoon2.naam;
levens1.innerHTML = persoon1.levens;
levens2.innerHTML = persoon2.levens;

window.onload = function () {
    for (var i = 0; i < personen.length; i++) {
        //optie-element toevoegen aan select-element
        let optiePersoon = document.createElement("option");
        optiePersoon.innerHTML = personen[i].naam;
        optiePersoon.value = personen[i].naam;
        
        //optie-element op "geselecteerd" instellen
        if(imgPersoon1.value === personen[i].naam) {
            optiePersoon.setAttribute("selected", true);
        }
        selector1.appendChild(optiePersoon);
    }
        for (var i = 0; i < personen.length; i++) {
        let optiePersoon = document.createElement("option");
        optiePersoon.innerHTML = personen[i].naam;
        optiePersoon.value = personen[i].naam;
         
        if(imgPersoon2.value === personen[i].naam) {
            optiePersoon.setAttribute("selected", true);
        }
        selector2.appendChild(optiePersoon);
    }
}
//eventlistener voor het veranderen van een element
selector1.addEventListener("change", function (){
    //this verwijst naar selector1
    changeImage(this.value, 1);
});
selector2.addEventListener("change", function (){
    //this verwijst naar selector2
    changeImage(this.value, 2);
});

function changeImage(naam, selector){
    for(var i = 0; i < personen.length; i++) {
        if(naam === personen[i].naam) {
            if(selector === 1) {
                imgPersoon1.src = personen[i].image;
                imgPersoon1.value = personen[i].naam;
                levens1.innerHTML = personen[i].levens;
            }
            else {
                imgPersoon2.src = personen[i].image;
                imgPersoon2.value = personen[i].naam;
                levens2.innerHTML = personen[i].levens;

            }
        }
    }
};





