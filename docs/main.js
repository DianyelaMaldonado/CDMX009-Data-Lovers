function back() {
    let buttonBack = document.getElementById("buttonback");
    buttonBack.onclick = function() {
        document.getElementById("onlyChampion").innerHTML = "";
    }
}

let buttonnext = document.getElementById("next");
let buttonprev = document.getElementById("prev");
var encounter = document.querySelector("div#sliderall div#contentslider ul#sliderlist li#one img");
var nextimage = 1;
var previmage = 7;
var slider = new Array();
slider[0] = "imagenes/Emblem_Challenger8.png";
slider[1] = "imagenes/Emblem_Grandmaster7.png";
slider[2] = "imagenes/Emblem_Master6.png";
slider[3] = "imagenes/Emblem_Diamond5.png";
slider[4] = "imagenes/Emblem_Gold4.png";
slider[5] = "imagenes/Emblem_Silver3.png";
slider[6] = "imagenes/Emblem_Bronze2.png";
slider[7] = "imagenes/Emblem_Iron1.png";
var total = slider.length - 1;


buttonnext.onclick = function() {
    //console.log(encounter);
    encounter.src = slider[nextimage];
    // nextimage vale 1
    if (nextimage == total) {
        nextimage = 0;
    } else {
        nextimage++;
    }
    if (previmage == total) {
        previmage = 0;
    } else {
        previmage++;
    }
}

buttonprev.onclick = function() {
    encounter.src = slider[previmage];
    if (previmage == 0) {
        previmage = total;
    } else {
        previmage--;
    }
    if (nextimage == 0) {
        nextimage = total;
    } else {
        nextimage--;
    }
}