const url = "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome";

const parede = document.querySelector("#box");


async function getData(link) {
    const Data = await fetch(link);
    const DataJson = await Data.json();
    console.log(DataJson.dados);
    for (let a = 0; a < 30; a++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        console.log(DataJson.dados[a].id);
        img.src = DataJson.dados[a].urlFoto;
        console.log(img);
        div.appendChild(img);
        console.log(div);
        parede.insertAdjacentElement("beforebegin",div);
    }
}

getData(url);
