/*import { example } from './data.js';
    console.log(example);*/



function back() {
    let buttonBack = document.getElementById("buttonback");
    buttonBack.onclick = function() {
        document.getElementById("onlyChampion").innerHTML = "";
    }
}