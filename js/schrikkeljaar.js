var inputSchrikkeljaar = document.getElementById("inputSchrikkeljaar");
var btnSchrikkeljaar = document.getElementById("btnSchrikkeljaar");
var uitvoerSchrikkeljaar = document.getElementById("uitvoerSchrikkeljaar");

btnSchrikkeljaar.addEventListener("click", function(){
    let jaartal = inputSchrikkeljaar.value;
    let tekst = "het jaar " + jaartal + " is ";
    if (jaartal % 4 !== 0){
        // niet deelbaar door 4
        tekst += "geen schrikkeljaar";
    }
    else {
        //wel deelbaar door 4
        if(jaartal % 100 !== 0){
            //wel deelbaar door 4 maar nier door 100
            tekst += "een schrikkeljaar";
        }
        else {
            // wel deelbaar door 4 en ook door 100
            if(jaartal % 400 ===0){
                tekst += "een schrikkeljaar";
            }
            else {
                //deelbaar door 4 en 100 maar niet door 400
                tekst += "geen schrikkeljaar";
            }
        }
    }
    uitvoerSchrikkeljaar.innerHTML= tekst;
});
    
    
