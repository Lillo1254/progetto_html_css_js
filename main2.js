// questo sara il foglio js per pagina shop
fetch("./dati.json").then( (response)=> response.json() ).then( (data)=> {



    let nomivini = data.map((vino)=>{
        return vino.nome;
    })

console.log(nomivini);
    let tipovini = data.map((vino)=>{
        return vino.tipo;
    })
// console.log(tipovini)

    let uvaggivini = data.map((vino)=>{
        return vino.uvaggio;
    })
// console.log(uvaggivini)


 let descriptionvini = data.map((vino)=>{
        return vino.descrizione;
    })
// console.log(descriptionvini)

let prezzonvini = data.map((vino)=>{
        return vino.prezzo;
    })
// console.log(prezzonvini)

let idvini = data.map((vino)=>{
        return vino.id;
    })
// console.log(idvini);


let createCard = document.querySelector("#card-shop") 

for (let i = 0; i < data.length; i++) {
    let dataarray = data[i];
    let positionDiv = document.createElement("div")
    positionDiv.classList.add("col-12" , "col-md-5" , "col-lg-3", "d-flex", "justify-content-center", "pb-4")
    positionDiv.innerHTML = `
       <div class="card" style="width: 18rem;">
     <img src="https://picsum.photos/${300 + idvini[i]}" class="card-img-top" alt="...">
     
     <div class="card-body bg-semi">
       <h5 class="card-title">${nomivini[i]}</h5>
            <p class="card-text">${uvaggivini[i]}</p>
              <p class="card-text">${descriptionvini[i]}</p>
                <p class="card-text">${prezzonvini[i]}</p>

       <a href="#" class="btn btn-primary">Clicca e Ordina</a>

     </div>
   </div>
   `
    createCard.appendChild(positionDiv)



    // console.log(`${dataarray.nome}`)
}

// filtri


creaFiltriEDom(data); 

function creaFiltriEDom(vini) {
  let tipi = [...new Set(vini.map(v => v.tipo))];
  let uvaggi = [...new Set(vini.map(v => v.uvaggio))];

  let tipoFilterDiv = document.getElementById('tipo-filter');
  let uvaggioFilterDiv = document.getElementById('uvaggio-filter');
  let prezzoFilterDiv = document.getElementById('prezzo-filter');


  tipi.forEach(tipo => {
    let label = document.createElement('label');
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'tipo';
    radio.value = tipo;
    radio.addEventListener('change', filtra);
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + tipo));
    tipoFilterDiv.appendChild(label);
    tipoFilterDiv.appendChild(document.createElement('br'));
  });

  uvaggi.forEach(uvaggio => {
    let label = document.createElement('label');
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'uvaggio';
    radio.value = uvaggio;
    radio.addEventListener('change', filtra);
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + uvaggio));
    uvaggioFilterDiv.appendChild(label);
    uvaggioFilterDiv.appendChild(document.createElement('br'));
  });

  let fascePrezzo = [
    { label: '< 40€', min: 0, max: 39 },
    { label: '40 - 70€', min: 40, max: 70 },
    { label: '> 70€', min: 71, max: 1000 }
  ];

  fascePrezzo.forEach((fascia, index) => {
    let label = document.createElement('label');
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'prezzo';
    radio.value = index;
    radio.addEventListener('change', filtra);
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + fascia.label));
    prezzoFilterDiv.appendChild(label);
    prezzoFilterDiv.appendChild(document.createElement('br'));
  });
}

function filtra() {
  let tipoSelezionato = document.querySelector('input[name="tipo"]:checked')?.value;
  let uvaggioSelezionato = document.querySelector('input[name="uvaggio"]:checked')?.value;
  let prezzoSelezionato = document.querySelector('input[name="prezzo"]:checked')?.value;

  let filtrati = data;

  if (tipoSelezionato) {
    filtrati = filtrati.filter(v => v.tipo === tipoSelezionato);
  }

  if (uvaggioSelezionato) {
    filtrati = filtrati.filter(v => v.uvaggio === uvaggioSelezionato);
  }

  if (prezzoSelezionato !== undefined) {
    let fascePrezzo = [
      { min: 0, max: 39 },
      { min: 40, max: 70 },
      { min: 71, max: 1000 }
    ];
    let { min, max } = fascePrezzo[prezzoSelezionato];
    filtrati = filtrati.filter(v => v.prezzo >= min && v.prezzo <= max);
  }

  aggiornaCards(filtrati);
}


function aggiornaCards(viniFiltrati) {
  let container = document.querySelector("#card-shop");
  container.innerHTML = '';

  viniFiltrati.forEach(vino => {
    let div = document.createElement("div");
    div.classList.add("col-12", "col-md-5", "col-lg-3", "d-flex", "justify-content-center", "pb-4");
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/${300 + vino.id}" class="card-img-top" alt="...">
        <div class="card-body bg-semi">
          <h5 class="card-title">${vino.nome}</h5>
          <p class="card-text">${vino.uvaggio}</p>
          <p class="card-text">${vino.descrizione}</p>
          <p class="card-text">${vino.prezzo}€</p>
          <a href="#" class="btn btn-primary">Clicca e Ordina</a>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}





})