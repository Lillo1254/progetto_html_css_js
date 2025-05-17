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
    positionDiv.classList.add("col-12" , "col-md-5" , "col-lg-3")
    positionDiv.innerHTML = `
       <div class="card" style="width: 18rem;">
     <img src="https://picsum.photos/${300 + idvini[i]}" class="card-img-top" alt="...">
     
     <div class="card-body">
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




})