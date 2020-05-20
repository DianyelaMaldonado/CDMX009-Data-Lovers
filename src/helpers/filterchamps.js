import { championDetail } from './championdetail.js';

function filterChamps() {
    let html3 = "";
    let filteredChamps = "";
    const champsToFilter = Object.entries(window.champions);
    let filterButtons = document.querySelectorAll(".filter");
    for (const filterButton of filterButtons) {
        filterButton.addEventListener('click', function() {
            html3 = "";
            let championType = this.getAttribute("data-type");
            if (championType == "All") {
                filteredChamps = champsToFilter;
            } else {
                filteredChamps = champsToFilter.filter(function(item) {
                    let tags = item[1]["tags"];
                    return tags.includes(championType);
                });

            }

            for (let key in filteredChamps) {
                let data_champion = filteredChamps[key][1];
                html3 += `<div class="tarjeta-wrap">
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
            cardsprueba.innerHTML = html3;
            championDetail();
        });
    }
}
export { filterChamps }