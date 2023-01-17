const url = "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome";

const parede = document.querySelector("#box");


async function getData(link) {
    const Data = await fetch(link);
    const DataJson = await Data.json();
    console.log(DataJson.dados);
    return DataJson.dados;
}

async function mainFunction() {
    const result = await getData(url);
    for (let a = 0; a < 100; a++) {
        let img = document.createElement("img");
        let div = document.createElement("div");
        let name = document.createElement("h5");
        let partido = document.createElement("h6")
        img.src = result[a].urlFoto;
        name.innerHTML = result[a].nome;
        partido.innerHTML = result[a].siglaPartido;
        img.className = "foto_deputado";
        div.className = "card_deputado";
        div.setAttribute("id",result[a].id);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(partido);
        console.log(div)
        parede.insertAdjacentElement("afterbegin",div);
    }
    let cards = document.querySelectorAll(".card_deputado");
    for (let c = 0; c < cards.length; c++){
        let element = cards[c];
        element.addEventListener("click", () => {
            let elementId = element.id;
            console.log(elementId);
        })
    }
}


mainFunction()

