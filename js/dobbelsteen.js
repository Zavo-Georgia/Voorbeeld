var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function() {
    let getal = getRandomInt(1, 6);
    
    uitvoerDobbelsteen.innerHTML = getal;
})


function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}