document.addEventListener("DOMContentLoaded", function() {
    cargarJSON();
});

//document.getElementById('onlyChampion').addEventListener('click', cargarJSONdos);

function cargarJSON() { //esta función hace la conexión y definimos como queremos que los devuleva, ya sea como texto JSON u otros metodos
    let cardsprueba = document.querySelector('#cardsprueba');
    fetch('http://localhost:5000/data/lol/lol.json')
        .then(res => {
            return res.json()
        }) //indicamos que queremos un json
        //como en el return de arriba le decimos que queremos un json,aquí lo que hace es formatearlo y darnos este resultado
        .then(function(result_json) {
            let html = '';
            //let card = '';
            //let x = 1;
            let champions = result_json.data;
            for (var champion in champions) {
                //if (x <= 2) {}
                let data_champion = champions[champion];
                //console.log(data_champion['name']);
                html += `<div class="tarjeta-wrap">
                            <div class="tarjeta" data-nombre="${data_champion['id']}">
                                    <div class="adelante card1">
                                         <h2>${data_champion['name']}</h2>
                                         <img class="img-fluid" src="${data_champion['splash']}" alt="">
                                    </div>
                                   <div class="atras">
                                 <p class="card-text">#${data_champion['blurb']}</p>
                             </div>
                            </div>
                        </div>
                    `;
                //x++;
            }
            cardsprueba.innerHTML = html;
            //console.log(html);
        })
        .then(function() {
            let callcard = document.querySelectorAll(".tarjeta");
            callcard.forEach(function(card) {
                card.onclick = function() {
                    //console.log(card);
                    // var image = c.getElementByTagName('img').getAttribute("src");
                    //console.log(this.getAttribute("nombre"));

                    cargarJSONdos(this.getAttribute("data-nombre"));

                    //console.log(this);
                }

            });
        })

}

//cargarJSON.appendChild = cargarJSONdos;

function cargarJSONdos(nombreCampeon) {
    let onlyChampion = document.querySelector('#onlyChampion');
    fetch('http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion/' + nombreCampeon + '.json')
        .then(res2 => {
            return res2.json()
        })
        .then(function(result_json2) {
            //console.log(result_json2);
            let html2 = "";
            let data_avat = result_json2.data[nombreCampeon];
            // console.log(data_avat);
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

            //console.log(html2);
            onlyChampion.innerHTML = html2;

        }).then(function() {
            window.scrollTo(0, 0);
        })

    .then(function() {
        back();
    })

}