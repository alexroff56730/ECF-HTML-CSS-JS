var result_final;

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

function contact_send() {
    var name = document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    var mail = document.getElementById('mail').value;
    var msg = document.getElementById('msg').value;
    var notifContact = document.getElementById('notif-contact');

    if(name != '' && fname != '' && mail != '' && msg != '') {
        notifContact.style.visibility = 'visible';
        notifContact.innerText = 'message envoyé';
    } else {
        notifContact.style.visibility = 'visible';
        notifContact.style.backgroundColor = '#a04747';
        notifContact.innerText = "un des champs n'est pas renseigné !";
    }
}

function resetNotif(elemClick) {
    elemClick.style.visibility = 'hidden';
}

