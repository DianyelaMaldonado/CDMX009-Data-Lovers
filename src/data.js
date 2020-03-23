document.addEventListener("DOMContentLoaded", function() {
    var cardsprueba = document.querySelector('#cardsprueba');
    cargarJSON();
});

function cargarJSON() { //esta función hace la conexión y definimos como queremos que los devuleva, ya sea como texto JSON u otros metodos


    .then(res => {
            return res.json()
        }) //indicamos que queremos un json
        //como en el return de arriba le decimos que queremos un json,aquí lo que hace es formatearlo y darnos este resultado
        .then(function(result_json) {
            let html = '';
            let champions = result_json.data;
            window.champions = champions;
            for (var champion in champions) {

                let data_champion = champions[champion];

                html += `<div class="tarjeta-wrap">
                            <div class="tarjeta" data-nombre="${data_champion['id']}">
                                    <div class="adelante card1">
                                         <h2>${data_champion['name']}</h2>
                                         <img class="img-fluid" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data_champion['id']}_0.jpg" alt="">
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

function cargarJSONdos(nombreCampeon) {
    let onlyChampion = document.querySelector('#onlyChampion');
    fetch('http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion/' + nombreCampeon + '.json')
        .then(res2 => {
            return res2.json()
        })
        .then(function(result_json2) {
            let html2 = "";
            let data_avat = result_json2.data[nombreCampeon];
            html2 += ` <div class="contentChampionInfo">
                        <div>
                        <div class="imgprincipal">
                          <img class="ImgChampionInfo" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nombreCampeon}_0.jpg" alt="">
                          <div class="sobrelaimagen">
                             <div class="nametitle">
                            <h2 class="positionName">${data_avat['name']}</h2>
                            </div>

                            <div class="positionRol">
                                 <p class="tags">${data_avat['tags']}</p>
                                 </div>
                            <div class="positionTitle">
                                  <p class="title">${data_avat['title']}"</p>
                            </div>
                            </div>
                           <div class="sombra"></div>
                          </div>
                  </div>
                 <div class="listahabilidades">
                      <p class="infohabilidades">ABILITIES</p>
                      <ul>
                         <li class="attack">
                              <img class="imghab" src="imagenes/atacke.png" alt="">
                              <p>Attak ${data_avat['info'].attack}</p>
                          </li>
                          <li class="defense">
                              <img class="imghab" src="imagenes/escudo.png" alt="">
            <p>defense ${data_avat['info'].defense} </p>
                  </li>
                         <li class="magic">
                              <img class="imghab" src="imagenes/maguc.png" alt="">
                              <p>magical ${data_avat['info'].magic}</p>
                          </li>
                         <li class="difficulty">
                              <img class="imghab" src="imagenes/flame.png" alt="">
                              <p>difficulty ${data_avat['info'].difficulty}</p>
                          </li>
                      </ul>
                 </div>   
                 <div class="bioLoreBlurb">
                      <p class="lore"> ${data_avat['lore']}</p>
                  </div>

                  <button id="buttonback" class="buttonchamps">COME BACK</button>
                       </div> `;

            onlyChampion.innerHTML = html2;

        }).then(function() {
            window.scrollTo(0, 0);
        })

    .then(function() {
        back();
    })
}

function filterChamps() {
    var html3 = "";
    const champsToFilter = Object.entries(window.champions);
    var filterButtons = document.querySelectorAll(".filter");
    for (const filterButton of filterButtons) {
        filterButton.addEventListener('click', function() {
            html3 = "";
            championType = this.getAttribute("data-type");
            if (championType == "All") {
                filteredChamps = champsToFilter;
            } else {
                filteredChamps = champsToFilter.filter(function(item) {
                    tags = item[1]["tags"];
                    return tags.includes(championType);
                });

            }

            for (var key in filteredChamps) {

                let data_champion = filteredChamps[key][1];

                html3 += `<div class="tarjeta-wrap">
                            <div class="tarjeta" data-nombre="${data_champion['id']}">
                                    <div class="adelante card1">
                                         <h2>${data_champion['name']}</h2>
                                         <img class="img-fluid" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data_champion['id']}_0.jpg" alt="">
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

function championDetail() {
    let callcard = document.querySelectorAll(".tarjeta");
    callcard.forEach(function(card) {
        card.onclick = function() {
            cargarJSONdos(this.getAttribute("data-nombre"));
        }
    });
}