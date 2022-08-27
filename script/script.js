var result_final;
document.getElementById('champs_result').style.visibility = "hidden";

function tp(elem) {
    var val = elem.value;
    console.log(val);
    resultTP = "";

    if(val == 0) {
        resultTP="erreur";
    } else if (val == 1) {
        resultTP = 10;
    } else if(val == 2) {
        resultTP = 20;
    } else if(val == 3) {
        resultTP = 30;
    }
}

function Outils(elem) {
    var val = elem.value;
    console.log(val);
    resultOutils = "";

    if(val == 0) {
        resultOutils = "erreur";
    } else if (val == 1) {
        resultOutils = 10;
    } else if(val == 2) {
        resultOutils = 20;
    } else if(val == 3) {
        resultOutils = 30;
    } else if(val == 4) {
        resultOutils = 35;
    }
}

function timing(elem) {
    var val = elem.value;
    console.log(val);
    resultTiming = "";

    if(val == 0) {
        resultTiming = "erreur";
    } else if (val == 1) {
        resultTiming = 10;
    } else if(val == 2) {
        resultTiming = 20;
    } else if(val == 3) {
        resultTiming = 30;
    }
}

function send() {
    if(resultTP != "erreur" || resultOutils != "erreur" || resultTiming != "erreur") {
        result_final = eval((resultTP + resultOutils) * resultTiming);
        document.getElementById('resultat').innerText="Prix total = " + result_final + "€";
        document.getElementById('champs_result').style.visibility = "visible";
    } else {
        console.log("erreur");
    } 
}

