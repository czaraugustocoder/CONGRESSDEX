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
    for (let a = 0; a < result.length; a++) {
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
            linkDep = "https://dadosabertos.camara.leg.br/api/v2/deputados/"+elementId;
            getDepData(linkDep);
        })
    }
}

async function getDepData(urlDep){
    //Encapsulação dos dados
    let depData = await fetch(urlDep);
    let depDataJson = await depData.json()
    console.log(depDataJson);
    let nameDep = depDataJson.dados.nomeCivil
    console.log(nameDep);
    let dataNasc = depDataJson.dados.dataNascimento;
    console.log(dataNasc);
    let escolDep = depDataJson.dados.escolaridade;
    console.log(escolDep);
    let estDep = depDataJson.dados.ufNascimento;
    let munDep = depDataJson.dados.municipioNascimento;
    let naturalidade = `${munDep} (${estDep})`;
    console.log(naturalidade); 
    var newPage = window.open("");
    newPage.document.write(
    `<html>
    <head>
    <title>${nameDep}</title>
    <link rel="stylesheet" href="deputado.css">
    </head>
    <body>
    <h1>${nameDep}</h1>
    <h3>Naturalidade: ${naturalidade}</h3>
    <h3>Escolaridade: ${escolDep}</h3>
    </body>
    </html>`
    );
}


mainFunction()

