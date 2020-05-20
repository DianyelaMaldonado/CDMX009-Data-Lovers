import { championDetail } from './championdetail.js';
import { filterChamps } from './filterchamps.js';

function cargarJSON() {
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/champion.json')
        .then(res => {
            return res.json()
        })
        .then(function(result_json) {
            let html = '';
            let champions = result_json.data;
            window.champions = champions;
            for (let champion in champions) {
                let data_champion = champions[champion];

                html += `<div class="tarjeta-wrap">
                            <div class="tarjeta" data-nombre="${data_champion['id']}">
                                    <div class="adelante card1">
                                         <h2>${data_champion['name']}</h2>
                                         <img class="img-fluid" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data_champion['id']}_0.jpg" alt="">
                                    </div>
                                   <div class="atras">
                                 <p class="card-text">#${data_champion['blurb']}</p>
                             </div>
                            </div>
                        </div>
                    `;
            }
            cardsprueba.innerHTML = html;
        })
        .then(function() {
            championDetail();
        })
        .then(function() {
            filterChamps();
        })
}

export { cargarJSON }