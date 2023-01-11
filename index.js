const url = "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome";

const parede = document.querySelector("#box");


async function getData(link) {
    const Data = await fetch(link);
    const DataJson = await Data.json();
    return DataJson.dados;
}

async function mainFunction() {
    const result = await getData(url);
    for (let a = 0; a < 30; a++) {
        let img = document.createElement("img");
        let div = document.createElement("div");
        let name = document.createElement("h6");
        img.src = result[a].urlFoto;
        img.className = "foto_deputado";
        div.className = "card_deputado";
        div.appendChild(img);
        parede.insertAdjacentElement("afterbegin",div);
    }
}

mainFunction()
