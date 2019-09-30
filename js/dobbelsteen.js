var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function() {
    let getal = getRandomInt(1, 6);
    console.log(Math.round(Math.random() * 10));
})


function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min+1)) +min
}