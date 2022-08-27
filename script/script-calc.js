function clearScreen() {
    document.getElementById("result").value = "";
}

function display(val) {
    document.getElementById("result").value += val;
}

function calculate() {
    var result;

    result = eval(document.getElementById("result").value)

    document.getElementById("result").value = (result);
}

document.addEventListener("keydown", function(event) {
    if(event.keyCode==13){
        calculate();

    }else if(event.keyCode==8){
        clearScreen();
    }else if (event.keyCode == 12){
        document.getElementById("result").value+=event.key;
    }

    console.log(event);
})