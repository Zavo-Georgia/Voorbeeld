var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function() {
    let getal = getRandomInt(1, 6);
    let image = document.createElement("img");
    
   /* if (getal === 1){
        image.src = "../img/1.gif";
    }    
    else if (getal === 2){
        image.src = "../img/2.gif";
    }    
    else if (getal === 3){
        image.src = "../img/3.gif";
    }    
    else if (getal === 4){
        image.src = "../img/4.gif";
    }    
    else if (getal === 5){
        image.src = "../img/5.gif";
    }    
    else if (getal === 6){
        image.src = "../img/6.gif";
    }*/
    
    switch(getal){
        case 1:
            image.src = "../img/1.gif";
            break;        
        case 2:
            image.src = "../img/2.gif";
            break;        
        case 3:
            image.src = "../img/3.gif";
            break;        
        case 4:
            image.src = "../img/4.gif";
            break;        
        case 5:
            image.src = "../img/5.gif";
            break;        
        case 6:
            image.src = "../img/6.gif";
            break;
    }
    
    uitvoerDobbelsteen.innerHTML = "";
    uitvoerDobbelsteen.append(image);
})

//functie om een willekeurig getal te verkijgen tussen min en max. min en max zijn parameters die worden meegegeven wanneer de functie wordt aangeroepen
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}