
//função assíncrona que baixa o .JSON
async function getJSON() {
    //espera o fetch terminar o download do arquivo JSON e salva o retorno na variavel resposta
    const resposta = await fetch("./xd.json").then(  resposta =>{
        //se a resposta for diferente de 200(ok), dá erro, se não continua(else imaginario)
        if(!resposta.ok){
            console.log(resposta.statusText)
            throw new Error("Erro na requisição: " + resposta.statusText);
        }
        let dados =  resposta.json()
        return dados;
        
    }).catch(error =>{
        console.log("Deu erro aí manokk: " + error);
    })
    //retorna o resporta (let dados)
    return resposta
}
//função que monta o html por templates
async function buildProjects(){ 
    //espera a função getJSON terminar
    var jsonInsano = await getJSON()
    //se não for undefined(http 200), monta o template
    if (jsonInsano != undefined) {
        jsonInsano.forEach(e => {
            let templateCopia = template.content.cloneNode(true);
            let titleObj = templateCopia.querySelector("#title").innerHTML = e.projeto;
            wholeBox.appendChild(templateCopia);
        });
        
    }else{
        //montar template de erro
        wholeBox.textContent = "Deu erro"
    }
}
//espera a pagina carregar pra executar os gets elements e querySelector
document.addEventListener('DOMContentLoaded', async function () {
    wholeBox = document.querySelector("#wholeBox");
    template = document.getElementById("child-project");
    wholeBox.style.backgroundColor = "aliceblue";
    //espera buildPorjects() terminar.
    await buildProjects();
    console.log("Finalizei")
})