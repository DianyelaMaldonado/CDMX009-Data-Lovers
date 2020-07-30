function cargarJSONdos(nombreCampeon) {
    let onlyChampion = document.querySelector('#onlyChampion');
    fetch('https://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion/' + nombreCampeon + '.json')
        .then(res2 => {
            return res2.json()
        })
        .then(function(result_json2) {
            let html2 = "";
            let data_avat = result_json2.data[nombreCampeon];
            html2 += ` <div class="contentChampionInfo">
                        <div>
                        <div class="imgprincipal">
                          <img class="ImgChampionInfo" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nombreCampeon}_0.jpg" alt="">
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

export { cargarJSONdos }