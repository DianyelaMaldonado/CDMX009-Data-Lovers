import { cargarJSONdos } from './cargarjsontwo.js';

function championDetail() {
    let callcard = document.querySelectorAll(".tarjeta");
    callcard.forEach(function(card) {
        card.onclick = function() {
            cargarJSONdos(this.getAttribute("data-nombre"));
        }
    });
}

export { championDetail }