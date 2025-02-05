function moveElementsUp() {
  const h1Element = document.querySelector('h1');
  const inputPesquisa = document.getElementById("inputPesquisa")
  const buttonPesquisa = document.getElementById("buttonPesquisa") 
  const section = document.getElementById("sectionStyle")
  h1Element.style.zIndex = '999';
  h1Element.style.transition = 'all 0.3s ease-in-out';
  h1Element.style.margin = '0';
  h1Element.style.position = 'relative';
  h1Element.style.top = '0';
  h1Element.style.height = '12vh';


  inputPesquisa.style.zIndex = '999';
  inputPesquisa.style.transition = 'all 0.3s ease-in-out';
  inputPesquisa.style.marginTop = '0'

  
  buttonPesquisa.style.zIndex = '999';
  buttonPesquisa.style.transition = 'all 0.3s ease-in-out';
  buttonPesquisa.style.marginTop = '0'
  buttonPesquisa.style.marginBottom = '0'

  section.style.marginBottom = '0' 

}

buttonPesquisa.addEventListener('click', moveElementsUp);



function pesquisar(){
  let section = document.getElementById("resultados-pesquisa") 
  let inputPesquisa = document.getElementById("inputPesquisa").value; 
  let titulo = "";
  let sinopse = "";
  let tags = "";
  
  let resultados = ""

  if(!inputPesquisa || inputPesquisa == " "){
    section.innerHTML = '<p class="atencao">Nada foi encontrado. Digite algo para pesquisar</p>'
    return
  }

  for (let dado of animes){
    inputPesquisa = inputPesquisa.toLowerCase()
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    tags = dado.tags.toLowerCase()

    if(titulo.includes(inputPesquisa) || sinopse.includes(inputPesquisa) || tags.includes(inputPesquisa)){
      resultados += `
      <div class="item-resultado">
          <img class="imgLogo" src=${dado.imagem} alt="Banner de Black Clover">
            <div class="resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.sinopse}</p>
              <p class="descricao-meta">Classificação Etária: ${dado.classificacaoEtaria}</p>
              <p class="descricao-meta">Gênero: ${dado.genero}</p>
              <a href=${dado.informacoes} target="_blank">Para mais informações</a>
            </div>
        </div>
    `
  }
  if(!resultados){
    section.innerHTML = "<p class='atencao'>Nada foi encontrado</p>"
  }
  
  section.innerHTML = resultados
}}

