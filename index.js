const url = "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome";

const parede = document.querySelector("#box");

//Pegando dados da API principal
async function getData(link) {
    const Data = await fetch(link);
    const DataJson = await Data.json();
    console.log(DataJson.dados);
    return DataJson.dados;
}

async function mainFunction() {
    const result = await getData(url);
    for (let a = 0; a < 30; a++) {
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
    // adição de eventlistenner nos cards
    let cards = document.querySelectorAll(".card_deputado");
    console.log(cards);
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

function openColse(){
    const botao = document.querySelector("#popup-1");
    botao.classList.toggle('active');
}

async function getDepData(urlDep){
    
    let depData = await fetch(urlDep);
    depDataJson = await depData.json();
    console.log(depDataJson.dados);

    let imagem_dep = document.querySelector("#imagem_dep");
    imagem_dep.src = depDataJson.dados.ultimoStatus.urlFoto;

    let name_dep_card = document.querySelector("#name_dep_card");
    name_dep_card.innerHTML = depDataJson.dados.ultimoStatus.nomeEleitoral;

    openColse();
   
}



function close(){
    console.log("funciona");
}



mainFunction()

